import type { MetadataRoute } from "next";


export default function sitemap(): MetadataRoute.Sitemap {

  return [

    {
      url: "https://eon.ai",
      lastModified: new Date(),
    },


    {
      url: "https://eon.ai/about",
      lastModified: new Date(),
    },


    {
      url: "https://eon.ai/products",
      lastModified: new Date(),
    },


    {
      url: "https://eon.ai/research",
      lastModified: new Date(),
    },


    {
      url: "https://eon.ai/contact",
      lastModified: new Date(),
    },

  ];

}