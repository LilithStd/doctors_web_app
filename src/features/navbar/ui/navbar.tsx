import navbar from '@/features/navbar/style/navbar.module.scss'
import {NAVBAR_ITEMS} from "@/features/navbar/const/navbar_items";
import {Title} from "@/shared/ui/title/title";
import {NavbarPropsItemTitle} from "@/features/navbar/const/navbarProps";
import Link from "next/link";
export default function Navbar () {
    return  (
		<ul className={navbar.container}>
			{NAVBAR_ITEMS.map((item)=>
					<li key={item.name} className={navbar.item}>{
						<Link href={`/${item.link}`}>
							<Title size={NavbarPropsItemTitle.TITLE_SIZE} content={item.name}/>
						</Link>
						}
					</li>
			)}
		</ul>
    )
}
