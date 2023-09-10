import {ButtonTypes} from "@/shared/ui/button/types/buttonTypes";
import button from '@/shared/ui/button/style/button.module.scss'

export const Button  = ({property,content}: ButtonTypes) => {
	const Button = () => <button className={property}>{content}</button>

	return(
		<Button/>
	)
}
