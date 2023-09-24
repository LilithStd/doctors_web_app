import {Title} from "@/shared/ui/title/title";
import {NEWS_BUTTON_PROPS, NEWS_CONTENT_PROPS, NEWS_PROPS} from "@/entites/news/const/newsProps";
import {Text} from "@/shared/ui/text/ui/text";
import {Button} from "@/shared/ui/button/ui/button";
import randomNews from "@/entites/news/style/random-news.module.scss"

export default function RandomNews () {
    return  (
        <div className={randomNews.container}>
	        <Title size={NEWS_PROPS.TITLE_SIZE} content={NEWS_PROPS.content}/>
            <Text content={NEWS_CONTENT_PROPS.content}/>
            <Button property={randomNews.buttonProperty} content={NEWS_BUTTON_PROPS.content}/>
        </div>
    )
}
