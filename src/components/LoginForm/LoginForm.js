import React from 'react';
import Form from 'react-bootstrap/Form';
import {Container, Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './LoginForm.css';

class LoginForm extends React.Component {

    state = {
        failedToLogin: false
    };

    onSignInButtonClick = () => {
        if (this.state.email && this.state.password) {
            const requestOptions = {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    email: this.state.email,
                    password: this.state.password
                })
            };
            fetch('http://localhost:8080/login', requestOptions)
                .then(response => response.json())
                .catch(error =>
                    this.setState(({failedLogin}) => {
                        return {
                            failedLogin: true
                        }
                    }));
            this.props.navigation('/main');
        }
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
        const { navigation } = this.props;
        return (
            <Container className="container-center z-depth-5">
                <p className="login-title">Вхід у Real Data</p>
                <Form>
                    <Form.Group controlId="formBasicEmail" className="email-input">
                        <Form.Label>Електронна пошта:</Form.Label>
                        <Form.Control required type="email" placeholder="Введіть електронну пошту"
                                      onChange={this.onEmailChange}/>
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword" className="password-input">
                        <Form.Label>Пароль:</Form.Label>
                        <Form.Control required type="password" placeholder="Введіть пароль"
                                      onChange={this.onPasswordChange}/>
                    </Form.Group>
                    <Button variant="warning" type="submit" className="login-button" onClick={this.onSignInButtonClick}>
                        Увійти
                    </Button>
                </Form>
                <div>
                    {this.state.failedLogin ? <p className="mt-3">Електронна пошта або пароль невірні.</p> :
                        <span></span>}
                </div>
                <div>
                    <hr className="divider"/>
                </div>
                <p className="or-divider">АБО</p>
                <div>
                    <Button variant="primary" type="submit" className="signup-button" onClick={() => navigation(`/signup`)}>
                        Зареєструватись
                    </Button>
                </div>
            </Container>
        );
    };
}

export default LoginForm;