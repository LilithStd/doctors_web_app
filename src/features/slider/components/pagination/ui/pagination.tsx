import pagination from '../style/pagination.module.scss'

export interface PaginationProps {
    sliderItems:{ id: string; title: string; content: string; }[],
    currentSliderItem:string,
    callBack: (item: string) => void
}

export default function Pagination ({sliderItems,currentSliderItem,callBack}:PaginationProps) {
    return  (
        <ul className={pagination.pagination} >
            {sliderItems.map((item) =>
                <li className={pagination.count + ' ' + `${currentSliderItem === item.id ? pagination.countActive: ''}`}
                    key={item.id}
                    onClick={
                        () => {
                            callBack(item.id)
                        }
                    }>
                </li>
            )}
        </ul>
    )
}
