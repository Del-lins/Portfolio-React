import styled from "styled-components";

export const Button = styled.button`
  background: none;
  border: 1px solid #fff;
  border-radius: 15px;
  color: #fff;
  width: 180px;
  padding: 20px;
  font-size: 18px;
  font-weight: 600;
  margin: 40px auto;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  &:hover {
    background-color: #1f12d6;
    transition: 0.3s;
  }
`;
