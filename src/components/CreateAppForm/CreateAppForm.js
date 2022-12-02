import React from "react";
import {Form, Card, Button} from "react-bootstrap";
import './CreateAppForm.css';

class CreateAppForm extends React.Component {

    state = {
        name: null,
        creationDate: null,
        description: null
    };

    onNameChange = (event) => {
        this.setState(() => {
            return {
                name: event.target.value
            }
        })
    }

    onCreationDateChange = (event) => {
        this.setState(() => {
            return {
                creationDate: event.target.value
            }
        })
    }

    onDescriptionChange = (event) => {
        this.setState(() => {
            return {
                description: event.target.value
            }
        })
    }

    onSubmit = () => {
        this.props.onAddApp({
            name: this.state.name,
            creationDate: new Date(this.state.creationDate).toISOString(),
            description: this.state.description,
            userId: 1
        });
    }


    render() {
        return (
            <div>
                <div className="create-app-form">
                    <h2>Створення нової аплікації</h2>
                    <Card className="mt-3">
                        <Card.Body>
                            <Form>
                                <Form.Group className="create-app-form-input-with-label">
                                    <Form.Label>Назва аплікації:</Form.Label>
                                    <Form.Control type="text" placeholder="Ведіть назву аплікації" onChange={this.onNameChange} />
                                </Form.Group>
                                <Form.Group className="create-app-form-input-with-label">
                                    <Form.Label>Дата створення:</Form.Label>
                                    <Form.Control type="date" placeholder="Ведіть дату створення" onChange={this.onCreationDateChange}/>
                                </Form.Group>
                                <Form.Group className="create-app-form-input-with-label">
                                    <Form.Label>Опис:</Form.Label>
                                    <Form.Control type="text" placeholder="Ведіть опис" onChange={this.onDescriptionChange}/>
                                </Form.Group>
                                <Button variant="primary" size="lg" active className="next-button create-app-form-btn" onClick={this.onSubmit}>
                                    Створити
                                </Button>
                            </Form>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        );
    }
}

export default CreateAppForm;