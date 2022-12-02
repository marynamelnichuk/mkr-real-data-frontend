import React from "react";
import NavigationBar from "../NavigationBar/NavigationBar";
import {Button, Col, Row, Table} from "react-bootstrap";
import {IoTrashSharp} from "react-icons/io5";
import './Applications.css';
import CreateAppForm from "../CreateAppForm/CreateAppForm";

class Applications extends React.Component {

    state = {
        apps: [],
        addApp: false
    }

    componentDidMount() {
        fetch(`http://localhost:8080/real-data/apps/1`)
            .then(response => response.json())
            .then(data => {
                this.setState(({appInfo}) => {
                    return {
                        apps: data
                    }
                });
            });
    }

    onAddApp = () => {
        this.setState(({addApp}) => {
            return {
                addApp: !addApp
            }
        });
    }

    onAddedApp = (app) => {
        const requestOptions = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(app)
        };
        fetch('http://localhost:8080/real-data/apps', requestOptions)
            .then(response => response.json())
            .then(data => {
                this.setState(({apps, addApp}) => {
                    return {
                        apps: [...apps, {id:data.id, ...app}],
                        addApp: !addApp
                    }
                });
            });

        console.log('ON ADDED');
    }

    onDeleteApp = (event, id) => {
        fetch(`http://localhost:8080/real-data/apps/${id}`, { method: 'DELETE',
            headers: {'Content-Type': 'application/json'}})
            .then(() =>
                this.setState(({apps}) => {
                    const index = apps.findIndex((el) => el.id === id);
                    const appsBefore = apps.slice(0, index);
                    const appsAfter = apps.slice(index + 1, apps.length);
                    return {
                        apps: [...appsBefore, ...appsAfter]
                    }
                })
            );
    }

    render() {
        const apps = this.state.apps.map((app) => {
            return (
                <tr key={app.id}>
                    <td>{app.id}</td>
                    <td><a>{app.name}</a></td>
                    <td>{app.creationDate}</td>
                    <td>{app.description}</td>
                    <td className="align-self-center">
                        <Button variant="secondary" className="ml-3 align-self-center delete-app-button"
                                onClick={(event => {this.onDeleteApp(event, app.id)})}>
                            <IoTrashSharp />
                        </Button>
                    </td>
                </tr>
            )
        })

        return (
            <div>
            <NavigationBar />
            <div className="container-inner-padding aliceblue-back apps-container">
                {this.state.addApp ? <CreateAppForm onAddApp={this.onAddedApp} /> :
                    <span><Row className="mb-3">
                    <Col><h2>Аплікації</h2></Col>
                    <Col><Button variant="warning" size="md" active className="create-app-button"
                                 onClick={this.onAddApp} >
                        <Row className="margin-auto align-self-center create-app-text">
                            <span>Створити аплікацію</span>
                        </Row>
                    </Button></Col>
                </Row>
                <Table striped bordered hover size="md" className="back-white">
                    <thead>
                    <tr className="table-header">
                        <th>Ідентифікатор</th>
                        <th>Назва аплікаціїї</th>
                        <th>Дата створення</th>
                        <th>Опис</th>
                        <th className="delete-th">Видалити</th>
                    </tr>
                    </thead>
                    <tbody>
                        {apps}
                    </tbody>
                </Table>
                        </span>}
            </div>
            </div>
        )
    }

}

export default Applications;