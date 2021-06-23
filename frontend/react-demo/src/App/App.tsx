import { TaskContainer } from "../components";
import logo from "../utils/logo.svg";
import classes from "./App.module.scss";

export function App() {
  return (
    <>
      <div className="container is-max-desktop my-6">
        <TaskContainer />
      </div>
      <div className={classes.LogoContainer}>
        <img src={logo} className={classes.AppLogo} alt="logo" />
        <p className="title has-text-light has-text-centered">React</p>
      </div>
    </>
  );
}
