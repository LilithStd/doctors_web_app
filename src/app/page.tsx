'use client'
import Slider from "@/features/slider/ui/slider";
import News from "@/features/news/ui/news";
import Articles from "@/features/articles/ui/articles";
import main from './page.module.scss'
import useSWR from "swr";
import {ArrayItem, newsStore} from "@/app/news/store/newsStore";
import {fetchDataNews} from "@/app/news/api/newsAPI";
import {useEffect} from "react";

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
