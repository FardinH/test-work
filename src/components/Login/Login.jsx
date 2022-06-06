import React from 'react'
import "./Login.scss"

import { Formik, Form, Field } from 'formik';

import { requiredValue, requiredPhone } from "../Form/FormValidators/Validators.js"
import AuthButton from '../commons/Buttons/AuthButton';
import { PhoneField } from '../Form/PhoneField';

export default function Login({ setActiveRestorePassword, restorePhone, dataValidate, setValidateState}) {
    
    console.log(restorePhone)

    return (
        <>

            <Formik
                initialValues={{
                    phone: restorePhone || '',
                    password: '',
                }}

                onSubmit={values => {
                    dataValidate(values, setValidateState)
                    console.log(values)
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

                        <div className="main-form-login__input">
                            {errors.password && touched.password && <div className="errorMessage">{errors.password}</div>}
                            <Field type="password" name="password" validate={requiredValue} />
                            <label>Введите пароль</label>
                        </div>


                        <div className="main-form-login__restore-pass">
                            <a onClick={() => setActiveRestorePassword(true)}>Забыли пароль?</a>
                        </div>

                        <AuthButton
                            text={"Войти"}
                        />

                    </Form>
                )}
            </Formik>

        </>
    )
}
