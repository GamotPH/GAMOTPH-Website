import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { client } from "../client";
import imageUrlBuilder from "@sanity/image-url";

const builder = imageUrlBuilder(client);
function urlFor(source) {
  return builder.image(source);
}

const PartnerDetails = () => {
  const { slug } = useParams();
  const [partner, setPartner] = useState(null);

  useEffect(() => {
    const fetchPartner = async () => {
      const query = `*[_type == "partner" && slug.current == $slug][0]{
        name,
        description,
        image,
        website
      }`;
      const data = await client.fetch(query, { slug });
      setPartner(data);
    };
    fetchPartner();
  }, [slug]);

  if (!partner) return <p className="text-center p-4">Loading...</p>;

  return (
    <div className="p-6 md:p-12 max-w-3xl mx-auto text-center">
      {partner.image && (
        <img
          src={urlFor(partner.image).width(300).height(300).url()}
          alt={partner.name}
          className="rounded-full mx-auto mb-6"
        />
      )}
      <h1 className="text-3xl font-bold mb-2">{partner.name}</h1>
      <p className="text-gray-700 mb-4">{partner.description}</p>
      {partner.website && (
        <a
          href={partner.website}
          className="text-blue-500 underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          Visit Website
        </a>
      )}
    </div>
  );
};

export default PartnerDetails;
