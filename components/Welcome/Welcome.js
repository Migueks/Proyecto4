import "./Welcome.css";
import data from "../../data/data";
const { greetings, profession, based, resume, avatar } = data;

const Welcome = () => {
  return `
        <div class="welcome">
            <section>
                <p>${greetings}</p>
                <h1>${profession}</h1>
                <p>${based}</p>
                <button>${resume}</button>
            </section>
            <img src="${avatar.src}" alt="${avatar.alt}"></img>
        </div>
    `;
};

export default Welcome;
