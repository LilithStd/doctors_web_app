'use client'
import news from '../news/style/news.module.scss'
import {ArrayItem, newsStore, NewsStoreProps} from "@/app/news/store/newsStore";
import NewsItem from "@/entites/news/ui/news-item";
import useSWR from "swr";
import {fetchDataNews} from "@/app/news/api/newsAPI";
import {useEffect, useState} from "react";
import dynamic from "next/dynamic";

export default function NewsPages () {
	const newsAll = newsStore(state => state.newsAll)
	const { data, isLoading,error } = useSWR<ArrayItem[]>('http://localhost:3000/api/news', fetchDataNews);
	const getNews = newsStore(state => state.getAllNews)
	const NoSSRComponent = dynamic(() => import('../../entites/news/ui/news-item'), { ssr: false })
	useEffect (() =>
		{
			if (data) {
				getNews(data)
			}
		}
		,[data]
	)
	const [isClient, setIsClient] = useState(false)

	useEffect(() => {
		setIsClient(true)
	}, [])

    return  (

        <div className={news.container}>
	        <h1>{isClient ? 'This is never prerendered' : 'Prerendered'}</h1>
	        {newsAll && newsAll.length !== 0 ?
		        newsAll.map((item) =>
			        <NewsItem
				        key={item.id}
				        id={item.id}
				        titleContext={item.title}
				        contentContext={item.content}
			        />)
		        : <p>Loading</p>
			}

        </div>
    )
}
