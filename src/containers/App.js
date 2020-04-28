import React, { Component } from "react";
import logo from "./download.png";
import "../components/App/Header";
import Header from "../components/App/Header";
import Profile from "./Profile/Profile";
import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
 body {
 margin: 0;
 padding: 0;
 font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
Oxygen",
 "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
 sans-serif;
 -webkit-font-smoothing: antialiased;
 -moz-osx-font-smoothing: grayscale;
 }
 `;

const AppWrapper = styled.div`
  text-align: center;
`;

class App extends Component {
  render() {
    return (
      <>
        <GlobalStyle />
        <AppWrapper>
          <Header logo={logo} />
          <Profile />
        </AppWrapper>
      </>
    );
  }
}
export default App;
