import Article from "@/entites/article/ui/article";
import {Title} from "@/shared/ui/title/title";
import {ARTICLES_PROPS} from "@/features/articles/const/articlesProps";
import articles from '../style/articles.module.scss'

export default function Articles () {
    return  (

        <div className={articles.container}>
            <div className={articles.titleContainer}>
                <Title size={ARTICLES_PROPS.TITLE_SIZE} content={'ARTICLES'}/>
            </div>
            <div className={articles.subContainer}>
                <Article/>
            </div>
        </div>
    )
}
