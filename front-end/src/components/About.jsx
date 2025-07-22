import React from 'react';

const About = () => {
  return (
    <section className="px-6 py-12 max-w-5xl mx-auto text-gray-800">
      <h1 className="text-3xl md:text-4xl font-bold mb-4">
        Breaking Barriers: Linguistic Inclusivity in Adverse Drug Reaction Reporting – The GAMOTPH Project
      </h1>
      <h2 className="text-xl md:text-2xl font-semibold mb-6">
        A New Frontier in Public Health Innovation
      </h2>
      <p className="mb-4">
        In a country as diverse as the Philippines—home to over 180 ethnolinguistic groups—public health challenges are rarely one-size-fits-all. The need to communicate vital information across linguistic boundaries is more urgent than ever, especially when it comes to patient safety in drug use.
      </p>
      <p className="mb-4">
        Recognizing this, Dr. Mideth B. Abisado and her team at the National University, Philippines have embarked on a groundbreaking research initiative: the <strong>GAMOTPH Project</strong>. This research aims to revolutionize adverse drug reaction (ADR) reporting by empowering communities to use their native languages in digital reporting platforms, all supported by cutting-edge deep learning technology.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">From Under-Reporting to Empowerment</h2>
      <p className="mb-4">
        Pharmacovigilance—the science of monitoring drug safety—is an ongoing struggle in many developing countries, the Philippines included. Traditional reporting methods, often bogged down by lengthy forms and available only in English or Filipino, have resulted in widespread under-reporting. Patients and even healthcare providers in remote areas are left unheard, their concerns lost in translation—sometimes literally.
      </p>
      <p className="mb-4">
        The GAMOTPH Project is set to change this narrative. By leveraging advanced natural language processing (NLP) and deep learning, the toolkit enables real-time detection, analysis, and reporting of ADRs in multiple local languages, including Filipino, Cebuano, Ilocano, and Ivatan. The result? Broader participation, more accurate data, and a public health system that truly listens to every voice.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">How It Works: Harnessing AI and Local Languages</h2>
      <ul className="list-disc list-inside space-y-3 mb-4">
        <li>
          <strong>Multilingual Dictionaries:</strong> A comprehensive lexicon in English, Filipino, Cebuano, Ilocano, and Ivatan captures the nuances of drug names, symptoms, and user experiences.
        </li>
        <li>
          <strong>AI-Powered Analytics:</strong> Deep learning models automatically extract key information, identify trends, and detect safety signals using topic modeling, sentiment analysis, and named entity recognition tailored to local contexts.
        </li>
        <li>
          <strong>User-Centric Design:</strong> Mobile and web apps prioritize ease of use and accessibility, with intuitive interfaces and real-time dashboards showing cases, patterns, and patient insights.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-4">
        Sustainable Development Goals: Health, Equity, and Innovation
      </h2>
      <ul className="list-disc list-inside space-y-3 mb-4">
        <li>
          <strong>SDG 3: Good Health and Well-Being</strong><br />
          Comprehensive and inclusive ADR reporting enhances patient safety and improves healthcare outcomes.
        </li>
        <li>
          <strong>SDG 10: Reduced Inequalities</strong><br />
          By supporting native language reporting, the project promotes health equity for all, regardless of geography or background.
        </li>
        <li>
          <strong>SDG 9: Industry, Innovation, and Infrastructure</strong><br />
          Integrates AI and NLP in public health to build sustainable, tech-driven healthcare systems.
        </li>
        <li>
          <strong>SDG 17: Partnerships for the Goals</strong><br />
          Collaborates with universities, regulators, healthcare providers, and industry through policy and capacity-building.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-4">Wider Impact: Social, Economic, and Cultural Benefits</h2>
      <ul className="list-disc list-inside space-y-2 mb-4">
        <li>Improved health literacy and patient trust.</li>
        <li>Economic savings from early interventions and job creation.</li>
        <li>Cultural validation by uplifting minority languages and lived experiences.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-4">Looking Ahead</h2>
      <p className="mb-4">
        Now ongoing from <strong>January 2025 to December 2025</strong>, the GAMOTPH Project is poised to be a transformative force in Philippine healthcare. This groundbreaking project is funded by the <strong>Department of Science and Technology – Philippine Council for Health Research and Development (DOST PCHRD)</strong> with a grant of <strong>PHP 4,999,999.00</strong>.
      </p>
      <p className="mb-4">
        With a vision rooted in inclusivity, innovation, and nation-building, Dr. Abisado’s team is not just advancing public health—they are setting a new standard for how digital tools can make healthcare safer, fairer, and more responsive to everyone.
      </p>
      <p className="mb-2">
        <strong>Contact:</strong> Dr. Mideth B. Abisado<br />
        <strong>Email:</strong> <a href="mailto:mbabisado@national-u.edu.ph" className="text-blue-600 hover:underline">mbabisado@national-u.edu.ph</a><br />
        <strong>Location:</strong> Philippine Center for Social Media Analytics Laboratory (509MB), National University
      </p>
    </section>
  );
};

export default About;
