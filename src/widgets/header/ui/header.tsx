import Navbar from "@/features/navbar/ui/navbar";
import Logo from "@/widgets/header/components/logo/logo";
import header from "@/widgets/header/style/header.module.scss"

export default function Header () {
    return  (
        <nav className={header.container}>
	        <Logo/>
	        <Navbar/>
        </nav>


    )
}
