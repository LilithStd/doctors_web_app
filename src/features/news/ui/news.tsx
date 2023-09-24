import news from '../style/news.module.scss'
import RandomNews from "@/entites/news/ui/random-news";
import {Title} from "@/shared/ui/title/title";
import {NEWS_PROPS} from "@/features/news/const/newsProps";


export default function News () {
    return  (

        <div className={news.container}>
            <div className={news.titleContainer}>
                <Title size={NEWS_PROPS.TITLE_SIZE} content={'Random NEWS'}/>
            </div>
            <div className={news.subContainer}>
                <RandomNews/>
                <RandomNews/>
            </div>
        </div>
    )
}
