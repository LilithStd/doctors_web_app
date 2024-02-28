'use client'
import {testsStore} from "@/app/tests/store/testsStore";
import {Title} from "@/shared/ui/title/title";
import {SIZE_TITLE_GLOBAL} from "@/global_utils/title_props/title_props";
import {Text} from "@/shared/ui/text/ui/text";
import testId from '@/app/tests/[id]/style/testId.module.scss'
import {useState} from "react";
import {Button} from "@/shared/ui/button/ui/button";
import {EventType} from "react-hook-form";

export interface CurrentTestsProps {
	params: {id:string}
}

export async function getStaticPaths() {
	const response = await fetch ('http://localhost:3000/api/tests');
	const data = await response.json();
	const paths = data.map((item:string | any) => ({
		params: { id: item.id.toString() },
	}))

	return {
		paths,
		fallback:false
	}
}

export async function getStaticProps(context:any) {
	const id = context.params.id
	const response = await fetch('http://localhost:3000/api/tests/' + id)
	const data  = await response.json()
	return {
		props: {
			news:data
		}
	}
}
export default function Test(props:CurrentTestsProps) {
	const getTest = testsStore(state => state.testsAll)
	const setCurrentTest = testsStore(state => state.setCurrentTest)
	setCurrentTest(props.params.id)
	const storeCurrentTest = testsStore(state => state.currentTest)
	const currentTest =
		getTest.length !== 0 ?
			storeCurrentTest :
				{id:'1',title:'Error News Identification',content:'',questions:[]}
	const formSubmitHandler = (e:any) => {
		e.preventDefault();

		// Read the form data
		const form = e.target;
		const formData = new FormData(form);

		// Or you can work with it as a plain object:
		const formJson = Object.fromEntries(formData.entries());
		console.log(formJson);
	}
	return (
		<div>
			<Title
				size={SIZE_TITLE_GLOBAL.LARGE}
				content={currentTest!.title}
				property={testId.testIdTitle}
			/>
			<Text content={currentTest!.content}/>
			<form
				className={testId.formContainer}
				onSubmit={formSubmitHandler}
			>
				{
					currentTest.questions.length !== 0 ?
						currentTest.questions.map((item) =>
							<label key={item.title}>
								{
									item.variants.map((variants) =>
										<input
											type={"radio"}
											name={item.title}
											key={variants.title}
											value={variants.count}
										/>
									)
								}

								{item.title}
							</label>
						):
						''
				}

			<Button
				content={'Get Result'}
				type={"submit"}

			/>
			</form>
		</div>
	)
}
