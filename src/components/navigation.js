import React from "react";
import { useStaticQuery, Link, graphql } from "gatsby";
import styled from "styled-components";
import Image from "gatsby-image";


const color = {
  black: "#140033",
  white: "#f8f8f2",
  teal: "#1affd1",
  orange: "#ffb86c",
  pink: "#ff66ff",
  purple: "#bd93f9",
};

const Container = styled.div`
  width: 200px;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  display: relative;
  text-align: center;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: ${props => props.color.black};
  z-index: 1;
  * {
    text-decoration: none;
  }
  a {
    font-style: normal;
  }
  a:before {
    display: none;
  }
  @media (max-width: 768px) {
    max-width: 100%;
    width: 100%;
    height: 65px;
    flex-direction: row;
    display: inline-flex;
    justify-content: space-around;
  }
`;
const Header = styled.h1`
  font-size: 2rem;
  color: ${props => props.color.white};
  text-transform: uppercase;
  display: inline-flex;
  margin-top: 1rem;
  @media (max-width: 768px) {
    display: none;
  }
`;
const Logo = styled(Image)`
  display: none !important;
  @media (max-width: 768px) {
    max-height: 50px;
    max-width: 60px;
    min-width: 60px;
    min-height: 50px;
    border-radius: 50%;
    display: inline-flex !important;
    align-self: left;
  }
`;
const LogoFull = styled(Image)`
    max-height: 100px;
    max-width: 120px;
    min-width: 120px;
    min-height: 100px;
    border-radius: 50%;
    display: inline-flex !important;
    align-self: left;
    margin-top: 35px;
    @media (max-width: 768px) {
      max-height: 50px;
      max-width: 60px;
      min-width: 60px;
      min-height: 50px;
      border-radius: 50%;
      display: inline-flex !important;
      align-self: left;
      margin-top: 0px;
    }
`;
const Navigation = styled.nav`
  padding: 1vw;
  flex-direction: column;
  > a {
    font-size: 1rem;
    color: #fff;
    margin: 0 10px 15px;
    display: block;
    box-shadow: none;
    text-align: center;
  }
  @media (max-width: 768px) {
    display: inline-flex;
    flex-direction: row;
    max-height: 100px;
    > a {
      margin: 0 10px 0;
    }
  }
`;
const TealA = styled.span`
  color: ${props => props.color.teal};
`;
const PurpleA = styled.span`
  color: ${props => props.color.purple};
`;
const PinkA = styled.span`
  color: ${props => props.color.pink};
`;

export default () => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      site {
        siteMetadata {
          linkOne
          linkTwo
          linkThree
          menuLinks {
            link
            name
          }
        }
      }
      logo: file(relativePath: { eq: "logo1.png" }) {
        childImageSharp {
          fixed(width: 100, height: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      logoFull: file(relativePath: { eq: "logo1.png" }) {
        childImageSharp {
          fixed(width: 200, height: 200) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);

  const { linkOne, linkTwo, linkThree } = data.site.siteMetadata;

  return (
    <Container color={color}>
      <Header color={color}>
        <Link stlye="width: 100%;" to="/">
        <Logo fixed={data.logo.childImageSharp.fixed} alt="" />
        </Link>
      </Header>
      <Link stlye="width: 100%;" to="/">
        <LogoFull fixed={data.logoFull.childImageSharp.fixed} alt="" />
      </Link>
      <Navigation color={color}>
        <Link stlye="width: 100%;" to="/about" activeClassName="active">
          <TealA color={color}>{linkOne}</TealA>
        </Link>
        <Link to="/quizzes" activeClassName="active">
          <PurpleA color={color}>{linkTwo}</PurpleA>
        </Link>
        <Link to="/blog" activeClassName="active">
          <PinkA color={color}>{linkThree}</PinkA>
        </Link>
      </Navigation>
    </Container>
  );
};
