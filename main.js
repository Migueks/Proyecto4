import "./style.css";
import Header from "./components/Header/Header";
import Welcome from "./components/Welcome/Welcome";
import About from "./components/About/About";
import Button from "./components/Button/Button";
import Education from "./components/Education/Education";

document.querySelector("#app").innerHTML = `
${Header()}
${Welcome()}
${About()}
${Button()}
`;
