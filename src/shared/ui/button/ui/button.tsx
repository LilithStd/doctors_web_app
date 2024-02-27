import {ButtonTypes} from "@/shared/ui/button/types/buttonTypes";
import button from '@/shared/ui/button/style/button.module.scss'

export const Button  = ({property,content, callBack , children}: ButtonTypes) => {
	const Button = () =>
		<button
			className={`${button.button} ${property}`}
			onClick={callBack}>
		{children ? children : content }
	</button>
	return(
		<Button/>
	)
}
