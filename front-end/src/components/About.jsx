import React from "react";

const About = () => {
  return (
    <div className="bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 px-6 py-12 md:px-20 md:py-16 min-h-screen">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-8 border-b pb-2 border-gray-300 dark:border-gray-600">
          About the Project
        </h1>

        <div className="space-y-6 text-lg leading-relaxed">
          <p className="mb-6 text-justify">
        The Department of Science and Technology — Philippine Council for Health Research and
        Development (DOST-PCHRD), through the Grants-in-Aid (GIA) Program, has endorsed National
        University’s pioneering research initiative aimed at advancing drug safety and public health
        surveillance in the Philippines.
      </p>

      <p className="mb-6 text-justify">
        In an age where multilingual inclusivity and AI are shaping the future of healthcare, the{' '}
        <strong>GamotPH Toolkit: General Access Multilingual Online Tool for Public Health Drug Reporting</strong>{' '}
        stands as a groundbreaking digital health innovation. The project is designed to
        revolutionize adverse drug effect (ADE) reporting through a culturally inclusive and
        AI-driven multilingual platform. It spans 12 months, from October 2023 to September 2024,
        and aligns with the nation’s priorities in strengthening health information systems under
        the United Nations Sustainable Development Goal 3: Good Health and Well-being.
      </p>

      <p className="mb-6 text-justify">
        Led by <strong>Dr. Mideth B. Abisado</strong> of National University Philippines, the
        GamotPH project seeks to fill a critical gap in the nation’s pharmacovigilance efforts. At
        the heart of the initiative is the development of a comprehensive, AI-enabled system
        capable of understanding and processing ADE reports submitted in local languages such as{' '}
        <strong>Filipino, Ilokano, Cebuano, and Ivatan</strong>. These reports are collected via a
        user-friendly dashboard and mobile application, enabling real-time monitoring, automated
        classification, and trend analysis of drug-related effects across the country.
      </p>

      <p className="mb-6 text-justify">
        The toolkit includes the creation of a <strong>multilingual dictionary of drug-related terms</strong>,
        validated by linguistic and healthcare experts. This component will enhance the precision of
        natural language processing (NLP) algorithms that identify and analyze patterns in
        user-submitted ADE cases. Ultimately, this innovation aims to empower healthcare
        professionals, patients, and policymakers with accessible and actionable data that support
        safer medication use and better regulatory decisions.
      </p>

      <p className="mb-6 text-justify">
        GamotPH is positioned to make a meaningful impact on both social and healthcare systems in
        the Philippines. By fostering inclusive reporting and real-time analytics, the project can
        reduce underreporting of drug effects, particularly in underserved regions and linguistic
        communities. This data-driven approach will help health authorities respond more quickly to
        safety concerns and adverse reactions, enhancing overall patient safety and system-wide
        responsiveness.
      </p>

      <p className="text-justify">
        This initiative embodies National University's vision of dynamic Filipinism and inclusive
        nation-building. Through strategic integration of <strong>AI, public health, pharmacology, and Filipino
        language systems</strong>, GamotPH strengthens our collective ability to create a safer, smarter, and
        more compassionate healthcare environment. It serves as a beacon for how emerging
        technologies and cultural sensitivity can come together to amplify the voice of every
        Filipino in the national health conversation.
      </p>
        </div>
      </div>
    </div>
  );
};

export default About;
