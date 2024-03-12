'use client'
import articles from '@/app/articles/style/articles.module.scss'
import useSWR from "swr";
import {useEffect} from "react";
import {fetchDataArticles} from "@/app/articles/api/articlesAPI";
import {ArrayItem, articlesStore} from "@/app/articles/store/articlesStore";
import articlesFull from "@/entites/articleFull/style/articlesFull.module.scss";
import {Title} from "@/shared/ui/title/title";
import {SIZE_TITLE_GLOBAL} from "@/global_utils/titleProps/title_props";
import Search from "@/shared/ui/search/ui/search";
import ArticleItem from "@/entites/article/ui/article";
import {searchStore} from "@/shared/ui/search/store/searchStore";


export default function ArticlesPages () {
    const articlesAll =  articlesStore(state => state.articlesAll)
    const { data, isLoading,error } = useSWR<ArrayItem[]>('http://localhost:3000/api/articles', fetchDataArticles);
    const getArticles = articlesStore(state => state.getAllArticles)
    const searchLoading = searchStore(state => state.loading)
    const searchContext = searchStore(state => state.currentSearch)

    const searchHandler = () => {
        if(searchLoading && searchContext !== '') {
            return articlesAll.filter((item) => item.title.toLowerCase().includes(searchContext))

        }else return articlesAll

    }

    const isSearchResult = searchHandler()

    useEffect (() =>
        {
            if (data) {
                getArticles(data)
            }
        }
        ,[data]
    )


    return  (

        <div className={articles.container}>
            <div className={articlesFull.container}>
                <Title
                    size={SIZE_TITLE_GLOBAL.LARGE}
                    property={articlesFull.title}
                    content={'ALL ARTICLES'}/>
                <div className={articlesFull.searchContainer}>
                    <Search/>
                </div>
                <div className={articlesFull.subContainer}>
                    {isSearchResult.map((item) =>
                        <ArticleItem
                            key={item.id}
                            id={item.id}
                            titleContext={item.title}
                            contentContext={item.content}
                        />)
                    }
                    {/*{articlesAll && searchContext === '' ?*/}
                    {/*    articlesAll.map((item) =>*/}
                    {/*        <ArticleItem*/}
                    {/*            key={item.id}*/}
                    {/*            id={item.id}*/}
                    {/*            titleContext={item.title}*/}
                    {/*            contentContext={item.content}*/}
                    {/*        />)*/}
                    {/*    : isSearchResult.length !== 0 ? isSearchResult.map((item) =>*/}
                    {/*            <ArticleItem*/}
                    {/*                key={item.id}*/}
                    {/*                id={item.id}*/}
                    {/*                titleContext={item.title}*/}
                    {/*                contentContext={item.content}*/}
                    {/*            />):'Совпадений не найдено'*/}

                    {/*}*/}
                </div>

            </div>
        </div>
    )
}
