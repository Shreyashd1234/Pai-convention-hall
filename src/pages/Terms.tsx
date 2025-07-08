import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Terms = () => (
  <div className="flex flex-col min-h-screen">
    <Navbar />
    <main className="flex-1 mt-24">
      <div className="container mx-auto py-16 px-4 md:px-8 lg:px-16">
        <h1 className="text-3xl md:text-4xl font-serif mb-6">Terms & Conditions</h1>
        <p className="mb-4">These Terms & Conditions govern your use of our website and services. By accessing our site, you agree to comply with these terms.</p>
        <h2 className="text-2xl font-semibold mt-8 mb-2">Use of Website</h2>
        <p className="mb-4">You agree to use this website for lawful purposes only and not to engage in any activity that may harm the site or its users.</p>
        <h2 className="text-2xl font-semibold mt-8 mb-2">Pai Convention Hall Terms</h2>
        <p className="mb-4">All bookings and services at Pai Convention Hall are subject to availability and our internal policies. Please contact us for detailed terms regarding event bookings, cancellations, and payments.</p>
        <h2 className="text-2xl font-semibold mt-8 mb-2">Changes to Terms</h2>
        <p className="mb-4">We reserve the right to update these terms at any time. Continued use of the website constitutes acceptance of the revised terms.</p>
        <h2 className="text-2xl font-semibold mt-8 mb-2">Contact</h2>
        <p>If you have any questions about these Terms & Conditions, please contact us at paiconvention@gmail.com.</p>
      </div>
    </main>
    <Footer />
  </div>
);

export default Terms; 