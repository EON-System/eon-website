export function Schema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",

    name: "EON AI",

    url: "https://eon.ai",

    description:
      "EON AI builds personal intelligence systems designed around memory, identity and human potential.",


    sameAs: [
      "https://x.com/eon_ai_inc?s=11",
      "https://www.instagram.com/eon_ai_inc",
      "https://www.linkedin.com/in/eon-ai-a2a9a4422",
      "https://www.tiktok.com/@eon_ai1",
    ],


    brand: {
      "@type": "Brand",
      name: "EON AI",
    },


    founder: {
      "@type": "Organization",
      name: "EON AI",
    },


    knowsAbout: [
      "Artificial Intelligence",
      "Personal AI",
      "AI companions",
      "Human AI interaction",
      "Future of intelligence",
    ],

  };


  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema),
      }}
    />
  );
}