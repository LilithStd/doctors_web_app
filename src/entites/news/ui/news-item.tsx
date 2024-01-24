import { Title } from "@/shared/ui/title/title";
import { NEWS_BUTTON_PROPS, NEWS_CONTENT_PROPS, NEWS_PROPS } from "@/entites/news/const/newsProps";
import { Text } from "@/shared/ui/text/ui/text";
import { Button } from "@/shared/ui/button/ui/button";
import randomNews from "@/entites/news/style/random-news.module.scss"
import {NewsItemProps} from "@/entites/news/types/newsItemProps";

export default function NewsItem({titleContext,contentContext}:NewsItemProps) {
    return (
        <div className={randomNews.container}>
            <Title property={randomNews.titleProperty} size={NEWS_PROPS.TITLE_SIZE} content={titleContext} />
            <Text content={contentContext} />
            <Button property={randomNews.buttonProperty} content={NEWS_BUTTON_PROPS.content} />
        </div>
    )
}
