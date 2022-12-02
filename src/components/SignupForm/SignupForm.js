import React from 'react';
import Form from 'react-bootstrap/Form';
import {Container, Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './SignupForm.css';

class SignUpForm extends React.Component {

    state = {};

    onSignUp = () => {
        if(this.state.email && this.state.password && this.state.firstName && this.state.lastName) {
            const requestOptions = {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    email: this.state.email,
                    password: this.state.password,
                    firstName: this.state.firstName,
                    lastName: this.state.lastName
                })
            };
            fetch('http://localhost:8080/signUp', requestOptions)
                .then(response => response.json())
                .then(data => {
                    this.setState(() => {
                        return {}
                    });
                    this.props.history.push(`/signIn`);
                });
        }
    }

    onFirstNameChange = (event) => {
        this.setState(() => {
            return {
                firstName: event.target.value
            }
        })
    }

    onLastNameChange = (event) => {
        this.setState(() => {
            return {
                lastName: event.target.value
            }
        })
    }

    onEmailChange = (event) => {
        this.setState(() => {
            return {
                email: event.target.value
            }
        })
    }

    onPasswordChange = (event) => {
        this.setState(() => {
            return {
                password: event.target.value
            }
        })
    }

    render() {
        return (
            <Container className="container-center z-depth-5">
                <p className="login-title">Зареєструватись в Real Data</p>
                <Form>
                    <Form.Group controlId="formBasicEmail" className="signup-input">
                        <Form.Label>Ім'я</Form.Label>
                        <Form.Control required placeholder="Введіть ім'я" onChange={this.onFirstNameChange}/>
                    </Form.Group>
                    <Form.Group controlId="formBasicEmail" className="signup-input">
                        <Form.Label>Прізвище</Form.Label>
                        <Form.Control required placeholder="Введіть прізвище" onChange={this.onLastNameChange}/>
                    </Form.Group>
                    <Form.Group controlId="formBasicEmail" className="signup-input">
                        <Form.Label>Електронна пошта</Form.Label>
                        <Form.Control required type="email" placeholder="Введіть електронну пошту" onChange={this.onEmailChange}/>
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword" className="signup-input">
                        <Form.Label>Пароль</Form.Label>
                        <Form.Control required type="password" placeholder="Введіть пароль" onChange={this.onPasswordChange}/>
                    </Form.Group>
                    <Button variant="warning" type="submit" className="login-button" onClick={this.onSignUp}>
                        Зареєструватися
                    </Button>
                </Form>
            </Container>
        );
    }
}

export default SignUpForm;