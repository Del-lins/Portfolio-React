import { Container } from "../style/ContainerGrid";
const ListaProjetos = (props) => {
  return (
    <>
      <Container className="container-projects">
        <div className="project ativo">
          <a href={props.url} rel="noreferrer" target="_blank">
            <img src={props.img} alt={props.alt} />
            <ul className="list">{props.children}</ul>
            <h3>{props.h3}</h3>
            <div className="description">
              <p>{props.description}</p>
            </div>
          </a>
        </div>
      </Container>
    </>
  );
};

export default ListaProjetos;
