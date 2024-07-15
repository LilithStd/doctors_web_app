
import {TextTypes} from "@/shared/ui/text/types/textTypes";

export const Text  = ({content,full,property}:TextTypes) => {
	 const Text = () => {
		return content.length > 300 ? <p className={ property ? property: ''}>{content.slice(0, full ? content.length : 300) + '...'}</p> : <p className={ property ? property: ''}>{content}</p>

	 }

	return(
		<Text/>
	)
}
