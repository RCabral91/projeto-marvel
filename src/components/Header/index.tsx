import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaBars } from "react-icons/fa";
import { GiBrute } from "react-icons/gi";
import { GrGroup, GrSchedule, GrHistory } from "react-icons/gr";
import { ImBook, ImFilm } from "react-icons/im";
import logoImg from '../../assets/logo.png';
import { Container, Content, Menu } from "./styles";

export const Header:React.FC = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
      <Menu className={showMenu ? 'show' : ''}>
        <ul>
          <li>
            <Link to="/">
              <FaHome /> Home
            </Link>
          </li>
          <li>
            <Link to="/characters">
              <GiBrute /> Characters
            </Link>
          </li>
          <li>
            <Link to="/comics">
              <ImBook /> Comics
            </Link>
          </li>
          <li>
            <Link to="/creators">
              <GrGroup /> Creators
            </Link>
          </li>
          <li>
            <Link to="/events">
              <GrSchedule /> Events
            </Link>
          </li>
          <li>
            <Link to="/series">
              <ImFilm /> Series
            </Link>
          </li>
          <li>
            <Link to="/stories">
              <GrHistory /> Stories
            </Link>
          </li>
        </ul>
      </Menu>
     
      <Container>
        <Content>
          <button type="button" onClick={() => setShowMenu(!showMenu)}>
            <FaBars className='fs-4' />
          </button>
          <img src={logoImg} alt="marvel"></img>
        </Content>
      </Container>
    </>
  );
}