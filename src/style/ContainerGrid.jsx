import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  margin-bottom: 10px;
  justify-content: center;

  .project {
    max-width: 260px;
    max-height: 500px;
    position: relative;
    display: none;
  }

  .project.ativo {
    display: block;
  }

  .project img {
    height: 100%;
  }

  .project h3 {
    background-color: #040203;
    width: 100%;
    padding-left: 20px;
    padding-bottom: 10px;
    padding-top: 10px;
    position: absolute;
    bottom: 0;
  }

  .project .description {
    background-color: #040203;
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    font-weight: 600;
    opacity: 0;
    transition: 0.3s;
    padding: 20px;
  }

  .container-projects .project:hover .description {
    opacity: 0.7;
    background-color: #000;
  }
`;
