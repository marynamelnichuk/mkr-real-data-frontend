import React from "react";
import NavigationBar from "../NavigationBar/NavigationBar";
import {Button, Col, Row, Table} from "react-bootstrap";
import {IoTrashSharp} from "react-icons/io5";
import CreateConfigForm from "../CreateConfigForm/CreateConfigForm";
import './Configs.css';

class Configs extends React.Component {

    state = {
        configs: [],
        addConfig: false
    }

    componentDidMount() {
        fetch(`http://localhost:8080/real-data/database-configs/1`)
            .then(response => response.json())
            .then(data => {
                this.setState(({configInfo}) => {
                    return {
                        configs: data
                    }
                });
            });
    }

    onAddConfig = () => {
        this.setState(({addConfig}) => {
            return {
                addConfig: !addConfig
            }
        });
    }

    onAddedConfig = (config) => {
        const requestOptions = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(config)
        };
        fetch('http://localhost:8080/real-data/database-configs', requestOptions)
            .then(response => response.json())
            .then(data => {
                this.setState(({configs, addConfig}) => {
                    return {
                        configs: [...configs, {id:data.id, ...config}],
                        addConfig: !addConfig
                    }
                });
            });
    }

    onDeleteConfig = (event, id) => {
        fetch(`http://localhost:8080/real-data/database-configs/${id}`, { method: 'DELETE',
            headers: {'Content-Type': 'application/json'}})
            .then(() =>
                this.setState(({configs}) => {
                    const index = configs.findIndex((el) => el.id === id);
                    const configsBefore = configs.slice(0, index);
                    const configsAfter = configs.slice(index + 1, configs.length);
                    return {
                        configs: [...configsBefore, ...configsAfter]
                    }
                })
            );
    }

    render() {
        const configs = this.state.configs.map((config, index=1) => {
            return (
                <tr>
                    <td>{++index}</td>
                    <td className="break-word-wrap"><a>{config.appName}</a></td>
                    <td className="break-word-wrap">{config.databaseType}</td>
                    <td className="break-word-wrap">{config.credentials}</td>
                    <td className="break-word-wrap config-url-field-value">{config.url}</td>
                    <td className="break-word-wrap">{config.dataQuery}</td>
                    <td className="align-self-center">
                        <Button variant="secondary" className="ml-3 align-self-center delete-config-button"
                                onClick={(event => {this.onDeleteConfig(event, config.id)})}>
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
                    {this.state.addConfig ? <CreateConfigForm onAddConfig={this.onAddedConfig} /> :
                        <span><Row className="mb-3">
                    <Col><h2>Конфігурації баз даних-джерел</h2></Col>
                    <Col><Button variant="warning" size="md" active className="create-app-button"
                                 onClick={this.onAddConfig} >
                        <Row className="margin-auto align-self-center create-app-text">
                            <span>Створити конфігурацію</span>
                        </Row>
                    </Button></Col>
                </Row>
                <Table striped bordered responsive="md" hover size="md" className="back-white">
                    <thead>
                    <tr className="table-header">
                        <th className="break-word-wrap">Ідентифікатор</th>
                        <th className="break-word-wrap">Аплікація</th>
                        <th className="break-word-wrap">База даних</th>
                        <th className="break-word-wrap">Файл конфігруації зєднання</th>
                        <th className="break-word-wrap">URL до бази даних</th>
                        <th className="break-word-wrap">SQL запит</th>
                        <th className="break-word-wrap delete-th">Видалити</th>
                    </tr>
                    </thead>
                    <tbody>
                        {configs}
                    </tbody>
                </Table>
                        </span>}
                </div>
            </div>
        )
    }
}

export default Configs;