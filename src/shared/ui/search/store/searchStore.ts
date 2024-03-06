import {create} from 'zustand'
import {createJSONStorage, persist} from "zustand/middleware";

export interface ArrayItem {
	id:string,
	title:string,
	content:string
}
export interface SearchStoreProps {
	searchContext: string,
	currentSearch:string,
	loading:boolean,
	setCurrentSearch: (search: string) => void,
	setLoading: (search: string) => void,
}



export const searchStore = create<SearchStoreProps>()(
	persist(

		(set) => ({
			searchContext: '',
			currentSearch:'',
			loading:false,
			setCurrentSearch: (search) => set((state) => ({
				beforeData: state.loading = true,
				currentSearch: state.currentSearch = search,
				// afterData: state.loading = false
			})),
			setLoading: () => set((state) => ({

			})),

		}),
		{
			name:'search-storage',
			storage: createJSONStorage(() => sessionStorage)}
	)
)
