import React from "react";
import {Form, Card, Button} from "react-bootstrap";
import FileInput from "../FileInput/FileInput";
import './CreateConfigForm.css';

class CreateConfigForm extends React.Component {

    state = {
        appName: null,
        databaseType: null,
        credentials: null,
        url: null,
        dataQuery: null
    };

    onAppNameChange = (event) => {
        this.setState(() => {
            return {
                appName: event.target.value
            }
        })
    }

    onDatabaseTypeChange = (event) => {
        this.setState(() => {
            return {
                databaseType: event.target.value
            }
        })
    }

    onCredentialsChange = (credentials) => {
        this.setState(() => {
            return {
                credentials: credentials
            }
        })
    }

    onUrlChange = (event) => {
        this.setState(() => {
            return {
                url: event.target.value
            }
        })
    }

    onDataQueryChange = (dataQuery) => {
        this.setState(() => {
            return {
                dataQuery: dataQuery
            }
        })
    }

    onSubmit = () => {
        this.props.onAddConfig({
            appName: this.state.appName,
            databaseType: this.state.databaseType,
            credentials: this.state.credentials,
            url: this.state.url,
            dataQuery: this.state.dataQuery,
            applicationId: 2
        });
    }


    render() {
        return (
            <div>
                <div className="create-config-form">
                    <h2>Створення нової конфігурації бази даних</h2>
                    <Card className="mt-3">
                        <Card.Body>
                            <Form>
                                <Form.Group className="create-config-form-input-with-label">
                                    <Form.Label>Назва аплікації:</Form.Label>
                                    <Form.Control type="text" placeholder="Ведіть назву аплікації" onChange={this.onAppNameChange} />
                                </Form.Group>
                                <Form.Group className="create-config-form-input-with-label">
                                    <Form.Label>База даних:</Form.Label>
                                    <Form.Select type="text" placeholder="Оберіть базу даних" onChange={this.onDatabaseTypeChange}>
                                        <option value="Spanner">Google Spanner</option>
                                        <option value="Postgres">Postgres</option>
                                        <option value="MySQL">MySQL</option>
                                        <option value="MariaDB">MarDB</option>
                                    </Form.Select>
                                </Form.Group>
                                <FileInput
                                           inputLabel="Файл конфігурації з'єднання:"
                                           inputPlaceholder="Виберіть файл конфігурації з'єднання"
                                           inputAccept=".txt,.json"
                                           onReadContent={this.onCredentialsChange}/>
                                <Form.Group className="create-config-form-input-with-label create-config-after-file-input">
                                    <Form.Label>URL до бази даних:</Form.Label>
                                    <Form.Control type="text" placeholder="Ведіть url до бази даних" onChange={this.onUrlChange}/>
                                </Form.Group>
                                <FileInput className="create-config-file-input-with-label"
                                           inputLabel="SQL запит:"
                                           inputPlaceholder="Виберіть SQL файл"
                                           inputAccept=".txt,.sql"
                                           onReadContent={this.onDataQueryChange}/>
                                <Button variant="primary" size="lg" active className="next-button create-config-form-btn" onClick={this.onSubmit}>
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

export default CreateConfigForm;