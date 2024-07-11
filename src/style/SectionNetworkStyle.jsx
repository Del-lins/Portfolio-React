import styled from "styled-components";

export const HomeSection = styled.section`
  display: flex;
  min-height: calc(100vh - 300px);
  align-items: center;
  gap: 50px;
  justify-content: space-between;

  @media (max-width: 600px) {
    flex-direction: column;
  }

  .informations {
    display: flex;
    flex-direction: column;
    gap: 10px;
    letter-spacing: 2px;
    padding: 0 15px;
    max-width: 61%;

    @media (max-width: 600px) {
      max-width: 100%;
      text-align: center;
      align-items: center;
    }

    h1 {
      font-size: 45px;
      margin-bottom: 20px;
    }

    @media (max-width: 600px) {
      h1 {
        font-size: 30px;
      }
    }

    p {
      font-size: 20px;
      margin-bottom: 10px;
      max-width: 75%;
      line-height: 2rem;
    }

    @media (max-width: 600px) {
      p {
        text-align: left;
      }
    }

    #social-network {
      display: flex;
      gap: 20px;
    }

    .icon {
      border: 1px solid #fff;
      border-radius: 50%;
      width: 50px;
      height: 50px;
      padding: 10px;
      text-align: center;
      font-size: 26px;
      cursor: pointer;
      transition: transform 0.4s, fill 0.4s, border-color 0.4s;
    }

    .btn:hover .icon {
      transform: scale(1.1);
      fill: #174cfb;
      border-color: #174cfb;
    }
  }

  .container-foto .foto {
    max-width: 450px;
    border-radius: 49%;
  }

  .container-foto img {
    width: 100%;
    height: 400px;
    border-radius: 50%;
  }

  .foto.sombra-interna {
    background: linear-gradient(to right, #2e40a7, #0a234b, #3359f0);
    background-size: 180% 180%;
    animation: gradient-animation 5s ease infinite;
  }

  @keyframes gradient-animation {
    0% {
      background-position: 0% 50%;
    }

    50% {
      background-position: 100% 50%;
    }

    100% {
      background-position: 0% 50%;
    }
  }
`;
