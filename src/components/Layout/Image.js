import classes from "./Image.module.css";
import mealsImage from "../../assets/meals.jpg";

const Image = () => {
  return (
    <div className={classes["main-image"]}>
      <img src={mealsImage} alt="A table full of delicious food!" />
    </div>
  );
};

export default Image;