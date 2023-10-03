import article from "@/entites/articleFull/components/article/style/article.module.scss"
import {Text} from "@/shared/ui/text/ui/text";
import {Button} from "@/shared/ui/button/ui/button";
import {Title} from "@/shared/ui/title/title";
import {SIZE_TITLE_GLOBAL} from "@/global_utils/title_props/title_props";
import Image from "next/image";
import articlePicture from "@/entites/articleFull/components/article/assets/article_default_logo.svg"
import {ARTICLE_PROPS} from "@/entites/articleFull/components/article/const/articleItemProps";


export default function Article () {
    return  (

        <div className={article.container}>
            <Image src={articlePicture} alt={'dfdf'}/>
            <div className={article.subContainer}>
                <Title size={SIZE_TITLE_GLOBAL.MEDIUM} content={'Title Article'}/>
                <Text content={ARTICLE_PROPS.content}/>
                <Button property={article.button} content={'read more'}/>
            </div>
        </div>
    )
}
