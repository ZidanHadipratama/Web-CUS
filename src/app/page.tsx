import LandingPage from "@/components/pages/landingPage/landing";
import Layout from "@/layouts/Layouts";
import React from "react";

const page = () => {
  return (
    <Layout withCTA withFooter withNavbar>
      <LandingPage />
    </Layout>
  );
};

export default page;
