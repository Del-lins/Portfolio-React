import styled from "styled-components";

export const HeaderStyle = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 30px 15px;

  @media (max-width: 600px) {
    padding: 40px;
  }

  h1 {
    text-align: center;
    transition: 0.2s;
    cursor: pointer;
    position: relative;

    &:hover {
      color: #a4a2c4;
    }

    &::after {
      content: "";
      position: absolute;
      left: 0;
      bottom: -0.1px;
      width: 60%;
      height: 1px;
      background: #a4a2c4;
      transform: scaleX(0);
      transform-origin: right;
      transition: transform 0.4s;
    }

    &:hover::after {
      transform: scaleX(1);
      transform-origin: left;
      transition: transform 0.4s;
    }
  }

  nav li a {
    font-size: 20px;
    text-transform: capitalize;
    padding: 10px 20px;
    transition: 0.3s;
  }

  nav li a:hover {
    animation: gradient-animation 5s ease infinite;
    background: linear-gradient(to right, #2e40a7, #0a234b, #3359f0);
    background-size: 180% 180%;
    border-radius: 50px;
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
