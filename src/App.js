import "./styles.css";
import FnComp from "./components/FnComp";
import ClsComp from "./components/ClsComp";
import Greet from "./components/Greet";
import Welcome from "./components/Welcome";

export default function App() {
  return (
    <div className="App">
      {/* <FnComp />
      <ClsComp /> */}
      <Greet name="arun" city="rjy">
        <p>from children</p>
      </Greet>
      <Greet name="kumar" city="bangalore">
        <button>Action</button>
      </Greet>
      <Welcome name="arunc" city="chennai"></Welcome>
    </div>
  );
}
