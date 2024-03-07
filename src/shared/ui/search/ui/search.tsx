'use client'
import search from '@/shared/ui/search/style/search.module.scss'
import Image from "next/image";
import searchIcon from '@/shared/ui/search/assets/search_icon.svg'
import {searchStore} from "@/shared/ui/search/store/searchStore";
import {useEffect, useState} from "react";


export default function Search () {
	const testSymbol = /^[A-Za-z0-9]+$/
	const setSearch  = searchStore(state => state.setCurrentSearch)
	const [searchContext, setSearchContext] = useState('');
	useEffect(() => {
		setSearch(searchContext)
	},[])

	return  (
        <div className={search.container}>
	        <input
		        type={"search"}
		        name={"search"}
		        placeholder={"search"}
		        className={search.input}
		        onChange={
				(e) => {
					setSearchContext(testSymbol.test(e.target.value) ? e.target.value : '')
				}


				}

	        />
	        <div className={search.iconContainer}
	             onClick={() => {
						 setSearch(searchContext)

	             }
				}
	        >

			        <Image
				        src={searchIcon}
				        alt={'search_icon'}
				        width={30}
				        height={30}
			        />

	        </div>
        </div>
    )
}
