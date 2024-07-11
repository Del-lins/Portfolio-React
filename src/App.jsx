import Header from "./components/Header";
import Section from "./components/SectionNetwork";
import SectionTecnologias from "./components/SectionTecnologias";
import SectionTitle from "./components/SectionProjet";
import ListProjetos from "./components/data";
import ListaProjetos from "./components/ListaProjetos";
import { Container } from "./style/ContainerGrid";
import { Button } from "./style/Button";
import { useState } from "react";

function App() {
  const [btnMais, setBtnMais] = useState(false);

  const handleClick = () => {
    setBtnMais(!btnMais);
  };

  const projetosExibidos = btnMais ? ListProjetos : ListProjetos.slice(0, 4);

  return (
    <>
      <Header />
      <Section />
      <br />
      <br />
      <SectionTecnologias />
      <br />
      <SectionTitle title="Meus Projetos" />
      <Container>
        {projetosExibidos.map(function (item) {
          return (
            <ListaProjetos
              key={item.url}
              url={item.url}
              img={item.img}
              alt={item.alt}
              h3={item.h3}
              description={item.description}
            />
          );
        })}
      </Container>
      <Button className="btn-mais-projetos" onClick={handleClick}>
        {btnMais ? "Mostrar Menos" : "Mostrar Mais"}
      </Button>
    </>
  );
}

export default App;
