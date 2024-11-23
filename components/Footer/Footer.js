import "./Footer.css";
import data from "../../data/data";
const { copyright } = data;

const Footer = () => {
  return `
        <footer>
            <p>${copyright}</p>
        </footer>
    `;
};

export default Footer;
