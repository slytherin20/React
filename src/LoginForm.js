import { useFormik } from "formik";

export default function LoginForm() {
  const validate = (values) => {
    let errors = {};
    if (!values.email) errors.email = "*Required";
    else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email))
      errors.email = "Invalid E-mail Address";
    if (!values.password) errors.password = "*Required";
    else if (values.password.length < 8)
      errors.password = "Must be atleast 8 characters long";
    return errors;
  };
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validate,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <div className="login-page">
      <h1>Login</h1>
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.email && formik.errors.email ? (
          <p className="form-error">{formik.errors.email}</p>
        ) : null}
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.password && formik.errors.password ? (
          <p className="form-error">{formik.errors.password}</p>
        ) : null}
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
