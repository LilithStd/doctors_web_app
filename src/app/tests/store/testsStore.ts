import {create} from 'zustand';
import {createJSONStorage, persist} from "zustand/middleware";

export interface VariantsItem {
	id:string,
	title:string,
	count:number
}
export interface QuestionItem {
		title:string,
		variants:VariantsItem[]

}

export interface ArrayItem {
	id:string,
	title:string,
	content:string,
	questions:QuestionItem[]

}
export interface TestsStoreProps {
	testsAll: ArrayItem[],
	currentTest:ArrayItem,
	loading:boolean,
	getAllTests :(testsAllLoading:ArrayItem[]) => void,
	setCurrentTest: (testID: string) => void,
}



export const testsStore = create<TestsStoreProps>()(
	persist(

		(set) => ({
			testsAll: [],
			currentTest:{
				id:'',
				title:'',
				content:'',
				questions:[
					{
						title:'',
						variants:[{id:'',title:'',count:0}]
					}
				]

				},
			loading:false,
			getAllTests: (testsAllLoading) => set((state) => ({
				newsAll: state.testsAll = testsAllLoading,
				loading: true
			})),
			setCurrentTest: (testID) => set((state) => ({
				loading: state.testsAll.length !== 0,
				currentTest: state.testsAll.find((item) => item.id === testID )
			})),
		}),
		{
			name:'tests-storage',
			storage: createJSONStorage(() => sessionStorage)}
	)
)
