import test from "../style/test.module.scss"
import { Text } from "@/shared/ui/text/ui/text";
import { Button } from "@/shared/ui/button/ui/button";
import { Title } from "@/shared/ui/title/title";
import { SIZE_TITLE_GLOBAL } from "@/global_utils/title_props/title_props";
import Image from "next/image";
import testDefaultIcon from '@/app/tests/assets/tests_default_icon.png'
interface TestTypes {
	params: string
}
const content = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis eos ipsam maiores natus nihil nisi recusandae, voluptatum? Consectetur distinctio dolore dolorem dolores esse, iure, iusto laboriosam mollitia obcaecati saepe velit?'

const buttonContent = 'Перейти в раздел'

export default function Test({ params }: TestTypes) {
	return (
		<div className={test.container}>
			<Title size={SIZE_TITLE_GLOBAL.MEDIUM} content={params} property={test.title} />
			<div className={test.subContainer}>
				<Image src={testDefaultIcon} alt={'tests icons'} className={test.icons} />
				<Text content={content} />
				<div></div>
				<Button content={buttonContent} property={test.button} />
			</div>
		</div>
	)
}
