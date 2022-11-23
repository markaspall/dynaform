import React from "react";

const FieldD = ({ field, id, fieldChanged, defaultValue }) => {

    console.log (field, id, fieldChanged, defaultValue, 'FieldD');

    return (
        <div id={'field-wrapper-' + id}>
            <label>{field.label}</label>
            <input
                type={field.type}
                id={id}
                name={field.label}
                defaultValue={defaultValue}
                onInput={e => fieldChanged(id, e.target.value)}
                autoComplete={field.autoComplete}
            />
            <p>{field.info}</p>
        </div>
    );
};

export default FieldD;