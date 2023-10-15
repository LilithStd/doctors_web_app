import {NAVBAR_ITEMS} from "@/features/navbar/const/navbar_items";
import navbarItems from "@/features/navbar/components/navbar_items/style/navbar_items.module.scss";
import Link from "next/link";
import {Title} from "@/shared/ui/title/title";
import {NavbarPropsItemTitle} from "@/features/navbar/const/navbarProps";
interface items {
	screenSize: boolean
}


export default function NavbarItems ({screenSize}: items) {
	return  (
		<ul className={`${navbarItems.container} ${screenSize? navbarItems.mobileContent : navbarItems.desktopContent}`}>
			{NAVBAR_ITEMS.map((item)=>
				<li key={item.name} className={navbarItems.item}>{
					<Link href={`/${item.link}`} className={navbarItems.link}>
						<Title size={NavbarPropsItemTitle.TITLE_SIZE} content={item.name}/>
					</Link>
				}
				</li>)
			}
		</ul>
	)
}
