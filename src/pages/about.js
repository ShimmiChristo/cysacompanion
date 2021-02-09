import React from "react";
import styled from "styled-components";
import { rhythm } from "../utils/typography";
import Layout from "../components/layout";
import SEO from "../components/seo";

//* building a functional component
const AboutPage = ({ location }) => {
  const purple = `#3b0a38`;
  const SkillsContainer = styled.section`
    display: flex;
    justify-content: space-evenly;
    margin-bottom: ${rhythm(1)};
    @media (max-width: 767px) {
      flex-direction: column;
    }
  `;
  const Column = styled.div`
    @media (max-width: 767px) {
      &:first-child {
        border: none;
        padding-top: 0;
      }
      width: 100%;
      border-top: 2px solid ${purple};
      padding: ${rhythm(0.5)};
    }
  `;
  const List = styled.ul`
    margin: 0;
  `;
  const Item = styled.li`
    padding-left: 0;
    list-style: none;
    margin-bottom: ${rhythm(0.2)};
  `;
  const AboutContainer = styled.section`
    margin: ${rhythm(1)};
  `;
  return (
    <Layout location={location} title="About Us, Skills, &amp; More">
      <SEO title="About Page" />
      <main>
        <h2>Skills</h2>
        <SkillsContainer className="skills-container">
          <Column>
            <List>
              <Item>JavaScript</Item>
              <Item>GatsbyJS (React)</Item>
              <Item>CSS</Item>
              <Item>HTML</Item>
              <Item>WordPress</Item>
            </List>
          </Column>
          <Column>
            <List>
              <Item>PC design</Item>
              <Item>Networking</Item>
              <Item>Digital Forensics</Item>
              <Item>Software Security</Item>
              <Item>Network Security</Item>
              <Item>Mac, PC, Linux</Item>
            </List>
          </Column>
          <Column>
            <List>
              <Item>Git</Item>
              <Item>Discord</Item>
              <Item>Facebook</Item>
              <Item>Twitter</Item>
              <Item>YouTube</Item>
            </List>
          </Column>
        </SkillsContainer>
        <h2>More About Me</h2>
        <AboutContainer>
          <p>
            Look out for any new content at {" "}
            <a
              className="purple"
              target="_blank"
              rel="noopener noreferrer"
              href="https://youtube.com/user/shimdoggy"
            >
              YouTube
            </a>{" "}
            and I am active on{" "}
            <a
              className="purple"
              target="_blank"
              rel="noopener noreferrer"
              href="https://twitter.com/shimmiChristo"
            >
              Twitter
            </a>
            .
          </p>
          <p>
            We are an eager group of students who wish to take advantage of
            any opportunities to learn new technologies.  
          </p>
          <p>
            Our mission is to help organizations secure there networks through
            teamwork and hard work.  
          </p>
        </AboutContainer>
      </main>
    </Layout>
  );
};
export default AboutPage;