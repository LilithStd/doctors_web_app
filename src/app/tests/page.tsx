import Search from "@/shared/ui/search/ui/search";
import Test from "@/entites/test/ui/test";
import {TEST_MOCK_ITEMS} from "@/entites/test/const/TEST_MOCK_ITEMS";
import tests from "@/app/tests/style/tests.module.scss";

export default function Tests() {
	return (
		<div className={tests.container}>
			<Search/>
			<div className={tests.subContainer}>
				{TEST_MOCK_ITEMS.map((item) => <Test params={item}/>)}
			</div>
		</div>
	)
}
