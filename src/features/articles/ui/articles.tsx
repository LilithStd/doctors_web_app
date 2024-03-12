
import { Title } from "@/shared/ui/title/title";
import { ARTICLES_PROPS } from "@/features/articles/const/articlesProps";
import articles from '../style/articles.module.scss'
import ArticleItem from "@/entites/article/ui/article";
import useSWR from "swr";
import {ArrayItem, newsStore} from "@/app/news/store/newsStore";
import {useEffect} from "react";
import {articlesStore} from "@/app/articles/store/articlesStore";
import {fetchDataArticles} from "@/app/articles/api/articlesAPI";

export default function Articles() {
    const { data, isLoading,error } = useSWR<ArrayItem[]>('http://localhost:3000/api/articles', fetchDataArticles);
    const getArticles = articlesStore(state => state.getAllArticles)
    function getRandomInteger(min:number, max:number) {
        return Math.floor(Math.random() * (max - min + 1)) + min
    }
    useEffect (() =>
        {
            if (data) {
                getArticles(data)
            }
        }
        ,[data]
    )

    const articleResult = articlesStore(state => state.articlesAll)
    const loading = articlesStore(state => state.loading)

    function RandomArticle() {
        const copyOriginal = articleResult.slice();
        const randomInteger = getRandomInteger(0,copyOriginal.length - 1)
        return copyOriginal[randomInteger]
    }

    const randomArticle = RandomArticle()

    return (

        <div className={articles.container}>
            <div className={articles.titleContainer}>
                <Title size={ARTICLES_PROPS.TITLE_SIZE} content={'ARTICLES'} />
            </div>
            <div className={articles.subContainer}>
                {loading ?
                    <ArticleItem
                        id={randomArticle.id}
                        titleContext={randomArticle.title}
                        contentContext={randomArticle.content}
                    /> : 'loading'
                }

            </div>
        </div>
    )
}
