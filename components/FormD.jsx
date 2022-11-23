import React from "react";
import {useState,useEffect} from 'react';
import Image from "next/image";
import FieldD from './FieldD';
import formSchema from '../form-schema/get-email.json';
import { Html } from "next/document";

let values = {};
let idSuffix = 1;

const FormD = ({ schemaName }) => {

    //const [currentPageData, setCurrentPageData] = useState(formData[page]);
    const onSubmit = e => {
        e.preventDefault();
        // todo - send data somewhere
    };

    //const [formSchema, setFormSchema]=useState([]);

    //const path = '../form-schema/${schemaName}.json'
    //const path = '../form-schema/' + schemaName + '.json'
    
    //console.log(path, 'form schema path');

    //useEffect(() => {
    //    //import(path)
    //    //import('../form-schema/${schemaName}.json')
    //    import('../form-schema/get-email.json')
    //    .then((res) => setFormSchema(res.default))
    //   .catch(err=> console.log(err, 'Failed to open form schema json file'))
    //
    //},[formSchema])

    console.log(formSchema, 'form schema data');

    let renderedForm = '';
    renderedForm = formRenderElement(formSchema);

    return renderedForm;
}

function formRenderElement(element) {

    console.log(element, 'element in formRenderElement');

    // construct a unique ID if not provided one
    let id = '';
    if (element.hasOwnProperty('id')){
        id = element.id;
    } else {
        if (element.hasOwnProperty('label')) {
            id = element.type.concat('-').concat(element.label).replace(/\s+/g, '-').toLowerCase();
        } else {
            id = element.type.replace(/\s+/g, '-').toLowerCase();
        }
    }

    if (values.hasOwnProperty(id)) {
        id = id + '-' + idSuffix++;
    }

    console.log(id, 'id in formRenderElement');

    // load up with the default value if provided
    values[id] = element.default ? element.default : '';

    switch (element.type) {

        case "page":
            console.log('rendering page in formRenderElement');
            return (
                <div id={"page-wrapper-" + id}>
                    {element?.image && (<Image src={element?.image} width={120} height={120} />)}
                    <div paddingbottom={5} paddingtop={30} align="center">{element?.label}</div>
                    <div fontSize={15} paddingbottom={25} align="center">{element?.sublabel}</div>
                    <div fontSize={15} paddingbottom={25} align="center">{element?.info}</div>
                    {formRenderElements(element.elements)}
                </div>
            );        
            
            case "form":
                console.log('rendering form in formRenderElement');
                return (
                    <form id={"form-wrapper-" + id}>
                        {formRenderElements(element.elements)}
                        <p>The submit button is {element.submit.label}</p>
                    </form>
                );     

            case "fieldset":
                console.log('rendering form in formRenderElement');
                return (
                    <fieldset id={"fieldset-wrapper-" + id}>
                        {formRenderElements(element.elements)}
                        <p>The submit button is {element.submit.label}</p>
                    </fieldset>
                );

            default:
                return (
                    <FieldD
                        field={element}
                        id={id}
                        fieldChanged={fieldChanged}
                        defaultValue={values[id]}
                    />
                );
    }
}

function formRenderElements(elements) {

    if (!elements) return;

    console.log(elements, 'elements in formRenderElements');  

    return (
        <div>
        {elements.map(element => 
            <div>
            {formRenderElement(element)}
            </div>
        )}
        </div>
    );

}

function fieldChanged (id, value) {

    values[id] = value;
    console.log (values, 'field changed')
}

export default FormD;
