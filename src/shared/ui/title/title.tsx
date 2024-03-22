import { Title_types } from "@/shared/ui/title/types/title_types";
import title from "@/shared/ui/title/style/title.module.scss"

export const Title = ({ property, size, content }: Title_types) => {
	interface GenericObject {
		[key: string]: any,
	}
	const renderTitle: GenericObject = {
		'SMALL': () => <h3 className={`${property} ${title.defaultStyle}`}>{content}</h3>,
		'MEDIUM': () => <h2 className={`${property} ${title.defaultStyle}`}>{content}</h2>,
		'LARGE': () => <h1 className={`${property} ${title.defaultStyle}`}>{content}</h1>,
	}
	const Title = renderTitle[size]

	return (
		<Title />
	)
}
