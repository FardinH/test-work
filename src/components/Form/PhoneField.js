import { Field } from "formik";
import InputMask  from "react-input-mask"


export const PhoneField = ({errors, touched, ...props }) => (
    <>
        {errors.phone && touched.phone && <div className="errorMessage">{errors.phone}</div>}
        <Field name="phone" {...props}>
            {props => (
                    <InputMask
                        {...props.field}
                        id="phone"
                        type="text"
                        name="phone"
                        mask="+79999999999"
                        maskChar={null}
                    />
                )
            }
        </Field>
        <label>Введите логин</label>
    </>
)