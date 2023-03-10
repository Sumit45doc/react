import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import Test from "./Test";
const initialValues = {
  name: "",
  email: "",
  comments: "",
  address: "",
  
};
const onSubmit = (values) => {
  console.log(values);
};
const validate = (values) => {
  const errors = {};
  if (!values.name) errors.name = "Required";
  if (!values.email) errors.email = "Required";
  if (!values.comments) errors.comments = "Required";
  if (!values.address) errors.address = "Required";
  return errors;
};
function NormalForm() {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validate={validate}
    >
      <Form>
        <div className="form-control">
          <label htmlFor="name">Name</label>
          <Field type="text" id="name" name="name" />
          <ErrorMessage name="name">
            {(err) => {
              return <div className="error">{err}</div>;
            }}
          </ErrorMessage>
        </div>
        <div className="form-control">
          <label htmlFor="Email">E-mail</label>
          <Field type="email" id="Email" name="email" />
          <ErrorMessage name="email" component={Test} />
        </div>
        <div className="form-control">
          <label htmlFor="comments">Comment</label>
          <Field
            as="textarea"
            type="text"
            rows="8"
            cols="57"
            id="comments"
            name="comments"
          />
          <ErrorMessage name="comments">
            {(err) => {
               console.log("ERROR");
              return <div className="error">{err}</div>;
            }}
          </ErrorMessage>
        </div>
        <div className="form-control">
          <label htmlFor="address">Address</label>
          <Field type="address" name="address">
            {(props) => {
              const { field, meta } = props;
              console.log("RENDER");
              return (
                <>
                  <input id="address" {...field} />
                  {meta.touched && <p>{meta.error}</p>}
                </>
              );
            }}
          </Field>
        </div>
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
}

export default NormalForm;
