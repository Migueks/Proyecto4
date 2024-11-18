import "./Button.css";
import data from "../../data/data";
const { education, experiencie } = data;

const Button = () => {
  return `
    <div class="button">
        <button id="button">Show Experience</button>
    </div>
    `;
};

export default Button;
