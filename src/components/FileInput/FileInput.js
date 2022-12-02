import React from "react";
import {Form} from "react-bootstrap";

const FileInput = (props) => {
    let fileReader;

    const handleFileRead = (e) => {
        const content = fileReader.result;
        props.onReadContent(content);
    };

    const handleFileChosen = (file) => {
        fileReader = new FileReader();
        fileReader.onloadend = handleFileRead;
        fileReader.readAsText(file);
    };

    return <span>
        <Form.Group>
            <Form.Label>{props.inputLabel}</Form.Label>
            <Form.Control type="file" accept={props.inputAccept} placeholder={props.inputPlaceholder}
                          onChange={e => handleFileChosen(e.target.files[0])}/>
        </Form.Group>
        </span>
};

export default FileInput;