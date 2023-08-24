import {Title_types} from "@/shared/ui/title/types/title_types";

export const Title  = ({size,content}:Title_types) => {
	const renderTitle = {
		'SMALL': () => <h3>{content}</h3>,
		'MEDIUM': () => <h2>{content}</h2>,
		'LARGE': () => <h1>{content}</h1>,
	}
	const Title = renderTitle[size]

    return(
	        <Title/>
	    )
}
