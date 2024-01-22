import {formProps} from "@/app/consultation/api/types/apiConsultationTypes";
import {FieldValues} from "react-hook-form";

export interface StoreTypes{
	userForm: formProps;
	isLoading:boolean;
	errors:string;
	createUserFormData: (userForm: formProps | FieldValues) => void;
}
