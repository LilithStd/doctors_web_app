import {ReactNode} from "react";

export interface ButtonTypes {
	content?:string,
	property?:string,
	type?:"button"|"submit"|"reset"|undefined,
	callBack?: () => void,
	children?: ReactNode
}
