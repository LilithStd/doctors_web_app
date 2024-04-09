import {Text} from "@/shared/ui/text/ui/text";
import successSendFormScreen from "@/app/consultation/components/successSendFormScreen/style/successSendFormScreen.module.scss"
import {
    SuccessSendFormScreenTypes
} from "@/app/consultation/components/successSendFormScreen/types/SuccessSendFormScreen";
export default function SuccessSendFormScreen ({active}:SuccessSendFormScreenTypes) {
    return  (

        <div className={`${successSendFormScreen.container} + ${active ? successSendFormScreen.sendScreenActive : ''}`}>
            <Text content={'Форма Успешно отправлена'}/>
        </div>
    )
}
