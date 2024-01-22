import Image from "next/image";
import articleLogoContent from '@/entites/article/components/articleLogo/assets/article_default_logo.svg'
import articleLogo from '@/entites/article/components/articleLogo/style/articleLogo.module.scss'
import { useMatchMedia } from "@/shared/hooks/media_query";

export default function ArticleLogo() {


    return (

        <div className={articleLogo.container}>
            <Image src={articleLogoContent} alt={'article_picture'} className={articleLogo.imageProperty} />
        </div>
    )
}
