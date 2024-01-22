import {ButtonTypes} from "@/shared/ui/button/types/buttonTypes";
import button from '@/shared/ui/button/style/button.module.scss'

export const Button  = ({property,content, callBack}: ButtonTypes) => {
	const Button = () => <button className={property} onClick={callBack}>{content}</button>
	return(
		<Button/>
	)
}
