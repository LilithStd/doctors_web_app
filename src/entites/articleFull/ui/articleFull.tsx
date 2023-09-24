import articlesFull from "@/entites/articleFull/style/articlesFull.module.scss"
import Article from "@/entites/articleFull/components/article/ui/article";
import Search from "@/shared/ui/search/ui/search";


export default function ArticleFull () {
    return  (

        <div className={articlesFull.container}>
            <Search/>
            <div className={articlesFull.subContainer}>
                <Article/>
                <Article/>
                <Article/>
                <Article/>
            </div>

        </div>
    )
}
