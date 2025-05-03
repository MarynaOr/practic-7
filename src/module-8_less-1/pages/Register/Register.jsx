import { Field, Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import { fetchAuthThunk } from "../../redux/authOperations";

const Register = () => {
  const dispatch = useDispatch()
  const initialValues = {
    name: "",
    email: "",
    password: "",
  };

  const handleSubmit = (values, options) => {
    console.log(values);
    dispatch(fetchAuthThunk(values))
    options.resetForm();
  };

  return (
    <>
      <div>
        <Formik onSubmit={handleSubmit} initialValues={initialValues}>
          <Form>
            <label>
              <span>Name:</span>
              <Field name="name" />
            </label>
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

export default Register;
