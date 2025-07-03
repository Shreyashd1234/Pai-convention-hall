import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Privacy = () => (
  <div className="flex flex-col min-h-screen">
    <Navbar />
    <main className="flex-1 mt-24">
      <div className="container mx-auto py-16 px-4 md:px-8 lg:px-16">
        <h1 className="text-3xl md:text-4xl font-serif mb-6">Privacy Policy</h1>
        <p className="mb-4">This Privacy Policy explains how we collect, use, and protect your personal information when you use our website.</p>
        <h2 className="text-2xl font-semibold mt-8 mb-2">Information We Collect</h2>
        <p className="mb-4">We may collect information such as your name, email, phone number, and event details when you fill out forms on our site.</p>
        <h2 className="text-2xl font-semibold mt-8 mb-2">How We Use Your Information</h2>
        <p className="mb-4">Your information is used solely for the purpose of responding to your inquiries and providing our services. We do not sell or share your data with third parties.</p>
        <h2 className="text-2xl font-semibold mt-8 mb-2">Pai Convention Hall Privacy Practices</h2>
        <p className="mb-4">At Pai Convention Hall, we are committed to safeguarding your privacy. All information collected is handled with the utmost care and confidentiality. If you have any questions about our privacy practices, please contact us directly.</p>
        <h2 className="text-2xl font-semibold mt-8 mb-2">Contact</h2>
        <p>If you have any questions about this Privacy Policy, please contact us at bookings@paiconventionhall.com.</p>
      </div>
    </main>
    <Footer />
  </div>
);

export default Privacy; 