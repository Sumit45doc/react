import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const initialValues = {
  name: "",
  email: "",
  channel: "",
};
const onSubmit = (values) => {
  console.log(values);
};
// const validate = (values) => {
//   const errors = {};
//   if (!values.name) errors.name = "Required";
//   if (!values.email) errors.email = "Required";
//   if (!values.channel) errors.channel = "Required";
//   return errors;
// };
const validationSchema = Yup.object({
  name: Yup.string().required("required"),
  email: Yup.string().email("Invalid Email Format").required("Required"),
  channel: Yup.string().required("required"),
})

function Form() {
  const formik = useFormik({
    initialValues,
    onSubmit,
    // validate,
    validationSchema,
  });
//   console.log(formik.values);
//   console.log(formik.errors);
  console.log(formik.touched);
  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div className="form-control">
          <label htmlFor="Name">Name</label>
          <input
            type="text"
            name="name"
            id="Name"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.name && formik.errors.name ? (
            <h3 className="error">{formik.errors.name}</h3>
          ) : null}
        </div>

        <div className="form-control">
          <label htmlFor="Email">E-mail</label>
          <input
            type="email"
            name="email"
            id="Email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.email && formik.errors.email ? (
            <h3 className="error">{formik.errors.email}</h3>
          ) : null}
        </div>
        <div className="form-control">
          <label htmlFor="Channel">Channel</label>
          <input
            type="text"
            name="channel"
            id="Channel"
            value={formik.values.channel}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.channel && formik.errors.channel ? (
            <h3 className="error">{formik.errors.channel}</h3>
          ) : null}
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Form;
