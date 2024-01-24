import {create} from 'zustand'
import {fetchDataNews} from "@/app/news/api/newsAPI";

export interface ArrayItem {
	id:string,
	title:string,
	content:string

}
export interface NewsStoreProps {
	newsAll: ArrayItem[],
	currentNews:string,
	loading:boolean,
	getAllNews :(newsAllLoading:ArrayItem[]) => void,
	setCurrentNews: (newsID: string) => void
}



export const newsStore = create<NewsStoreProps>()((set) => ({
	newsAll: [],
	// newsAll: [{id:'', title:'',content:''}],
	currentNews:'',
	loading:false,
	getAllNews: (newsAllLoading) => set((state) => ({
		newsAll: state.newsAll = newsAllLoading,
		loading: true
	})),
	setCurrentNews: (newsID) => set((state) => ({
		currentNews: state.currentNews = newsID
	})),
}))
