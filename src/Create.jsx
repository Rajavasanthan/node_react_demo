import axios from "axios";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";

function Create() {
  const navigate = useNavigate();
  let formik = useFormik({
    initialValues: {
      name: "",
      age: 0,
    },
    validate: () => {
      let err = {};
      return err;
    },
    onSubmit: async (values) => {
      try {
        await axios.post("http://localhost:3000/user", values);
        navigate("/");
      } catch (error) {
        console.log(error);
      }
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <input
        type="text"
        name="name"
        value={formik.values.name}
        onChange={formik.handleChange}
      />
       <input
        type="number"
        name="age"
        value={formik.values.age}
        onChange={formik.handleChange}
      />
      <input type="submit"/>
    </form>
  );
}

export default Create;
