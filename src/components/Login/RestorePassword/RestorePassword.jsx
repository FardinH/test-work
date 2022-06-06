import React from 'react'
import "../Login.scss"

import { Formik, Form } from 'formik';

import AuthButton from '../../commons/Buttons/AuthButton';
import { requiredPhone } from "../../../Form/FormValidators/Validators.js"
import { PhoneField } from '../../../Form/PhoneField';

export default function RestorePassword({setActiveRestorePassword, setRestorePassword}) {
  return (
    <>

        <h2 className="main-form-login__title">Восстановления пароля</h2>

        <Formik
            initialValues={{
                phone: '',
            }}
            onSubmit={(values, { validate }) => {
                setRestorePassword(values.phone)
                console.log(values);
            }}
        >
            {({ errors, touched }) => (
                <Form>
                    
                    <div className="main-form-login__input">
                        <PhoneField 
                            errors={errors}
                            touched={touched}
                            validate={requiredPhone}
                        />
                    </div>
    
                    <div className="main-form-login__restore-pass">
                        <a onClick={() => setActiveRestorePassword(false)}>назад</a>
                    </div>

                    <AuthButton 
                        text={"Позвонить"}
                    />

                </Form>
            )}
        </Formik>
    </>
  )
}
