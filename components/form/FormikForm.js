import React, {useMemo, useState} from 'react';
import {Formik, useField} from 'formik';
import {Alert, Col, Form, Row} from 'react-bootstrap'
import * as Yup from 'yup';
import PropTypes from 'prop-types';

export const MyTextInput = ({label, ...props}) => {
    const [field, meta] = useField(props);
    return (
        <Form.Group as={Row} controlId={"{props.id || props.name}"}>
            {label && label !== '' &&
            <Form.Label column sm={2}>{label}</Form.Label>
            }
            <Col sm={label && label !== '' ? 10 : 12}>
                <Form.Control as={'input'} isInvalid={meta.touched && meta.error}
                              isValid={meta.touched && !meta.error} {...field} {...props} />
                {meta.touched && meta.error ? (
                    <>
                        <Form.Control.Feedback type={"invalid"}>{meta.error}</Form.Control.Feedback>
                    </>
                ) : null}
            </Col>
        </Form.Group>
    );
};
MyTextInput.propTypes = {
    label: PropTypes.string,
    name: PropTypes.string,
    id: PropTypes.string,
    placeholder: PropTypes.string,
    type: PropTypes.oneOf([
        'text',
        'date',
        'email',
        'number',
        'password',
        'tel',
        'time',
        'url'
    ])
}

export const MySelect = ({label, ...props}) => {
    const [field, meta] = useField(props);
    return (
        <Form.Group as={Row} controlId={props.id || props.name}>
            {label && label !== '' &&
            <Form.Label column sm={2}>{label}</Form.Label>
            }
            <Col sm={label && label !== '' ? 10 : 12}>
                <Form.Control as={"select"} isInvalid={meta.touched && meta.error}
                              isValid={meta.touched && !meta.error} {...field} {...props} />
                {meta.touched && meta.error &&
                <Form.Control.Feedback type={"invalid"}>{meta.error}</Form.Control.Feedback>
                }
            </Col>
        </Form.Group>
    );
};
MySelect.propTypes = {
    label: PropTypes.string,
    name: PropTypes.string,
    id: PropTypes.string,
    placeholder: PropTypes.string
}

// And now we can use these
export default function FormikForm(props) {
    if (!props.children || props.children.length < 1) {
        return null;
    }

    const [alerte, setAlerte] = useState({type: '', message: ''})

    const initialValues = props.initialValues ? props.initialValues : {};
    const validationSchema = props.validationSchema ? props.validationSchema : {};

    const btnText = useMemo(() => (props.btnText) ? props.btnText : 'Envoyer', [props.btnText]);
    const btnStyle = useMemo(() => (props.btnStyle) ? props.btnStyle : 'primary', [props.btnStyle]);
    const urlMethod = useMemo(() => (props.urlMethod) ? props.urlMethod : 'POST', [props.urlMethod]);

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={(values, {setSubmitting, resetForm}) => {
                const datas = JSON.stringify(values, null, 2);
                if (props.url) {
                    setAlerte({type: '', message: ''});
                    let isOk = false;
                    const headers = new Headers();
                    headers.set('Content-Type', 'application/json')
                    fetch(props.url, {
                        method: urlMethod,
                        headers: headers,
                        body: datas
                    })
                        .then(
                            async (response) => {
                                if (response.ok) {
                                    isOk = true;
                                } else {
                                    const json = await response.json();
                                    if (json && json.message) {
                                        setAlerte({type: 'danger', message: json.message});
                                    } else {
                                        setAlerte({type: 'danger', message: response.statusText});
                                    }
                                }
                            },
                            reason => {
                                setAlerte({type: 'danger', message: reason.toString()});
                            })
                        .finally(() => {
                            setSubmitting(false);
                            if (isOk && props.okFunction) {
                                props.okFunction(values);
                            } else {
                                if (isOk) {
                                    setAlerte({
                                        type: 'success',
                                        message: 'Nous avons bien reçus vos données ! Merci !'
                                    });
                                    resetForm(initialValues);
                                }
                            }
                        })
                } else {
                    setTimeout(() => {
                        alert(datas);
                        setSubmitting(false);
                    }, 400);
                }
            }}

        >
            {formik => (<>
                    {formik.isSubmitting ? (<h2>Envoi en cours ... </h2>) : (
                        <Form
                            onSubmit={formik.handleSubmit}
                        >
                            {alerte && alerte.type && alerte.type !== '' && alerte.message && alerte.message !== '' &&
                            <Alert variant={alerte.type}>{alerte.message}</Alert>
                            }
                            {props.children}
                            {/*<MySelect label="Job Type" name="jobType">*/}
                            {/*    <option value="">Select a job type</option>*/}
                            {/*    <option value="designer">Designer</option>*/}
                            {/*    <option value="development">Developer</option>*/}
                            {/*    <option value="product">Product Manager</option>*/}
                            {/*    <option value="other">Other</option>*/}
                            {/*</MySelect>*/}

                            {/*<MyCheckbox name="acceptedTerms">*/}
                            {/*    I accept the terms and conditions*/}
                            {/*</MyCheckbox>*/}
                            <div className={"form-group"}>
                                <div className={"col-sm-2"}/>
                                <div className={"col-sm-10"}>
                                    <button className={"btn btn-" + btnStyle} type="submit"
                                            disabled={formik.isSubmitting}>{btnText}</button>
                                </div>
                            </div>
                        </Form>
                    )}
                </>
            )}
        </Formik>
    );
}

FormikForm.propTypes = {
    btnText: PropTypes.string,
    validationSchema: PropTypes.instanceOf(Yup.object),
    initialValues: PropTypes.object,
    validate: PropTypes.func,
    btnStyle: PropTypes.oneOf([
        'success',
        'danger',
        'primary',
        'info',
        'warning',
        'default',
        'link'
    ]),
    urlMethod: PropTypes.oneOf([
        'POST',
        'PUT'
    ]),
    children: PropTypes.oneOfType([
        PropTypes.array,
        PropTypes.object
    ]).isRequired,
    okFunction: PropTypes.func,
    url: PropTypes.string.isRequired
}
