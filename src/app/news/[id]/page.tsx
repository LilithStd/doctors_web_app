'use client'
import {ArrayItem, newsStore} from "@/app/news/store/newsStore";
import {Title} from "@/shared/ui/title/title";
import {Text} from "@/shared/ui/text/ui/text";
import {SIZE_TITLE_GLOBAL} from "@/global_utils/title_props/title_props";
import newsId from "./style/newsId.module.scss"



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
	const getNews = newsStore(state => state.newsAll)
	const setCurrentNews = newsStore(state => state.setCurrentNews)
	setCurrentNews(props.params.id)
	const storeCurrentNews = newsStore(state => state.currentNews)

	const currentNews = getNews.length !== 0 ? storeCurrentNews : {id:'1',title:'Error News Identification',content:''}

    return  (

        <div className={newsId.container}>
	        <Title
		        size={SIZE_TITLE_GLOBAL.LARGE}
		        content={currentNews!.title}
		        property={newsId.newsIdTitle}
	        />
	        <Text content={currentNews!.content}/>
        </div>
    )
}
