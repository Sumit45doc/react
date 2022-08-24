import React from "react";
import {
  Formik,
  Form,
  Field,
  ErrorMessage,
  FieldArray,
  FastField,
} from "formik";
import * as Yup from "yup";
const initialValues = {
  name: "",
  email: "",
  channel: "",
  comments: "",
  address: {
    address1: "",
  },
  socail: {
    faceBook: "",
  },
  phoneno: ["", ""],
  phNo: [""],
};
const onSubmit = (values, onSubmitProps) => {
  console.log(onSubmitProps);
  console.log(values);
  setTimeout(() => {
    onSubmitProps.setSubmitting(false);
    onSubmitProps.resetForm();
  }, 5000);
};
// const validate = (values) => {
//   const errors = {};
//   if (!values.name) errors.name = "Required";
//   if (!values.email) errors.email = "Required";
//   if (!values.channel) errors.channel = "Required";
//   if (!values.comments) errors.comments = "Plz comments some thing";
//   return errors;
// };

const validationSchema = Yup.object({
  name: Yup.string()
    .max(15, "Must be 15 characters or less")
    .required("Required"),
  email: Yup.string().email("Invalide").required("required"),
  // phNo: Yup.number().positive("positive"),
  // phoneno: Yup.number(),
  // "socail.faceBook": Yup.string().required("Reuired"),
  // address: Yup.string().required("required"),
});
// inndividual error check
const validateComment = (value) => {
  let error;
  if (!value) error = "Required comment";
  return error;
};
function FormikForm() {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      // validate={validate}
      validationSchema={validationSchema}
      // validateOnChange={false}
    >
      {(formik) => {
        console.log(formik);
        return (
          <Form>
            <div className="form-control">
              <label htmlFor="Name">Name</label>
              <Field type="text" name="name" id="Name" />
              <ErrorMessage name="name">
                {(err) => {
                  return <div className="error">{err}</div>;
                }}
              </ErrorMessage>
            </div>
            <div className="form-control">
              <label htmlFor="Email">E-mail</label>
              <Field type="email" name="email" id="Email" />
              <ErrorMessage name="email" />
            </div>
            <div className="form-control">
              <label htmlFor="Channel">Channel</label>
              <Field type="text" name="channel" id="Channel" />
              <ErrorMessage name="channel" />
            </div>
            <div className="form-control">
              <label htmlFor="comments">Comments</label>
              <Field
                as="textarea"
                type="text"
                name="comments"
                id="comments"
                validate={validateComment}
              />
              <ErrorMessage name="comments" component="div" />
            </div>
            <div className="form-control">
              <label htmlFor="facebook">Socail</label>
              <Field type="text" name="socail.faceBook" id="facebook" />
              <ErrorMessage name="socail.faceBook">
                {(err) => {
                  return <div>{err}</div>;
                }}
              </ErrorMessage>
            </div>
            <div className="form-control">
              <label htmlFor="address">Address1</label>
              <FastField type="text" name="address.address1" id="address">
                {(props) => {
                  // console.log(props);
                  const { field, meta } = props;
                  return (
                    <div>
                      <input type="text" {...field} />
                      {meta.touched && meta.errors ? (
                        <h3 className="error">{meta.errors}</h3>
                      ) : null}
                    </div>
                  );
                }}
              </FastField>
              {/* <ErrorMessage name="socail.faceBook" /> */}
            </div>
            <div className="form-control">
              <label htmlFor="primary">PrimaryNo</label>
              <Field type="text" name="phoneno[0]" id="primary" />
              {/* <ErrorMessage name="socail.faceBook" /> */}
            </div>
            <div className="form-control">
              <label htmlFor="secondary">SecondaryNo:</label>
              <Field type="text" name="phoneno[1]" id="secondary" />
              {/* <ErrorMessage name="socail.faceBook" /> */}
            </div>

            <div className="form-control">
              <label htmlFor="secondary">Phone No:</label>
              <FieldArray name="phNo">
                {(fieldArrayProps) => {
                  // console.log(fieldArrayProps);
                  const { form, push, remove } = fieldArrayProps;
                  const { values } = form;
                  const { phNo } = values;
                  return (
                    <div>
                      {phNo.map((p, i) => {
                        return (
                          <div key={i}>
                            <Field type="tel" name={`phNo[${i}]`} />
                            {i > 0 && (
                              <button type="button" onClick={() => remove(i)}>
                                -
                              </button>
                            )}

                            <button type="button" onClick={() => push("")}>
                              +
                            </button>
                          </div>
                        );
                      })}
                    </div>
                  );
                }}
              </FieldArray>
            </div>
            <button
              type="button"
              onClick={() => {
                formik.validateField("email");
              }}
            >
              commit error
            </button>
            <button
              type="button"
              onClick={() => {
                formik.validateForm();
              }}
            >
              Validate all
            </button>
            <button
              type="button"
              onClick={() => {
                formik.setFieldTouched("comments");
              }}
            >
              Validate comments
            </button>
            <button
              type="button"
              onClick={() => {
                formik.setTouched({
                  name: true,
                  email: true,
                  comments: true,
                });
              }}
            >
              Validate all
            </button>
            <button
              type="submit"
              disabled={!formik.isValid || formik.isSubmitting}
            >
              {formik.isSubmitting ? "Processing..." : "Submit"}
            </button>
            <br />
            <br />
            <br />
          </Form>
        );
      }}
    </Formik>
  );
}

export default FormikForm;
