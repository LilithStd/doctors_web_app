import {create} from "zustand";
import {StoreTypes} from "@/app/consultation/store/types/consultationStoreTypes";





export const userData = create<StoreTypes>((set) 	 => ({
	userForm:{
		name:'',
		phone:0,
		email:'',
		variant:''
	},
	isLoading:false,
	errors:'',
	createUserFormData: (form) =>
			set(state => {
				const newUserForm = {
					name:form.name,
					phone: form.phone,
					email: form.email,
					variant: form.variant.label
				}
				return state.userForm = newUserForm
			})

}));
