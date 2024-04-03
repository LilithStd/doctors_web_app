import {create} from 'zustand';
import {fetchDataNews} from "@/app/news/api/newsAPI";
import {createJSONStorage, persist} from "zustand/middleware";

export interface ArrayItem {
	id:string,
	title:string,
	content:string

}
export interface NewsStoreProps {
	newsAll: ArrayItem[],
	currentNews:ArrayItem,
	loading:boolean,
	getAllNews :(newsAllLoading:ArrayItem[]) => void,
	setCurrentNews: (newsID: string) => void,
}



export const newsStore = create<NewsStoreProps>()(
	persist(

		(set,get) => ({
			newsAll: [],
			currentNews:{id:'', title:'',content:''},
			loading:false,
			getAllNews: (newsAllLoading) => set({
				newsAll: get().newsAll = newsAllLoading,
				loading: true
			}),
			setCurrentNews: (newsID) => set({
				loading: get().newsAll.length !== 0,
				currentNews: get().newsAll.find((item) => item.id === newsID )
			}),
		}),
		{
			name:'news-storage',
			storage: createJSONStorage(() => sessionStorage),
		},
	)
)
