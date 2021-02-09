/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Image from "gatsby-image";
import styled from "styled-components";
import { rhythm } from "../utils/typography";

const Bio = ({ heading = "", subheading = "" }) => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/logo1.png/" }) {
        childImageSharp {
          fixed(width: 50, height: 50) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          author {
            name
            summary
          }
          social {
            twitter
            email
          }
        }
      }
    }
  `);
  const BioContainer = styled.div`
    display: flex;
    margin-bottom: ${rhythm(2.5)};
    justify-content: center;
    align-items: center;
    @media (max-width: 768px) {
      margin-bottom: ${rhythm(1)};
    }
  `;
  const StyledImage = styled(Image)`
    margin: 0 ${rhythm(2)};
    margin-left: 0;
    min-width: 50;
    border-radius: 100%;
    flex-shrink: 0;
    @media (max-width: 768px) {
      display: none !important;
      margin-bottom: ${rhythm(1)};
    }
  `;
  const BioText = styled.div`
    justify-content: center;
  `;

  const { author } = data.site.siteMetadata;
  const { email } = data.site.siteMetadata.social;
  let bioHeader;
  let bioSubHeader;
  heading !== "" ? (bioHeader = <h2>{heading}</h2>) : (bioHeader = null);
  subheading !== ""
    ? (bioSubHeader = <h3>{subheading}</h3>)
    : (bioSubHeader = null);

  return (
    <BioContainer>
      <StyledImage
        fixed={data.avatar.childImageSharp.fixed}
        alt={author}
        style={{}}
      />
      <BioText>
        {bioHeader}
        {bioSubHeader}
        <p>
          Random text
        </p>
        <p>
          More text
        </p>
        <p>
          Any questions? Feel free to reach out at{" "}
          <a className="green" href={`mailto:${email}`}>
            email
          </a>
        </p>
      </BioText>
    </BioContainer>
  );
};

export default Bio;
