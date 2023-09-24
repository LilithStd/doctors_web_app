import search from '@/shared/ui/search/style/search.module.scss'
export default function Search () {
    return  (

        <div className={search.container}>
	        <input type={"search"} name={"search"} placeholder={"search"}/>
	        Search
        </div>
    )
}
