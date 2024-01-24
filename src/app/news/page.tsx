'use client'
import useSWR from 'swr'
import news from '../news/style/news.module.scss'
import {ArrayItem, newsStore, NewsStoreProps} from "@/app/news/store/newsStore";
import {fetchDataNews} from "@/app/news/api/newsAPI";
import NewsItem from "@/entites/news/ui/news-item";



export default function NewsPages () {
	const newsAll = newsStore(state => state.newsAll)

    return  (

        <div className={news.container}>
	        {newsAll ?
		        newsAll.map((item) =>
			        <NewsItem
				        key={item.id}
				        titleContext={item.title}
				        contentContext={item.content}
			        />)
		        : 'Loading'}

        </div>
    )
}
