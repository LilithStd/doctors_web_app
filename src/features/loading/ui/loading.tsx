'use client'
import useSWR from "swr";
import {ArrayItem, newsStore} from "@/app/news/store/newsStore";
import {fetchDataNews} from "@/app/news/api/newsAPI";

interface LoadingProps {
	loadingState:(flag:boolean) => void

}
export default function Loading ({loadingState}:LoadingProps) {
	loadingState(true)

    return  (

        <div>
	        Loading....
        </div>
    )
}
