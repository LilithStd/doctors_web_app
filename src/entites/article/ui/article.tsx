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

import Link from "next/link";
import {ArticleItemProps} from "@/entites/article/types/articleItemProps";

export default function ArticleItem({id,titleContext,contentContext}:ArticleItemProps) {
	const redirectCallback = () => {
		return <Link
			href={`/articles/${id}`}
			style={{textDecoration: 'none'}}>
			{ARTICLE_BUTTON_PROPS.content}
		</Link>
	}
	return (
		<div className={article.container}>
			<Title
				property={article.titleProperty}
				size={ARTICLES_PROPS.TITLE_SIZE}
				content={titleContext} />
			<div className={article.subContainer}>
				<ArticleLogo />
				<div className={article.contentContainer}>
					<Text content={contentContext} />
					<Button
						property={article.buttonProperty}
						content={ARTICLE_BUTTON_PROPS.content}
						children={redirectCallback()}
					/>
				</div>
			</div>
		</div>
	)
}
