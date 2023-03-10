import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

function Radio() {
  const options = [
    { key: "Home", value: "home" },
    { key: "Work", value: "work" },
  ];

  const initialValues = {
    addressType: "",
  };

  const validationSchema = Yup.object({
    addressType: Yup.string().required("This is mandatory field"),
  });
  const onSubmit = (values) => {
    console.log("data ", values);
  };

  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}>
        <Form>
          <Field name="addressType">
            {({ field }) => {
              return options.map((option) => {
                return (
                  <React.Fragment key={option.key}>
                    <input
                      type="radio"
                      id={option.value}
                      {...field}
                      value={option.value}
                      checked={field.value === option.value}
                    />
                    <label htmlFor={option.value}>{option.key}</label>
                  </React.Fragment>
                );
              });
            }}
          </Field>
          <ErrorMessage name="addressType" div="error" />
        </Form>
      </Formik>
    </div>
  );
}

export default Radio;
