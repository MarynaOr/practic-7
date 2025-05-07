import { Field, Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import { loginThunk } from "../../redux/authOperations";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate()

  const dispatch = useDispatch();
  const initialValues = {
    email: "",
    password: "",
  };


  const handleSubmit = (values, options) => {
    console.log(values);
    dispatch(loginThunk(values))
      .unwrap()
      .then(() => {navigate("/todos")})
      .catch((error) => {
        console.log("Login error:", error);
      });
    options.resetForm();
  };

  return (
    <>
      <div>
        <Formik onSubmit={handleSubmit} initialValues={initialValues}>
          <Form>
            <label>
              <span>Email:</span>
              <Field name="email" />
            </label>
            <label>
              <span>Password:</span>
              <Field name="password" type="password" />
            </label>
            <button type="submit">Submit</button>
          </Form>
        </Formik>
      </div>
    </>
  );
};

export default Login;
