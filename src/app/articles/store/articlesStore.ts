import {create} from 'zustand'
import {createJSONStorage, persist} from "zustand/middleware";

export interface ArrayItem {
	id:string,
	title:string,
	content:string

}
export interface ArticlesStoreProps {
	articlesAll: ArrayItem[],
	currentArticle:ArrayItem,
	loading:boolean,
	getAllArticles :(newsAllLoading:ArrayItem[]) => void,
	setCurrentArticle: (newsID: string) => void,
}



export const articlesStore = create<ArticlesStoreProps>()(
	persist(

		(set) => ({
			articlesAll: [],
			currentArticle:{id:'', title:'',content:''},
			loading:false,
			getAllArticles: (newsAllLoading) => set((state) => ({
				newsAll: state.articlesAll = newsAllLoading,
				loading: true
			})),
			setCurrentArticle: (articleID) => set((state) => ({
				loading: state.articlesAll.length !== 0,
				currentArticle: state.articlesAll.find((item) => item.id === articleID )
			})),
		}),
		{
			name:'articles-storage',
			storage: createJSONStorage(() => sessionStorage)}
	)
)
