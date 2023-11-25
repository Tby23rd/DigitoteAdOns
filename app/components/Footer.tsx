import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="w-full mt-auto p-6 bg-primary-blue text-white text-center shadow-inner">
      <div className="flex justify-center space-x-6 mb-4">
        <a
          href="https://www.linkedin.com/company/digitote-inc/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-primary-pink"
        >
          LinkedIn
        </a>
        <a
          href="https://www.instagram.com/digitote/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-primary-pink"
        >
          Instagram
        </a>
        <a href="/privacy-policy" className="hover:text-primary-pink">
          Privacy Policy
        </a>
        <a href="/terms-of-service" className="hover:text-primary-pink">
          Terms of Service
        </a>
      </div>
      <hr></hr>
      <i>
        In the spirit of reconciliation, we acknowledge that we live, work and play on the traditional territories of the Blackfoot Confederacy (Siksika, Kainai, Piikani), the Tsuut’ina, the Iyarhe Nakoda Nations, the Otipemisiwak Métis Government of the Métis Nation within Alberta District 6, and all people who make their homes in the Treaty 7 region of Southern Alberta.
        </i>
        <hr></hr>
      <p>&copy; {new Date().getFullYear()} Digitote. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
