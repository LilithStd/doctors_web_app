import {ReactNode} from "react";

export interface ButtonTypes {
	content?:string,
	property?:string,
	callBack?: () => void,
	children?: ReactNode
}
