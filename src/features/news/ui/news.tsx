import news from '../style/news.module.scss'
import {Title} from "@/shared/ui/title/title";
import {NEWS_PROPS} from "@/features/news/const/newsProps";
import NewsItem from "@/entites/news/ui/news-item";
import useSWR from "swr";
import {ArrayItem, newsStore} from "@/app/news/store/newsStore";
import {fetchDataNews} from "@/app/news/api/newsAPI";
import {useEffect} from "react";


export default function News () {
    const { data, isLoading,error } = useSWR<ArrayItem[]>('http://localhost:3000/api/news', fetchDataNews);
    const getNews = newsStore(state => state.getAllNews)
    function getRandomInteger(min:number, max:number) {
        return Math.floor(Math.random() * (max - min + 1)) + min
    }
    useEffect (() =>
        {
            if (data) {
                getNews(data)
            }
        }
        ,[data]
    )


    const newsResult = newsStore(state => state.newsAll)
    const loading = newsStore(state => state.loading)

    function RandomNews() {
        const randomNews:ArrayItem[] = []
        const copyOriginal = newsResult.slice();

        for (let i = 0; i < 2 ;i++) {

            const randomInteger = getRandomInteger(0,copyOriginal.length - 1)
            const randomElement = copyOriginal.splice(randomInteger,1)[0]
            randomNews.push(randomElement)
            }
        return randomNews
        }


    const randomNews = RandomNews()

    return  (

        <div className={news.container}>
            <div className={news.titleContainer}>
                <Title size={NEWS_PROPS.TITLE_SIZE} content={'Random NEWS'}/>
            </div>
            <div className={news.subContainer}>
                { loading ? randomNews.map((item) =>
                    <NewsItem
                        key={item.id}
                        titleContext={item.title}
                        contentContext={item.content}

                    />) : 'loading'}
            </div>
        </div>
    )
}
