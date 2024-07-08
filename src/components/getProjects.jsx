import { createClient } from "contentful";
import { useState, useEffect } from "react";

const client = createClient({
  space: import.meta.env.VITE_CONTENTFUL_SPACE_ID,
  environment: "master",
  accessToken: import.meta.env.VITE_CONTENTFUL_API_KEY,
});

export const useGetProjects = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [projects, setProjects] = useState([]);

  const getData = async () => {
    try {
      const response = await client.getEntries({ content_type: "portfolio" });

      const projects = response.items.map((item) => {
        const { title, url, github, text, image } = item.fields;

        const id = item.sys.id;

        const img = image?.fields?.file?.url;
        return { id, title, url, github, img, text };
      });
      setProjects(projects);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return { isLoading, projects };
};
