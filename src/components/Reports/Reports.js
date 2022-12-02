import React from 'react';
import {Card, Row, Col} from "react-bootstrap";
import './Reports.css';

const Reports = (props) => {

    const {id, name, dataStudioUrl} = props;

    return (
        <Card key={id} text='dark' className="mb-2 report-card-container">
            <Card.Header>
                <Row className="display-flex">
                    <Col xs="10" className="margin-auto">{name}</Col>
                </Row>
            </Card.Header>
            <Card.Body>
                <span className="report-iframe">
                    <iframe width="520" height="400"
                            src={dataStudioUrl} frameBorder="0" allowFullScreen> </iframe>
                    </span>
            </Card.Body>
        </Card>
    );
}

export default Reports;