'use client'
import news from '../news/style/news.module.scss'
import {ArrayItem, newsStore, NewsStoreProps} from "@/app/news/store/newsStore";
import NewsItem from "@/entites/news/ui/news-item";
import useSWR from "swr";
import {fetchDataNews} from "@/app/news/api/newsAPI";
import {Suspense, useEffect} from "react";
import useStore from "@/global_utils/storeUtils/useStore";
import Loading from "@/app/loading";


export default function NewsPages () {
	const newsAll = useStore(newsStore,state => state.newsAll)
	const { data, isLoading,error } = useSWR<ArrayItem[]>('http://localhost:3000/api/news', fetchDataNews);
	const getNews = newsStore(state => state.getAllNews)
	// const newsAll =[{id:'1',title:'1',content:'content1'},{id:'2',title:'2',content:'content2'}]

	useEffect (() =>
		{
			if (data) {
				getNews(data)

			}
		}
		,[data]
	)

    return  (

        <div className={news.container}>
	        {newsAll && newsAll.length > 0 ?
		        newsAll.map((item) =>
			        <NewsItem
				        key={item.id}
				        id={item.id}
				        titleContext={item.title}
				        contentContext={item.content}

			        />
		        )
		        : <Loading/>
			}

        </div>
    )
}
