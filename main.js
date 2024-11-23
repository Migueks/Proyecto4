import "./style.css";
import Welcome from "./components/Welcome/Welcome";
import About from "./components/About/About";
import Button from "./components/Button/Button";
import Work from "./components/Work/Work";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import { changeTheme, Header } from "./components/Header/Header";

document.querySelector("#app").innerHTML = `
${Header()}
${Welcome()}
${About()}
${Button()}
${Work()}
${Contact()}
${Footer()}
`;
changeTheme();
