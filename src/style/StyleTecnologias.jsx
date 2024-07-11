import styled from "styled-components";

export const DivTecnologiasGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  justify-content: center;

  .section-container {
    padding-bottom: 2rem;
  }

  .tecnologies-card {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    padding: 1rem;
    border: 1px solid #333;
    width: 45%;
    border-radius: 5px;
    transition: 0.3s;

    &:hover {
      background: #060f63;
    }
  }

  @media (max-width: 600px) {
    .tecnologies-card {
      flex-wrap: wrap;
      text-align: center;
      width: 60%;
    }
  }

  h3 {
    color: #fff;
    margin-bottom: 1px;
  }

  svg {
    font-size: 6rem;
  }

  #html svg {
    fill: #e44d26;
  }

  #css svg {
    fill: #1572b6;
  }

  #js svg {
    fill: #f0db4f;
  }

  #node svg {
    fill: #83cd29;
  }

  #react svg {
    fill: #61dafb;
  }

  #python svg {
    fill: #d7e210;
  }
`;
