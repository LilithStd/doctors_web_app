'use client'
import consultation from "@/app/consultation/style/consultation.module.scss"
import { Title } from "@/shared/ui/title/title";
import { SIZE_TITLE_GLOBAL } from "@/global_utils/title_props/title_props";
import consultationImage from "@/app/consultation/assets/consultation_default_image.png"
import Image from "next/image";
import { Button } from "@/shared/ui/button/ui/button";
import { Text } from "@/shared/ui/text/ui/text";
import GetForm from "@/app/consultation/api/getForm/getForm";
import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { FieldValues } from "react-hook-form";
import { formProps } from "@/app/consultation/api/types/apiConsultationTypes";
import { userData } from "@/app/consultation/store/consultationsStore";
import SelectList from "./components/selectList/selectList";
import Select from 'react-select';



const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
];



export default function Consultation() {
    const { register, handleSubmit, control } = useForm();
    const [selectedOption, setSelectedOption] = useState(null);
    const send = userData(state => state.createUserFormData)
    const getForm = userData(state => state.userForm)
    const submitFormSend = (data: formProps | FieldValues) => {
        send(data)

    }
    console.log(getForm)


    return (

        <div className={consultation.container}>
            <Title size={SIZE_TITLE_GLOBAL.LARGE} content={'Запись на консультацию'} />
            <div className={consultation.subContainer}>
                <div className={consultation.imageContainer}>
                    <Image src={consultationImage} alt={'consultation hands images'} width={300} height={300} />
                </div>
                <form className={consultation.formContainer} id={'#formSignUp'} onSubmit={handleSubmit(submitFormSend)}>
                    <input
                        {...register('name', { required: true })}
                        type={'text'}
                        className={consultation.inputItem}
                        placeholder={'ваше имя *'} />
                    <input
                        {...register('phone')}
                        type={'tel'}
                        className={consultation.inputItem}
                        placeholder={'ваш' +
                            ' телефон *'} />
                    <input
                        {...register('email')}
                        type={'email'}
                        className={consultation.inputItem}
                        placeholder={'ваш email *'} />
                    <Controller
                        name="variant"
                        control={control}

                        defaultValue={null}
                        render={({ field }) => (
                            <Select
                                {...field}
                                className={consultation.inputItem}
                                options={[
                                    { value: 'option1', label: 'Option 1' },
                                    { value: 'option2', label: 'Option 2' },
                                    { value: 'option3', label: 'Option 3' },
                                ]}
                                defaultValue={null}

                            />
                        )}
                    />
                    <textarea
                        {...register('userText')}
                        className={consultation.textAreaItem}
                        placeholder={'опишите ваши симптомы'} />
                    <div className={consultation.agreementContainer}>
                        <input type={'checkbox'} className={consultation.inputItemCheckbox} required />
                        <Text content={'Я подтверждаю согласие на обработку своих персональных данных, с Политикой обработки данных ознакомлен.'} />
                    </div>

                    <Button property={consultation.signUpButton}
                        content={'Записаться'}
                    />
                </form>

            </div>
        </div>
    )
}
