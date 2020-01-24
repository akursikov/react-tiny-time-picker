import React from 'react';
import { Form, Field } from 'react-final-form';
import TinyTimePicker from './../src';
import './../src/styles.css';

function TimePickerControl(props) {
  const { input, meta, children, render, initValue, ...custom } = props;
  return <TinyTimePicker {...input} defaultValue={initValue} {...custom} />;
}

function ReactFinalForm() {
  function onSubmit(data) {
    alert(JSON.stringify(data, 0, 2));
  }
  return (
    <Form
      onSubmit={onSubmit}
      render={({ handleSubmit, values }) => (
        <form onSubmit={handleSubmit}>
          <div>
            <label>Text input</label>
            <Field
              name="textInput"
              component="input"
              placeholder="First Name"
            />
          </div>
          <div>
            <label>react-tiny-time-picker</label>
            <Field
              name="timePicker"
              initValue="3:38:13"
              defaultValue="3:38:13"
              component={TimePickerControl}
            />
          </div>
          <button type="submit">Submit</button>
          <pre>{JSON.stringify(values, 0, 2)}</pre>
        </form>
      )}
    />
  );
}

export default ReactFinalForm;
