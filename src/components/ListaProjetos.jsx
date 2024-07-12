import PropTypes from "prop-types";

import barbeariaImage from "../img/Barbearia-481x900.png";
import telaLoginReactImage from "../img/Tela-Login-React-481x900.png";
import burgueriaImage from "../img/Burgueria-481x900.png";
import venomImage from "../img/Venom-481x900.png";
import gtaImage from "../img/GTA-481x900.png";
import onePierceImage from "../img/One-pierce-481x900.png";
import rakutoImage from "../img/Rakuto-481x900.png";
import filmesImage from "../img/Web-DL-filmes-481x900.png";

import { Container } from "../style/ContainerGrid";

const ListProjetos = [
  {
    url: "https://del-lins.github.io/DM-Barbearia/",
    img: barbeariaImage,
    alt: "Capa barbearia",
    h3: "Projeto 1",
    description: "Projeto feito com HTML, CSS, SSAS e JavaScript",
  },

  {
    url: "https://del-lins.github.io/React-Tela-Login/",
    img: telaLoginReactImage,
    alt: "Capa Tela de login",
    h3: "Projeto 2",
    description: "Projeto feito com React JavaScript",
  },

  {
    url: "https://del-lins.github.io/DM-Burger/",
    img: burgueriaImage,
    alt: "Capa burgueria",
    h3: "Projeto 3",
    description: "Projeto feito com HTML, CSS e JavaScript",
  },

  {
    url: "https://del-lins.github.io/Venom/",
    img: venomImage,
    alt: "Capa Venom",
    h3: "Projeto 4",
    description: "Projeto feito com HTML, CSS e JavaScript",
  },

  {
    url: "https://del-lins.github.io/GTA/",
    img: gtaImage,
    alt: "Capa GTA",
    h3: "Projeto 5",
    description: "Projeto feito com HTML, CSS e JavaScript",
  },

  {
    url: "https://del-lins.github.io/One-Pierce/",
    img: onePierceImage,
    alt: "Capa One pierce",
    h3: "Projeto 6",
    description: "Projeto feito com HTML, CSS e JavaScript",
  },

  {
    url: "https://del-lins.github.io/Web-Gamers/",
    img: rakutoImage,
    alt: "Capa Rakuto",
    h3: "Projeto 7",
    description: "Projeto feito com HTML, CSS e JavaScript",
  },

  {
    url: "https://del-lins.github.io/Web-filmes/",
    img: filmesImage,
    alt: "Capa Filmes",
    h3: "Projeto 8",
    description: "Projeto feito com HTML, CSS e JavaScript",
  },
];

const ListaProjetos = ({ url, img, alt, h3, description }) => {
  return (
    <>
      <Container className="container-projects">
        <div className="project ativo">
          <a href={url} rel="noreferrer" target="_blank">
            <img src={img} alt={alt} />
            <h3>{h3}</h3>
            <div className="description">
              <p>{description}</p>
            </div>
          </a>
        </div>
      </Container>
    </>
  );
};

ListaProjetos.propTypes = {
  url: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  h3: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default ListaProjetos;
export { ListProjetos };
