import { useFormik } from "formik";
import * as Yup from "yup";
export default function SignUp() {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      reenterPassword: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .max(20, "Maximum 20 characters allowed.")
        .required("Required"),
      lastName: Yup.string()
        .max(20, "Maximum 20 characters allowed.")
        .required("Required"),
      email: Yup.string().email("Invalid E-mail Address").required("Required"),
      password: Yup.string()
        .min(8, "Password should be atleast 8 characters long")
        .matches(
          /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/,
          "Password should contain atleast one Capital Letter, one digit and one special character"
        )
        .required("Required"),
      reenterPassword: Yup.string()
        .oneOf([Yup.ref("password"), null], "Passwords must match")
        .required("Required"),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });
  return (
    <div className="signup-page">
      <h1>Sign Up</h1>
      <form onSubmit={formik.handleSubmit}>
        <div className="fullname">
          <label htmlFor="firstName">
            First Name:
            <input
              type="text"
              name="firstName"
              id="firstName"
              value={formik.values.firstName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.firstName && formik.errors.firstName ? (
              <p className="form-error">{formik.errors.firstName}</p>
            ) : null}
          </label>
          <label htmlFor="lastName">
            Last Name:
            <input
              type="text"
              name="lastName"
              id="lastName"
              value={formik.values.lastName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.lastName && formik.errors.lastName ? (
              <p className="form-error">{formik.errors.lastName}</p>
            ) : null}
          </label>
        </div>
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
        <label htmlFor="reenterPassword">Re-Enter the Password</label>
        <input
          type="password"
          name="reenterPassword"
          id="reenterPassword"
          value={formik.values.reenterPassword}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.reenterPassword && formik.errors.reenterPassword ? (
          <p className="form-error">{formik.errors.reenterPassword}</p>
        ) : null}
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}
