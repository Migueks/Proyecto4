import "./About.css";
import data from "../../data/data";
const { about, me } = data;

const Welcome = () => {
  return `
        <div class="about" id="about">
            <h1>${about}</h1>
            <p>${me}</p>
        </div>
    `;
};

export default Welcome;
