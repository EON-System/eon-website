import type { MetadataRoute } from "next";


export default function sitemap(): MetadataRoute.Sitemap {

  return [

    {
      url: "https://eon.ai",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },


    {
      url: "https://eon.ai/vision",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.8,
    },


    {
      url: "https://eon.ai/mission",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.8,
    },


    {
      url: "https://eon.ai/research",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },


    {
      url: "https://eon.ai/contact",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.6,
    },


    {
      url: "https://eon.ai/products/soulmirror",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },


    {
      url: "https://eon.ai/products/futureself",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },

  ];

}