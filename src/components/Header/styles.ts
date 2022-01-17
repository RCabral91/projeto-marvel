import styled from "styled-components";

export const Menu = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 300px;
  height: 100vh;
  background: #E9967A;

  li {
    margin-top: 35px;
    list-style-type: none;
    align-items: center;
  }
  
  a {
    text-decoration: none;
    font-size: 20px;
    color: black;
  }

  transform: translateX(-300px);
  -webkit-transition: transform 0.5s 0s ease;
  -moz-transition: transform 0.5s 0s ease;
  -o-transition: transform 0.5s 0s ease;
  transition: transform 0.5s 0s ease;

  &.show {
    transform: translateX(0);
  }
`;

export const Container = styled.header`
  background: var(--red);
`;

export const Content = styled.div`
  max-width: 1120px;
  margin: 0 auto;

  padding: 1rem 1rem 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  img {
    width: 130px;
  }

  button {
    font-size: 1rem;
    color: var(--background);
    background: var(--red-light);
    border: 0;
    padding: 0 2rem;
    border-radius: 0.25rem;
    height: 3rem;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;