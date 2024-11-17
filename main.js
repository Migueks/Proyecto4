import "./style.css";
import Header from "./components/Header/Header";
import Welcome from "./components/Welcome/Welcome";

document.querySelector("#app").innerHTML = `
${Header()}
${Welcome()}
`;
