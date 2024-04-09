import {create} from "zustand";
import {StoreTypes} from "@/app/consultation/store/types/consultationStoreTypes";
import {createJSONStorage, persist} from "zustand/middleware";






export const userData = create<StoreTypes>() (
	persist((set,get) 	 => ({
		userForm:{
			name:'',
			phone:0,
			email:'',
			variant:'',
			userText:''
		},
		isLoading:false,
		errors:'',
		createUserFormData: (userForm) =>
			set(state => {
				const newUserForm = {
					name:userForm.name,
					phone: userForm.phone,
					email: userForm.email,
					variant: userForm.variant,
					userText:userForm.userText
				}
				return get().userForm = newUserForm
			})

	}),{name:'consultation-storage',storage: createJSONStorage(()=> sessionStorage)})
);
