
import {TextTypes} from "@/shared/ui/text/types/textTypes";

export const Text  = ({content,full}:TextTypes) => {
	 const Text = () => {
		return content.length > 300 ? <p>{content.slice(0, full ? content.length : 300) + '...'}</p> : <p>{content}</p>

	 }

	return(
		<Text/>
	)
}
