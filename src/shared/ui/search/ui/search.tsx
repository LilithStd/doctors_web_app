import search from '@/shared/ui/search/style/search.module.scss'
import Image from "next/image";
import searchIcon from '@/shared/ui/search/assets/search_icon.svg'
export default function Search () {
    return  (

        <div className={search.container}>
	        <input type={"search"} name={"search"} placeholder={"search"} className={search.input}/>
	        <div className={search.iconContainer}>
	            <Image src={searchIcon} alt={'search_icon'} width={30} height={30}/>
	        </div>
        </div>
    )
}
