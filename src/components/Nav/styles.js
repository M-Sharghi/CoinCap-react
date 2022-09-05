import styled from "styled-components";

let NavLinks = styled.div`
  width: 19%;

  & a {
    padding: 32px;
    text-align: center;

  }

  & a:hover {
    background-color: rgb(0, 0, 0, 0.04);

  }
`;

let NavLogo = styled.a`
  margin: auto;
`;

let NavActions = styled.div`
  width: 25%;
`;

export { NavLinks, NavLogo, NavActions };
