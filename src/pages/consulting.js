import React from "react";

import Layout from "@narative/gatsby-theme-novela/src/components/Layout";
import Section from "@narative/gatsby-theme-novela/src/components/Section";
import SEO from "@narative/gatsby-theme-novela/src/components/SEO";
import Headings from "@narative/gatsby-theme-novela/src/components/Headings";
import Paragraph from "@narative/gatsby-theme-novela/src/components/Paragraph";
import Lists from "@narative/gatsby-theme-novela/src/components/Lists";

function ConsultingPage() {
  return (
    <Layout>
      <SEO
        title="Jonathan Schellack available for consulting"
        description="Find out about how you can get Jonathan Schellack to consult for your business"
      />
      <Section>
        <div style={{ marginTop: "100px" }}>
          <Headings.h1>Consulting from Jonathan Schellack</Headings.h1>
        </div>
        <div style={{ marginTop: "100px" }}>
          <Paragraph>
            I am available for consulting work. My experience includes:
          </Paragraph>
          <Lists.ul>
            <li>Startup founder</li>
            <li>Technology strategy at large, publicly traded enterprises</li>
            <li>Application and integration development leader</li>
            <li>IT operations leader</li>
            <li>
              Built and operated technology at scale in healthcare, finance, and
              education
            </li>
          </Lists.ul>
          <Paragraph>
            My email is my first name at schellack.net. You can also connect
            with me on Twitter: @schellack Or find me on Facebook and LinkedIn.
          </Paragraph>
        </div>
      </Section>
    </Layout>
  );
}

export default ConsultingPage;
