import React, { useState } from 'react'
import "../Login.scss"

import { Formik, Form } from 'formik';
import { requiredPhone } from "../../../Form/FormValidators/Validators.js"
import { PhoneField } from '../../../Form/PhoneField';

import AuthButton from '../../commons/Buttons/AuthButton';
import Modal from '../../Popup/Modal';

export default function RestorePassword({ setActiveRestorePassword, setRestorePassword, password, setRestorePass }) {

    const [modalActive, setModalActive] = useState(false)

    return (
        <>
            <h2 className="main-form-login__title">Восстановления пароля</h2>
            <Formik
                initialValues={{
                    phone: '',
                }}
                onSubmit={(values, { validate }) => {
                    setRestorePassword(values.phone)
                    setRestorePass("1234567")
                    setModalActive(true)
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

            {modalActive &&  
                <Modal
                    handleModalClose={() => { setActiveRestorePassword(false) }}
                >
                    Ваш временный пароль: {password}
                </Modal>
            }
        </>
    )
}
