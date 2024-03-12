'use client'
import news from '../news/style/news.module.scss'
import {ArrayItem, newsStore, NewsStoreProps} from "@/app/news/store/newsStore";
import NewsItem from "@/entites/news/ui/news-item";
import useSWR from "swr";
import {fetchDataNews} from "@/app/news/api/newsAPI";
import {useEffect} from "react";

export default function NewsPages () {
	const newsAll = newsStore(state => state.newsAll)
	const { data, isLoading,error } = useSWR<ArrayItem[]>('http://localhost:3000/api/news', fetchDataNews);
	const getNews = newsStore(state => state.getAllNews)

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
	        {newsAll ?
		        newsAll.map((item) =>
			        <NewsItem
				        key={item.id}
				        id={item.id}
				        titleContext={item.title}
				        contentContext={item.content}
			        />)
		        : 'Loading'
			}

        </div>
    )
}
