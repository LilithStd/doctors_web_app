import { ModalWindowTypes } from "../types/modal_windowTypes";
import modalWindow from "@/features/navbar/components/modal_window/style/modal_window.module.scss"

export default function ModalWindow({ active, setActive, children }: ModalWindowTypes) {
    return (
        <div className={`${modalWindow.container} + ${active ? modalWindow.modalActive : ''}`} onClick={() => setActive ? setActive(false) : ''}>
            <div className={modalWindow.contentContainer} onClick={(e) => {e.stopPropagation();
                if (setActive) {
                    setActive(false)
                }}
            }>
                {children}
            </div>
        </div>
    )
}
