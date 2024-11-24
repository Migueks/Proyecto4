import "./Contact.css";
import data from "../../data/data";
const {
  contact,
  contact_src,
  contact_alt,
  text,
  email,
  phone,
  address,
  schedule,
} = data;
// Poner id contact
const Contact = () => {
  return `
        <section class="contact" id="contact">
            <h2 class="titleNight">${contact}</h2>
            <div class="section">
                <img src="${contact_src}" alt="${contact_alt}"></img>
                <div>
                    <p>${text}</p>
                    <p class="email"><a href="mailto:lhlmiguel@gmail.com">${email}</a></p>
                    <p>${phone}</p>
                    <p>${address}</p>
                    <p>${schedule}</p>
                <div>
            </div>
        </section>
        

    `;
};

export default Contact;
