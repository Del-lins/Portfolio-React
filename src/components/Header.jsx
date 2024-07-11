import { HeaderStyle } from "../style/HeaderStyle";
const Header = () => {
  return (
    <HeaderStyle>
      <h1>DMs</h1>
      <nav>
        <ul>
          <li>
            <a href="#projects">Meus Projetos</a>
          </li>
        </ul>
      </nav>
    </HeaderStyle>
  );
};

export default Header;
