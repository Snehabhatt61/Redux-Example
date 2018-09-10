import React, { Component } from 'react';
import { Formik, Field, Form } from 'formik';
import * as yup from 'yup';
import { submitForm , getUserList} from '../actions/form';
import { connect } from 'react-redux';
import form from '../actions/form';
import Userlist from './userlist';
require('../../scss/style.scss');
class FormikForm extends Component {
    constructor(props) {
        super(props);
    }

    handleSubmit = (values) => {
        // console.log('valll', values);
        alert(JSON.stringify(values, null, 2));
        this.props.submitForm(values, this.successCallback);

    }
    successCallback = (values) => {
        alert("Your data is Saved");
        console.log("success", values);
        return (
            <div>
                <h3>LIST</h3>
                <p>{values.age}</p>
            </div>
        );
    }
    render() {
        const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
        const validate = (values, props) => {
            return sleep(300).then(() => {
                let errors = {};

                // if (['admin', 'null', 'god'].includes(values.firstName)) {
                //     errors.firstName = "You can't use 'admin' as your firstname";
                // }
                if (values.firstName == " ")
                {
                    errors.firstName = "Cannot be null";
                }
                if (values.userAge < 18) {
                    errors.userAge = "Your age must be above 18";
                }

                if (!values.firstName) {
                    errors.firstName = 'Field is Required';
                }

                if (Object.keys(errors).length) {
                    throw errors;
                }
            });
        };
        return (
            <div>
                <Formik
                    initialValues={{
                        firstName: '',
                        userAge: '',
                        email: '',
                    }}
                    validate={validate}
                    onSubmit={this.handleSubmit}
                    render={({ errors, touched, resetForm }) => (

                        <Form
                        >
                            <Field
                                name='firstName'
                                placeholder='Enter name'
                                id='myname'
                            // required
                            />
                            {errors.firstName &&
                            touched.firstName && (
                                <div>{errors.firstName}</div>
                            )}
                            <Field
                                name='userAge'
                                placeholder="Enter your age"
                                id='mynum'
                            // onChange={e => this.setState({ age: e.target.value })}
                            />
                            {errors.userAge &&
                                touched.userAge &&
                                <div>{errors.userAge}</div>
                            }
                            <Field name="email" placeholder="jane@acme.com" type="email" />
                            <button
                                type='submit'
                            // onClick = {resetForm}
                            >
                                Submit</button>
                        </Form>
                    )}
                />
                <Userlist/>
            </div>
        )
    }
}
function mapStateToProps(state) {
    return {
        data: state
    }
}
export default connect(mapStateToProps, { submitForm })(FormikForm);

