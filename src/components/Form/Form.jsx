import style from "./Form.module.css";
import { useState } from "react";
import Validation from "../Validation/Validation.js";

export default function Form(props) {
  const [userData, setuserData] = useState({
    username: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    username: "",
    password: "",
  });

  const handleInputChange = (event) => {
    setuserData({ ...userData, [event.target.name]: event.target.value });
    setErrors(
      Validation({ ...userData, [event.target.name]: event.target.value })
    );
  };

  const handleSubmit = () => {
    props.login(userData);
  };

  return (
    <div className={style.containForm}>
      <h1 className={style.tituloForm}>LOGIN</h1>
      <form onSubmit={handleSubmit} className={style.formContainer}>
        <label htmlFor="username">
          username:
          <input
            id='username'
            name="username"
            className={errors.username && style.warning}
            value={userData.username}
            type="text"
            placeholder="Escribe tu email.."
            onChange={handleInputChange}
          ></input>
        </label>

        {errors.username ? (
          <p className={style.danger}>{errors.username}</p>
        ) : (
          ""
        )}
        <hr />

        <label htmlFor="password">
          password:
          <input
            id="password"
            name="password"
            className={errors.password && style.warning}
            value={userData.password}
            type="password"
            placeholder="Escribe tu contraseña..."
            onChange={handleInputChange}
          ></input>
        </label>

        {errors.password ? (
          <p className={style.danger}>{errors.password}</p>
        ) : (
          ""
        )}
        <br />

        <button type="submit" variant="primary" className={style.buttonLogin}>
          Login
        </button>
        <br />
      </form>
    </div>
  );
}
