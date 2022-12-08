import { useNavigate } from "react-router-dom";
import styles from "./Error404.module.css";

const Error404 = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.contain404}>
      <button className={styles.button404} onClick={() => navigate("/home")}>
        Go Home
      </button>
      <div>
        <h1 className={styles.text404}>4 4</h1>
        <h3 className={styles.textnoFound}>Not Found</h3>
      </div>
    </div>
  );
};

export default Error404;
