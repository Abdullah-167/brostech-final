import Container from "@/Components/Container";
import Head from "next/head";
import React from "react";

const TermsAndConditions = () => {
  return (
    <Container>
       <Head>
        <title>Terms & Conditions</title>
      </Head>
      <div className="container mx-auto p-6">
        <h1 className="text-3xl font-bold mb-4">Terms and Conditions</h1>
        <p className="mb-4">Last Updated: 26 Fabruary 2025</p>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">1. Introduction</h2>
          <p>
            Welcome to Broshtech. By accessing and using our website, you agree
            to comply with and be bound by these Terms and Conditions. If you do
            not agree, please refrain from using our services.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">2. Use of Website</h2>
          <p>
            You agree to use our website only for lawful purposes and in a way
            that does not infringe on others’ rights.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">
            3. Intellectual Property
          </h2>
          <p>
            All content on this site, including text, images, and graphics, is
            the property of Broshtech and is protected by intellectual property
            laws. Unauthorized use is prohibited.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">
            4. Limitation of Liability
          </h2>
          <p>
            We are not liable for any indirect or consequential loss arising out
            of the use of our website.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">5. Termination</h2>
          <p>
            We reserve the right to terminate or restrict access to our website
            for violations of these Terms and Conditions.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">6. Governing Law</h2>
          <p>
            These Terms and Conditions are governed by the laws of [Insert
            Jurisdiction].
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">7. Contact Us</h2>
          <p>
            If you have any questions regarding these Terms and Conditions,
            please contact us at info@broshtech.com.
          </p>
        </section>
      </div>
    </Container>
  );
};

export default TermsAndConditions;
