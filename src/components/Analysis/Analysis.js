import React from "react";
import NavigationBar from "../NavigationBar/NavigationBar";
import {Form} from "react-bootstrap";
import './Analysis.css';
import Reports from "../Reports/Reports";

class Analysis extends React.Component {

    state = {
        apps: [],
        selectedApp: null,
        reports: [
            {id: '1', name: 'крінж', dataStudioUrl: 'https://datastudio.google.com/embed/reporting/ede6f5ab-401c-46c8-9d16-fd05f950a3fc/page/tEnnC'}
        ]
    }

    componentDidMount() {
        /*fetch(`http://localhost:8080/real-data/apps/1`)
            .then(response => response.json())
            .then(data => {
                this.setState(() => {
                    return {
                        apps: data
                    }
                });
            });*/
    }

    onAppChange = (event) => {
        this.setState(() => {
            return {
                selectedApp: event.target.value
            }
        });
        fetch(`http://localhost:8080/real-data/reports/` + event.target.value)
            .then(response => response.json())
            .then(data => {
                this.setState(() => {
                    return {
                        reports: data
                    }
                });
            });
    }

    render() {
        const apps = this.state.apps.map((app) => {
            return (
                <option id={app.id} value={app.id}>{app.name}</option>
            )
        })

        const reports = this.state.reports.map((report) => {
            return (
                <Reports id={report.id} name={report.name} dataStudioUrl={report.dataStudioUrl} />
            )
        })

        return (
            <div>
                <NavigationBar />
                <div className="container-inner-padding aliceblue-back apps-container analysis-container">
                    <h2>Оберіть аплікацію:</h2>
                    <Form.Group className="choose-app-section">
                        <Form.Select type="text" placeholder="Оберіть базу даних" onChange={this.onAppChange}>
                            <option id="none" value="None">None</option>
                            {apps}
                        </Form.Select>
                    </Form.Group>
                    <div className="reports-container">
                        {reports}
                    </div>
                </div>
            </div>
        )
    }
}

export default Analysis;