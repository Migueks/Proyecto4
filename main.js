import "./style.css";
import Header from "./components/Header/Header";
import Welcome from "./components/Welcome/Welcome";
import About from "./components/About/About";
import Button from "./components/Button/Button";
import Work from "./components/Work/Work";
import Contact from "./components/Contact/Contact";

document.querySelector("#app").innerHTML = `
${Header()}
${Welcome()}
${About()}
${Button()}
${Work()}
${Contact()}
`;
