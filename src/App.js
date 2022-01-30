import GetData from "./components/api";
import classes from "./app.module.css";

function App() {
  return (
    <div className={classes.main}>
      <GetData />
    </div>
  );
}

export default App;
