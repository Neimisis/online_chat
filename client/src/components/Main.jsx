import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

import styles from "../css/Main.module.css";

const FIELDS = {
  NAME: "name",
  ROOM: "room",
};

const Main = () => {
  const { NAME, ROOM } = FIELDS;

  const [values, setValues] = useState({ [NAME]: "", [ROOM]: "" });

  const handleChange = ({ target: { value, name } }) => {
    setValues({ ...values, [name]: value });
  };

  const handleClick = (e) => {
    const isDisabled = Object.values(values).some((v) => !v);

    if (isDisabled) e.preventDefault();
  };

  return (
    <div className={styles.wrap}>
      <div className={styles.container}>
        <div className={styles.window}>
          <h1 className={styles.heading}>Подключится</h1>
          <form className={styles.form}>
            <div className={styles.group}>
              <input
                type="text"
                name="name"
                value={values[NAME]}
                placeholder="Ваше имя"
                className={styles.input}
                onChange={handleChange}
                autoComplete="off"
                required
              />
            </div>
            <div className={styles.group}>
              <input
                type="text"
                name="room"
                placeholder="Номер комнаты"
                value={values[ROOM]}
                className={styles.input}
                onChange={handleChange}
                autoComplete="off"
                required
              />
            </div>

            <Link
              className={styles.group}
              onClick={handleClick}
              to={`/chat?name=${values[NAME]}&room=${values[ROOM]}`}
            >
              <button type="submit" className={styles.button}>Войти</button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Main;
