import {
  DiHtml5,
  DiCss3,
  DiJsBadge,
  DiNodejsSmall,
  DiReact,
  DiPython,
} from "react-icons/di";

import { DivTecnologiasGrid } from "../style/StyleTecnologias";

const technologies = [
  {
    id: "html",
    name: "HTML5",
    icon: <DiHtml5 />,
    description: "HTML5 é uma Linguagem de marcação.",
  },
  {
    id: "css",
    name: "CSS3",
    icon: <DiCss3 />,
    description:
      "Cascading Style Sheets mais conhecido como CSS3, uma linguagem para estilização de documentos web.",
  },
  {
    id: "js",
    name: "JavaScript",
    icon: <DiJsBadge />,
    description:
      "JavaScript é uma linguagem de programação que permite a criação de conteúdo dinâmico na web.",
  },
  {
    id: "node",
    name: "Node.js",
    icon: <DiNodejsSmall />,
    description:
      "Node.js é um ambiente de execução para JavaScript construído com o motor V8 do Chrome.",
  },
  {
    id: "react",
    name: "React",
    icon: <DiReact />,
    description:
      "React é uma biblioteca JavaScript para construção de interfaces de usuário.",
  },
  {
    id: "python",
    name: "Python",
    icon: <DiPython />,
    description:
      "Python é uma linguagem de programação conhecida por sua simplicidade e legibilidade.",
  },
];
const SectionTecnologias = () => {
  return (
    <section className="section-container">
      <h2>Tecnologias</h2>
      <br />
      <DivTecnologiasGrid className="GridTecRes">
        {technologies.map((tech) => (
          <div className="tecnologies-card" id={tech.id} key={tech.id}>
            {tech.icon}
            <div className="tecnologi-info">
              <h3>{tech.name}</h3>
              <p>{tech.description}</p>
            </div>
          </div>
        ))}
      </DivTecnologiasGrid>
    </section>
  );
};

export default SectionTecnologias;
