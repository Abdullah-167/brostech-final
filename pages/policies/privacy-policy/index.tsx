import Container from "@/Components/Container";
import React from "react";

const PrivacyPolicy = () => {
  return (
    <Container>
      <div className=" mx-auto p-6">
        <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
        <p className="mb-4">Last Updated: 26 February 2025</p>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">1. Introduction</h2>
          <p>
            Welcome to Broshtech. Your privacy is important to us. This Privacy
            Policy explains how we collect, use, disclose, and safeguard your
            information when you visit our website.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">
            2. Information We Collect
          </h2>
          <p>We may collect the following types of information:</p>
          <ul className="list-disc ml-6">
            <li>Personal Information (e.g., name, email, phone number)</li>
            <li>Technical Data (e.g., IP address, browser type)</li>
            <li>Usage Data (e.g., pages visited, time spent on the site)</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">
            3. How We Use Your Information
          </h2>
          <p>We use the information collected to:</p>
          <ul className="list-disc ml-6">
            <li>Improve our website and services</li>
            <li>Respond to inquiries and provide support</li>
            <li>Send promotional and marketing communications</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">
            4. Sharing Your Information
          </h2>
          <p>
            We do not sell or share your personal data with third parties
            except:
          </p>
          <ul className="list-disc ml-6">
            <li>When required by law</li>
            <li>To service providers assisting in operations</li>
            <li>In case of business transfers or mergers</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">5. Security</h2>
          <p>
            We implement security measures to protect your personal data but
            cannot guarantee absolute security due to online threats.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">6. Your Rights</h2>
          <p>
            You have the right to access, update, or delete your personal data.
            If you have any concerns, contact us at info@broshtech.com.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">
            7. Changes to This Policy
          </h2>
          <p>
            We may update this Privacy Policy periodically. Changes will be
            posted on this page with the updated date.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">8. Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact
            us at info@broshtech.com.
          </p>
        </section>
      </div>
    </Container>
  );
};

export default PrivacyPolicy;
