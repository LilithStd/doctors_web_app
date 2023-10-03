import articles from '@/app/articles/style/articles.module.scss'
import ArticleFull from "@/entites/articleFull/ui/articleFull";

export default function ArticlesPages () {
    return  (

        <div className={articles.container}>
            <ArticleFull/>
        </div>
    )
}
