import "./Work.css";
import data from "../../data/data";
const { work, description, projects } = data;

const Work = () => {
  return `
        <section class="work" id="work">
            <div>
                <h2>${work}</h2>
                <p class="description">${description}</p>
            </div>
            <div class="projects">
                ${projects
                  .map(
                    (project) => `
                    <div>
                        <a href="${project.link}" target="_blank"><img src="${project.src}" alt="${project.alt}"></img></a>
                        <p class="date">${project.time}</p>
                        <h3>${project.title}</h3>
                        <p class="paragraph">${project.paragraph}</p>
                    </div>
                `
                  )
                  .join("")}
            </div>
        </section>
    `;
};

export default Work;
