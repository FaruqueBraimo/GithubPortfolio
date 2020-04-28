import React from "react";
import styled from "styled-components";

const HeaderWrapper = styled.div`
  background-color: #282c34;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;
const Logo = styled.img`
padding-top : 10px;
height: 64px;
  pointer-events: none;
`;

const Header = (props) => (
    <HeaderWrapper>
            <Logo src={props.logo}  alt="logo" />
            <p>My GitHub Portifolio</p>
    </HeaderWrapper>

);
export default Header;
