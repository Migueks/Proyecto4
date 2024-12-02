import "./Button.css";
import data from "../../data/data";
import Education from "../Education/Education";
import Experience from "../Experience/Experience";
const { education, experience } = data;

const Button = () => {
  return `
    <div class="button" id="experience-education">
        <button id="buttonChange" class="change-button">${education}</button>
        <div id="content">${Experience()}</div>
        <div id="content2">${Education()}</div>
    </div>
  `;
};

document.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("buttonChange");
  const contentExperience = document.getElementById("content");
  const contentEducation = document.getElementById("content2");

  button.addEventListener("click", () => {
    if (
      contentExperience.style.display === "block" ||
      contentExperience.style.display === ""
    ) {
      contentExperience.style.display = "none";
      contentEducation.style.display = "block";
      button.innerHTML = experience;
    } else {
      contentExperience.style.display = "block";
      contentEducation.style.display = "none";
      button.innerHTML = education;
    }
  });
});

export default Button;
