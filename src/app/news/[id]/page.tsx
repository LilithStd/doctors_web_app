'use client'
import {ArrayItem, newsStore} from "@/app/news/store/newsStore";
import {Title} from "@/shared/ui/title/title";
import {Text} from "@/shared/ui/text/ui/text";
import {SIZE_TITLE_GLOBAL} from "@/global_utils/titleProps/title_props";
import newsId from "./style/newsId.module.scss"
import {Suspense, useEffect} from "react";
import useStore from "@/global_utils/storeUtils/useStore";
import Loading from "@/app/loading";



export interface CurrentNewsProps {
	params: {id:string}
}

export async function getStaticPaths() {
	const response = await fetch ('http://localhost:3000/api/news');
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
	const response = await fetch('http://localhost:3000/api/news/' + id)
	const data  = await response.json()
	return {
		props: {
			news:data
		}
	}
}
export default function News (props: CurrentNewsProps) {
	const getNews = useStore(newsStore,state => state.newsAll)
	const setCurrentNews = newsStore (state => state.setCurrentNews)
	setCurrentNews(props.params.id)
	const storeCurrentNews = useStore(newsStore,state => state.currentNews)

	// const currentNews = getNews && getNews.length !== 0 ? storeCurrentNews
	// const currentNews = getNews && getNews.length !== 0 ? storeCurrentNews : {id:'1',title:'Error' +
	// 		' News' +
	// 		' Identification',content:''}
    return  (

        <div className={newsId.container}>
	        {
				storeCurrentNews ?
					<>
						<Title
							size={SIZE_TITLE_GLOBAL.LARGE}
							content={storeCurrentNews!.title}
							property={newsId.newsIdTitle}
						/>
						<Text content={storeCurrentNews.content}/>

					</>
		        : <Loading/>

	        }
        </div>
    )
}
