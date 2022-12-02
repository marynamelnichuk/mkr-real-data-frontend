import React from "react";
import NavigationBar from "../NavigationBar/NavigationBar";
import {Card, Col, Row, Form} from "react-bootstrap";
import profileImage from './profile.png';
import './MyPofile.css';

class MyProfile extends React.Component {

    state = {
        user: {
            email: 'maryna.melnychuk.mknus.2021@lpnu.ua',
            firstName: 'Марина',
            lastName: 'Мельничук'
        },
    }

    componentDidMount() {
        /*fetch(`http://localhost:8080/real-data/users/1`)
            .then(response => response.json())
            .then(data => {
                this.setState(() => {
                    return {
                        user: data
                    }
                });
            });*/
    }

    render() {
        return (
            <div>
                <NavigationBar/>
                <div className="container-inner-padding aliceblue-back apps-container">
                    <h2 className="my-profile-h2">Мій профіль</h2>
                    <Card key={this.state.user.id} text='dark' className="mb-2 my-profile-card-container">
                        <Card.Header className="my-profile-card-header">
                            <Row className="display-flex">
                                <Col className="margin-auto">
                                    <img src={profileImage} width="250" height="250" className="my-profile-image"/>
                                </Col>
                            </Row>
                        </Card.Header>
                        <Card.Body>
                            <Form>
                                <Form.Group as={Row} className="mb-3">
                                    <Form.Label column sm="6" className="my-profile-form-label">Електронна
                                        пошта</Form.Label>
                                    <Col sm="6">
                                        <Form.Control plaintext readOnly as="textarea" rows="2" value={this.state.user.email}/>
                                    </Col>
                                </Form.Group>
                                <Form.Group as={Row} className="mb-3">
                                    <Form.Label column sm="6" className="my-profile-form-label">Ім'я</Form.Label>
                                    <Col sm="6">
                                        <Form.Control plaintext readOnly value={this.state.user.firstName}/>
                                    </Col>
                                </Form.Group>
                                <Form.Group as={Row} className="mb-3">
                                    <Form.Label column sm="6" className="my-profile-form-label">Прізвище</Form.Label>
                                    <Col sm="6">
                                        <Form.Control plaintext readOnly value={this.state.user.lastName}/>
                                    </Col>
                                </Form.Group>
                            </Form>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        )
    }
}

export default MyProfile;