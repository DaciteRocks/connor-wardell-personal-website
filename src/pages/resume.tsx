import React from 'react';

import Layout from 'components/Layout';
import SEO from 'components/SEO';
import Experience from 'components/Experience';
import Education from 'components/Education';
import Hobbies from 'components/Hobbies';
import Projects from 'components/Projects';
import Skills from 'components/Skills';

const ResumePage: React.FC = () => (
  <Layout>
    <SEO title="Resume" />
    <Experience />
    <hr />
    <Education />
    <hr />
    <Projects></Projects>
    <hr/>
    <Skills />
  </Layout>
);

export default ResumePage;
