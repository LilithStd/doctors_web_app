import Slider from "@/features/slider/ui/slider";
import News from "@/features/news/ui/news";
import Articles from "@/features/articles/ui/articles";
import main from './page.module.scss'

export default function Main () {
    return  (
        <div>
          <Slider/>
            <div className={main.subContainer}>
                <News/>
                <Articles/>
            </div>
        </div>
    )
}
