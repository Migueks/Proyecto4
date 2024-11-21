import "./Header.css";
import data from "../../data/data";
const { title, links, imgs } = data;

const Header = () => {
  return `
    <header>
        <a href="/"><h1>${title}</h1></a>
        <nav>
            <ul class="links">
                ${links
                  .map(
                    (link) => `
                    <li>
                        <a href="${link.place}">${link.name}</a>
                    </li>    
                `
                  )
                  .join("")}
            </ul>
        </nav>
        <nav>
            <ul class="images">
                ${imgs
                  .map(
                    (img) => `
                    <li>
                        <a href="${img.link}" target="_blank"><img src="${img.src}" alt="${img.alt}"></img></a>  
                    </li>
                  `
                  )
                  .join("")}
            </ul>
        </nav>
    </header>
     <hr />
    `;
};

export default Header;
