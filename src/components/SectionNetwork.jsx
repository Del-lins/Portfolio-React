import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { HomeSection } from "../style/SectionNetworkStyle";
import minhaImage from "../assets/Dell.png";
const Section = () => {
  return (
    <>
      <HomeSection>
        <div className="informations">
          <h1>Óla! Sou Delcleciano Lins</h1>
          <p>
            Me apaixonei por Tecnologia e agora sonho em ser um Developer
            front-end. Sou um profissional apaixonado por desafios e em
            constante busca pelo aprimoramento pessoal e profissional. Sou um
            entusiasta apaixonado pela criação de soluções inovadoras que
            impulsionam o progresso. 😍
          </p>

          <section>
            <ul id="social-network">
              <li className="btn">
                <a
                  href="https://www.linkedin.com/in/delcleciano-lins-de-melo-7a6201259/"
                  target="_blank"
                >
                  <FaLinkedin className="icon" id="linkedin" />
                </a>
              </li>
              <li className="btn">
                <a href="https://github.com/Del-lins" target="_blank">
                  <FaGithub className="icon" id="github" />
                </a>
              </li>
              <li className="btn">
                <a href="">
                  <FaInstagram className="icon" id="instagram" />
                </a>
              </li>
            </ul>
          </section>
        </div>

        <div className="container-foto">
          <div className="foto sombra-interna">
            <img src={minhaImage} alt="Minha foto" />
          </div>
        </div>
      </HomeSection>
    </>
  );
};

export default Section;
