'use client'
import navbar from '@/features/navbar/style/navbar.module.scss'
import { Title } from "@/shared/ui/title/title";
import { NavbarPropsItemTitle } from "@/features/navbar/const/navbarProps";
import burgerIcons from "@/features/navbar/assets/menu-burger.svg"
import Link from "next/link";
import Image from "next/image";
import { useMatchMedia } from "@/shared/hooks/media_query";
import NavbarItems from "@/features/navbar/components/navbar_items/ui/navbar_items";
import { useState } from "react";
import ModalWindow from '../components/modal_window/ui/modal_window';


export default function Navbar() {
	const [active, setActive] = useState(false);
	// @ts-ignore
	const { isMobile } = useMatchMedia()
	const deviceScreenHandler = () => {
		setActive(true)
	}

	return (
		<>
			{isMobile ? (
				<>
					<Image src={burgerIcons} alt={'burger_icons'} width={30} height={30} onClick={() => deviceScreenHandler()} />
					<ModalWindow active={active} setActive={setActive} children={<NavbarItems screenSize={isMobile} />} />

				</>

			) : <NavbarItems screenSize={isMobile} />}

		</>

	)
}
