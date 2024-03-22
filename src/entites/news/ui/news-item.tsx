import { Title } from "@/shared/ui/title/title";
import { NEWS_BUTTON_PROPS, NEWS_CONTENT_PROPS, NEWS_PROPS } from "@/entites/news/const/newsProps";
import { Text } from "@/shared/ui/text/ui/text";
import { Button } from "@/shared/ui/button/ui/button";
import randomNews from "@/entites/news/style/random-news.module.scss"
import {NewsItemProps} from "@/entites/news/types/newsItemProps";
import Link from "next/link";



export default function NewsItem({id,titleContext,contentContext}:NewsItemProps) {
    const redirectCallback = () => {
        return <Link
            href={`/news/${id}`}
            style={{textDecoration: 'none'}}>
            {NEWS_BUTTON_PROPS.content}
        </Link>
    }
    return (
        <div className={randomNews.container}>
            <Title property={randomNews.titleProperty} size={NEWS_PROPS.TITLE_SIZE} content={titleContext} />
            <Text content={contentContext} />
            <Button
                property={randomNews.buttonProperty}
                content={NEWS_BUTTON_PROPS.content}
                children={redirectCallback()}
            />
        </div>
    )
}
