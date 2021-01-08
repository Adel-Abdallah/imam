import React from "react";

const emailValidator = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const passwordValidator = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;

class FormComponent extends React.Component {
    constructor() {
        super();
        this.state = {
            emailAddress: "",
            password: "",
            passwordConfirmation: "",
            emailAddressError: "",
            passwordError: "",
            passwordConfirmationError: "",
            isFormSubmitted: false,
        };
    }

    handleChange = event => {
        const { name, value } = event.target;

        this.setState({
            [name]: value,
        });

        return;
    };

    handleBlur = event => {
        const { name } = event.target;

        this.validateField(name);
        return;
    };

    handleSubmit = event => {
        event.preventDefault();
        let formFields = ["emailAddress", "password", "passwordConfirmation"];
        let isValid = true;
        formFields.forEach(field => {
            isValid = this.validateField(field) && isValid;
        });

        if (isValid) this.setState({ isFormSubmitted: true });
        else this.setState({ isFormSubmitted: false });

        return this.state.isFormSubmitted;
    };

    validateField = name => {
        let isValid = false;

        if (name === "emailAddress") isValid = this.validateEmailAddress();
        else if (name === "password") isValid = this.validatePassword();
        else if (name === "passwordConfirmation")
            isValid = this.validatePasswordConfirmation();
        return isValid;
    };

    validateEmailAddress = () => {
        let emailAddressError = "";
        const value = this.state.emailAddress;
        if (value.trim === "") emailAddressError = "Email Address is required";
        else if (!emailValidator.test(value))
            emailAddressError = "Email is not valid";

        this.setState({
            emailAddressError,
        });
        return emailAddressError === "";
    };

    validatePassword = () => {
        let passwordError = "";
        const value = this.state.password;
        if (value.trim === "") passwordError = "Password is required";
        else if (!passwordValidator.test(value))
            passwordError =
                "Password must contain at least 8 characters, 1 number, 1 upper and 1 lowercase!";

        this.setState({
            passwordError,
        });
        return passwordError === "";
    };

    validatePasswordConfirmation = () => {
        let passwordConfirmationError = "";
        if (this.state.password !== this.state.passwordConfirmation)
            passwordConfirmationError = "Password does not match Confirmation";

        this.setState({
            passwordConfirmationError,
        });
        return passwordConfirmationError === "";
    };

    render() {
        const {
            emailAddress,
            password,
            passwordConfirmation,
            emailAddressError,
            passwordError,
            passwordConfirmationError,
            isFormSubmitted,
        } = this.state;
        return (
            <div className='container'>
                <h3> Login</h3>
                {isFormSubmitted ? (
                    <div className='card-panel'>
                        <h3 className='blue-text'>
                            Thanks for signing up, find your details below:
            </h3>
                        <div>Email Address: {emailAddress}</div>
                    </div>
                ) : (
                        <div className="center card-panel">
                            <form onSubmit={this.handleSubmit}>
                                <br />

                                <input
                                    type='email'
                                    placeholder='Email Address'
                                    name='emailAddress'
                                    value={emailAddress}
                                    onChange={this.handleChange}
                                    onBlur={this.handleBlur}
                                    autoComplete='off'
                                />
                                <br />
                                {emailAddressError && (
                                    <div className='errorMsg'>{emailAddressError}</div>
                                )}
                                <input
                                    type='password'
                                    placeholder='Password'
                                    name='password'
                                    value={password}
                                    onChange={this.handleChange}
                                    onBlur={this.handleBlur}
                                    autoComplete='off'
                                />
                                <br />
                                {passwordError && <div className='errorMsg'>{passwordError}</div>}
                                <input
                                    type='password'
                                    placeholder='Confirm Password'
                                    name='passwordConfirmation'
                                    value={passwordConfirmation}
                                    onChange={this.handleChange}
                                    onBlur={this.handleBlur}
                                    autoComplete='off'
                                />
                                <br />
                                {passwordConfirmationError && (
                                    <div className='errorMsg'>{passwordConfirmationError}</div>
                                )}
                                <button className='btn blue'>Login</button>
                            </form>
                        </div>
                    )}
            </div>
        );
    }
}
export default FormComponent;
