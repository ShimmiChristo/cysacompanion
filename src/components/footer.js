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

const Footer = styled.footer`
  position: fixed;
  background: ${props => props.color.black};
  bottom: 0;
  left: 0;
  margin-bottom: 20px;
  width: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  z-index: 2;

  @media (max-width: 768px) {
    position: fixed;
    width: 100%;
    height: 30px;
    bottom: 0;
    left: 0;
    display: inline-flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 0;
  }
`;
const Navigation = styled.nav`
  padding: 5px;
  flex-direction: column;
  > a {
    font-size: 1rem
    color: #fff;
    margin: 0 0 2em;
    display: block;
    text-decorationcolor: #fff;
    text-decoration: none;
    box-shadow: none;
    text-align: center;
  }
  @media (max-width: 768px) {
    flex-direction: row;
  }
`;

const Social = styled(Navigation)`
    left: 0;
    flex-direction: row;
    display: inline-flex;
    text-align: center;
    width: 100%;
    text-align: center;
    justify-content: space-around;
    > a {
    margin: 0;
    }
`;


export default () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          siteTitle
          social {
            twitter
            email
            linkedin
            github
          }
        }
      }
      twitter: file(relativePath: { eq: "sm_twitter.png" }) {
        childImageSharp {
          fixed(width: 28, height: 28) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      linkedin: file(relativePath: { eq: "sm_linkedin.png" }) {
        childImageSharp {
          fixed(width: 28, height: 28) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      gmail: file(relativePath: { eq: "sm_gmail.png" }) {
        childImageSharp {
          fixed(width: 28, height: 28) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      github: file(relativePath: { eq: "sm_github.png" }) {
        childImageSharp {
          fixed(width: 28, height: 28) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);

  const { social } = data.site.siteMetadata;

  return (
    <Footer color={color}>
      <Social>
        <a href={`https://twitter.com/${social.twitter}`} target="_blank" rel="noopener noreferrer">
          <Image fixed={data.twitter.childImageSharp.fixed} alt="twitter" />
        </a>
        <Link to="/about">
          <Image fixed={data.gmail.childImageSharp.fixed} alt="gmail" />
        </Link>
        <a href={`https://linkedin.com/${social.linkedin}`} target="_blank" rel="noopener noreferrer">
          <Image fixed={data.linkedin.childImageSharp.fixed} alt="linked in" />
        </a>
        <a href={`https://github.com/${social.github}`} target="_blank" rel="noopener noreferrer">
          <Image fixed={data.github.childImageSharp.fixed} alt="github" />
        </a>
      </Social>
    </Footer>
  );
};