import navbar from '@/features/navbar/style/navbar.module.scss'
import {NAVBAR_ITEMS} from "@/features/navbar/const/navbar_items";
import {Title} from "@/shared/ui/title/title";
import {NavbarPropsItemTitle} from "@/features/navbar/const/navbarProps";
export default function Navbar () {
    return  (
		<ul className={navbar.container}>
			{NAVBAR_ITEMS.map((item)=>
					<li key={item} className={navbar.item}>{<Title size={NavbarPropsItemTitle.TITLE_SIZE} content={item}/>}</li>
			)}
		</ul>
    )
}
