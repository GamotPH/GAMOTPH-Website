import React, { useEffect, useState } from "react";
import { client } from "../client";
import imageUrlBuilder from "@sanity/image-url";
import { Link } from "react-router-dom";

// Sanity image URL builder
const builder = imageUrlBuilder(client);
function urlFor(source) {
  return builder.image(source);
}

const Partners = () => {
  const [partners, setPartners] = useState([]);

  useEffect(() => {
    const fetchPartners = async () => {
      const query = `*[_type == "partner"] | order(name asc) {
        name,
        description,
        image,
        website,
        slug
      }`;
      const data = await client.fetch(query);
      setPartners(data);
    };

    fetchPartners();
  }, []);

  return (
    <section className="p-6 md:p-12">
      <h1 className="text-3xl font-bold mb-8 text-center">Our Partners</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {partners.map((partner, index) => (
          <Link to={`/partners/${partner.slug.current}`} key={index}>
            <div className="bg-white shadow-lg rounded-2xl p-6 flex flex-col items-center text-center hover:shadow-xl transition duration-300">
              {partner.image && (
                <img
                  src={urlFor(partner.image).width(200).height(200).url()}
                  alt={partner.name}
                  className="w-32 h-32 object-cover rounded-full mb-4"
                />
              )}
              <h2 className="text-xl font-semibold mb-2">{partner.name}</h2>
              {partner.description && (
                <p className="text-sm text-gray-600 mb-2">
                  {partner.description}
                </p>
              )}
              {partner.website && (
                <a
                  href={partner.website}
                  onClick={(e) => e.stopPropagation()} // Prevent Link from triggering
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 text-sm underline"
                >
                  Visit Website
                </a>
              )}
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Partners;
