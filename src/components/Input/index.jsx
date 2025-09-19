import { useSelector } from "react-redux";
import Search from "../../assets/images/topBarIcons/Search";
import styles from "./input.module.scss";

const Input = ({
  onChange,
  placeholder,
  value,
  className,
  hideSearchIcon,
  id,
  onBlur,
  name,
  max,
  type,
  disabled,
}) => {
  const { uiTheme } = useSelector((state) => state);

  return (
    <div
      className={`${styles.inputContainer} ${className ? className : ""} ${
        uiTheme.mode === "light" ? styles.light : styles.dark
      }`}
    >
      {hideSearchIcon ? (
        ""
      ) : (
        <Search fill={uiTheme.mode === "light" ? "#1C1C1C" : "#FFFFFF"} />
      )}
      <input
        id={id}
        type={type ? type : "text"}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        onBlur={onBlur}
        name={name}
        autoComplete="off"
        disabled={disabled}
        max={max}
        className={uiTheme.mode === "light" ? styles.light : styles.dark}
      />{" "}
      <p className={uiTheme.mode === "light" ? styles.light : styles.dark}>
        ⌘/
      </p>
    </div>
  );
};

export default Input;
