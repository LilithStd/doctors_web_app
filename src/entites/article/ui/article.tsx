'use client'
import { Title } from "@/shared/ui/title/title";
import { ARTICLES_PROPS } from "@/features/articles/const/articlesProps";
import {
	ARTICLE_PROPS,
	ARTICLE_CONTENT_PROPS,
	ARTICLE_BUTTON_PROPS
} from "@/entites/article/const/articleProps";
import { Text } from "@/shared/ui/text/ui/text";
import article from "@/entites/article/style/article.module.scss"
import { Button } from "@/shared/ui/button/ui/button";
import ArticleLogo from "@/entites/article/components/articleLogo/ui/articleLogo";
import { useMatchMedia } from "@/shared/hooks/media_query";

export default function Article() {
	// @ts-ignore
	const { isMobile } = useMatchMedia()

	return (

		<div className={article.container}>
			<Title property={article.titleProperty} size={ARTICLES_PROPS.TITLE_SIZE} content={ARTICLE_PROPS.content} />
			<div className={article.subContainer}>
				{isMobile ? '' : <ArticleLogo />}

				<div className={article.contentContainer}>
					<Text content={ARTICLE_CONTENT_PROPS.content} />
					<Button property={article.buttonProperty} content={ARTICLE_BUTTON_PROPS.content} />
				</div>
			</div>
		</div>
	)
}
