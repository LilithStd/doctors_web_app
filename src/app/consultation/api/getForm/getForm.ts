import {formProps} from "@/app/consultation/api/types/apiConsultationTypes";
import {userData} from '../../store/consultationsStore'


const write  = require('../writeData/writeData')
export default function GetForm(data:formProps) {
	
	write(data)
}
