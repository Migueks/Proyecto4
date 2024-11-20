import "./Experience.css";
import data from "../../data/data";
const { experienceArray } = data;

const Experience = () => {
  return `
        <ul class="experience">
            ${experienceArray
              .map(
                (experience) => `
                    <li>
                        <span class="bullet"></span>
                        <div class="content">
                            <h3>${experience.title}</h3>
                            <h4>${experience.bussiness} • ${experience.year}</h4>
                            <h4>${experience.place}</h4>
                            <p>${experience.description}</p>   
                        <div>
                    </li>
                `
              )
              .join("")}
        </ul>
    `;
};

export default Experience;
