import articlesFull from "@/entites/articleFull/style/articlesFull.module.scss"
import Article from "@/entites/articleFull/components/article/ui/article";
import Search from "@/shared/ui/search/ui/search";
import {Title} from "@/shared/ui/title/title";
import {SIZE_TITLE_GLOBAL} from "@/global_utils/title_props/title_props";


export default function ArticleFull () {
    return  (

        <div className={articlesFull.container}>
            <Title
                size={SIZE_TITLE_GLOBAL.LARGE}
                property={articlesFull.title}
                content={'ALL ARTICLES'}/>
            <div className={articlesFull.searchContainer}>
                <Search/>
            </div>
            <div className={articlesFull.subContainer}>
                <Article/>
                <Article/>
                <Article/>
                <Article/>
            </div>

        </div>
    )
}
