import navbar from '@/features/navbar/style/navbar.module.scss'
import {NAVBAR_ITEMS} from "@/features/navbar/const/navbar_items";
import {Title} from "@/shared/ui/title/title";
import {NavbarPropsItemTitle} from "@/features/navbar/const/navbarProps";
import burgerIcons from "@/features/navbar/assets/menu-burger.svg"
import Link from "next/link";
import Image from "next/image";
export default function Navbar () {
    return  (
		<ul className={navbar.container}>
			{NAVBAR_ITEMS.map((item)=>
					<li key={item.name} className={navbar.item}>{
						<Link href={`/${item.link}`} className={navbar.link}>
							<Title size={NavbarPropsItemTitle.TITLE_SIZE} content={item.name}/>
						</Link>
						}
					</li>
			)}
			<div>
				<Image src={burgerIcons} alt={'burger_icons'} width={30} height={30}/>
			</div>
		</ul>
    )
}
