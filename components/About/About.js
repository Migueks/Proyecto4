import "./About.css";
import data from "../../data/data";
const { about, me } = data;

const Welcome = () => {
  return `
        <div class="about" id="about">
            <h2 class="titleNight">${about}</h2>
            <p>${me}</p>
        </div>
    `;
};

export default Welcome;
