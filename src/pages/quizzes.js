import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Quiz1 from "../components/quiz1";

const QuizPage = ({ location }) => {
  return (
    <Layout location={location} title="Quizzes">
      <SEO title="Quizzes" />
      <main>
        <p>
        We enjoy tinkering with website design, hardware, and any cutting edge technologies.
        </p>
      </main>
      <p>
        This is a list of our quizzes. 
      </p>
      <Quiz1 />
    </Layout>
  )
};
export default QuizPage;