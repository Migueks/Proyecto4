import "./Button.css";
import data from "../../data/data";
import Education from "../Education/Education";
import Experience from "../Experience/Experience";
const { education, experiencie } = data;

const Button = () => {
  return `
    <div class="button">
        <button id="button">Show Experience</button>
        <div>${Experience()}</div>
    </div>
    `;
};

export default Button;
