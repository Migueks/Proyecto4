import "./Education.css";
import data from "../../data/data";
const { educationArray } = data;

const Education = () => {
  return `
      <ul class="education">
        ${educationArray
          .map(
            (education) => `
          <li>
            <span class="bullet"></span>
            <div class="content"> 
              <h3>${education.title}</h3>
              <h4>${education.place} • ${education.year}</h4>
              <p>${education.text}</p>
            </div>
          </li>
          `
          )
          .join("")}
      </ul>
    `;
};

export default Education;
