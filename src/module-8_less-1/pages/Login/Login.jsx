import { Field, Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import { loginThunk } from "../../redux/authOperations";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

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
      .then(res => {
        toast.success(`hello ${res.user.email}`)
        navigate("/todos", {replace:true})})
      .catch(()=>toast.error("This didn't work."));
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
