import { Title_types } from "@/shared/ui/title/types/title_types";

export const Title = ({ property, size, content }: Title_types) => {
	interface GenericObject {
		[key: string]: any,
	}
	const renderTitle: GenericObject = {
		'SMALL': () => <h3 className={property}>{content}</h3>,
		'MEDIUM': () => <h2 className={property}>{content}</h2>,
		'LARGE': () => <h1 className={property}>{content}</h1>,
	}
	const Title = renderTitle[size]

	return (
		<Title />
	)
}
