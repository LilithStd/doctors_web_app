'use client'
import {QuestionItem, testsStore} from "@/app/tests/store/testsStore";
import {Title} from "@/shared/ui/title/title";
import {SIZE_TITLE_GLOBAL} from "@/global_utils/title_props/title_props";
import {Text} from "@/shared/ui/text/ui/text";
import testId from '@/app/tests/[id]/style/testId.module.scss'
import {Button} from "@/shared/ui/button/ui/button";
import {FieldValues, SubmitErrorHandler, SubmitHandler, useForm} from "react-hook-form";
import {BUTTON_TYPE} from "@/shared/ui/button/const/button_type";
import {useEffect} from "react";
import {useRouter} from "next/navigation";


export interface CurrentTestsProps {
	params: {id:string}
}


interface FormValues  {
	[key: string]: string;
}


export async function getStaticPaths() {
	const response = await fetch ('http://localhost:3000/api/tests');
	const data = await response.json();
	const paths = data.map((item:string | any) => ({
		params: { id: item.id.toString() },
	}))

	return {
		paths,
		fallback:false
	}
}

export async function getStaticProps(context:any) {
	const id = context.params.id
	const response = await fetch('http://localhost:3000/api/tests/' + id)
	const data  = await response.json()
	return {
		props: {
			news:data
		}
	}
}
export default function Test(props:CurrentTestsProps) {
	const router = useRouter()
	const {register,
		handleSubmit
	} =  useForm<FormValues>()
	const getTest = testsStore(state => state.testsAll)
	const setCurrentTest = testsStore(state => state.setCurrentTest)
	setCurrentTest(props.params.id)
	const storeCurrentTest = testsStore(state => state.currentTest)
	const currentTest =
		getTest.length !== 0 ?
			storeCurrentTest :
				{id:'1',title:'Error News Identification',content:'',questions:[]}
	useEffect(() => {
		if(currentTest.title === 'Error News Identification') {
			router.push('/')
			console.log('redirect to main page')
		}

	},[currentTest.title])
	// const formSubmitHandler = (e:HTMLFormElement) => {
	// 	e.preventDefault();
	// 	// Read the form data
	// 	const form= e.target;
	// 	const formData = new FormData(form);
	// 	// Or you can work with it as a plain object:
	// 	const formJson = Object.fromEntries(formData.entries());
	// 	if(Object.keys(formJson).length < 3) {
	// 		alert("Нужно ответить на все вопросы")
	// 	}else{
	// 		console.log('Все ответы получены')}
	// }
	const onSubmit:SubmitHandler<FormValues> = data => {
		console.log(data)
	}

	const onError:SubmitErrorHandler<FormValues> = data => {
		alert('Нужно ответить на все вопросы!')
	}

	const onClick = () => {

	}


	return (
		<div>
			<Title
				size={SIZE_TITLE_GLOBAL.LARGE}
				content={currentTest!.title}
				property={testId.testIdTitle}
			/>
			<Text content={currentTest!.content}/>
			<form
				className={testId.formContainer}
				onSubmit={handleSubmit(onSubmit, onError)}
			>
				{
					currentTest.questions.length !== 0 ?
						currentTest.questions.map((item) =>
							<label key={item.title}>
								{
									item.variants.map((variants) =>
												<input
													{...register(
														item.title,
														{
															required:true
														}
													)
													}
													type={"radio"}
													key={variants.title}
													value={variants.count}
												/>
									)

								}

								{item.title}
							</label>
						):
						''
				}

			<Button
				content={'Get Result'}
				type={BUTTON_TYPE.SUBMIT}
				callBack={onClick}
			/>
			</form>
		</div>
	)
}
