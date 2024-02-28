'use client'
import Search from "@/shared/ui/search/ui/search";
import Test from "@/entites/test/ui/test";
import {TEST_MOCK_ITEMS} from "@/entites/test/const/TEST_MOCK_ITEMS";
import tests from "@/app/tests/style/tests.module.scss";
import useSWR from "swr";
import {fetchDataNews} from "@/app/news/api/newsAPI";
import {useEffect} from "react";
import {ArrayItem, testsStore} from "@/app/tests/store/testsStore";
import {fetchDataTests} from "@/app/tests/api/testsAPI";

export default function Tests() {
	const testsAll = testsStore(state => state.testsAll)
	const { data, isLoading,error } = useSWR<ArrayItem[]>('http://localhost:3000/api/tests', fetchDataTests);
	const getTests = testsStore(state => state.getAllTests)

	useEffect (() =>
		{
			if (data) {
				getTests(data)
			}
		}
		,[data]
	)
	return (
		<div className={tests.container}>
			<Search/>
			<div className={tests.subContainer}>
				{testsAll.map((item) =>
					<Test
						id={item.id}
						title={item.title}
						context={''}
						key={item.id}
					/>)}
			</div>
		</div>
	)
}
