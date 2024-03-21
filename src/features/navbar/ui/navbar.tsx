'use client'
import navbar from '@/features/navbar/style/navbar.module.scss'
import burgerIcons from "@/features/navbar/assets/menu-burger.svg"
import Image from "next/image";
import NavbarItems from "@/features/navbar/components/navbar_items/ui/navbar_items";
import { useState } from "react";
import ModalWindow from '../components/modal_window/ui/modal_window';


export default function Navbar() {
	const [active, setActive] = useState(false);
	const deviceScreenHandler = () => {
		setActive(true)
	}

	return (
			<div className={navbar.container}>
				<div className={navbar.mobileContainer}>
					<Image
						src={burgerIcons}
						alt={'burger_icons'}
						width={30}
						height={30}
						onClick={() => deviceScreenHandler()}
					/>
					<ModalWindow
						active={active}
						setActive={setActive}
						children={<NavbarItems />}
					/>
				</div>
				<div className={navbar.desktopContainer}>
					<NavbarItems />
				</div>
			</div>
	)
}
