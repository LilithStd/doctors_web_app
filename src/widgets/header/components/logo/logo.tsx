import {Title} from "@/shared/ui/title/title";
import {
    LogoTitleContentProps,
    LogoTitleProps
} from "@/widgets/header/components/logo/const/logoProps";
import Image from "next/image";
import logoImage from '@/widgets/header/components/logo/assets/logo.svg'
import logo from '../logo/style/logo.module.scss'

export default function Logo () {
    return  (
        <div className={logo.container}>
            <Image
                src={logoImage}
                alt={'site logo'}
                className={logo.image}
                priority={true}
            />
            <Title
                size={LogoTitleProps.TITLE_SIZE}
                content={LogoTitleContentProps.content}
            />
        </div>

    )
}
