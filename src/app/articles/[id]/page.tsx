'use client'
import {newsStore} from "@/app/news/store/newsStore";
import {articlesStore} from "@/app/articles/store/articlesStore";
import articleId from "@/app/articles/[id]/style/articleId.module.scss"
import {Title} from "@/shared/ui/title/title";
import {SIZE_TITLE_GLOBAL} from "@/global_utils/titleProps/title_props";
import {Text} from "@/shared/ui/text/ui/text";
import useStore from "@/global_utils/storeUtils/useStore";
import Loading from "@/app/loading";

export interface CurrentArticleProps {
    params: {id:string}
}

export async function getStaticPaths() {
    const response = await fetch ('http://localhost:3000/api/articles');
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
    const response = await fetch('http://localhost:3000/api/articles/' + id)
    const data  = await response.json()
    return {
        props: {
            news:data
        }
    }
}
export default function Article (props:CurrentArticleProps) {
    const getArticles = useStore(articlesStore,state => state.articlesAll)
    const setCurrentArticle = articlesStore(state => state.setCurrentArticle)

    setCurrentArticle(props.params.id)
    const storeCurrentArticle = useStore(articlesStore,state => state.currentArticle)

    // const currentArticle =
    //     getArticles.length !== 0
    //         ?
    //         storeCurrentArticle
    //         :
    //         {id:'1',title:'Error News' + ' Identification',content:''}
    return  (

        <div className={articleId.container}>
            {
                storeCurrentArticle ?
                    <>
                        <Title size={SIZE_TITLE_GLOBAL.LARGE}
                               content={storeCurrentArticle!.title}
                               property={articleId.articleTitle}
                        />
                        <Text content={storeCurrentArticle!.content}/>
                </> : <Loading/>
            }

        </div>
    )
}
