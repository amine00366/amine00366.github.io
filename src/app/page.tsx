import {
  About,
  Contact,
  Experience,
  Hero,
  Layout,
  Projects,
  Skills,
  Scholarships
} from '@/containers';

import type { NextPage } from 'next';

/**
 * TODO: Create separate page for all the projects with filters (vercel | netlify | github api for automation)
 * TODO: Switch to next13 app dir feature, when lottie files start working in app dir
 * TODO: Try test cases
 */

const Home: NextPage = () => {
  return (
    <>
      <meta name="google-site-verification" content="NEDmAy1kKSil4bqazgW-WssV1GsyP6T_-TtbFejvHQs" />
      <meta
        name="description"
        content="Mohamed Amine Sidhom . DevOps & Cloud Engineer | Software Engineering Student"
      />
      <Layout>
        <Hero />
        <Scholarships />
        <About />
        <Skills />
        <Experience />
        <Projects />
        
        <Contact />  
      </Layout>
    </>
  );
};

export default Home;
