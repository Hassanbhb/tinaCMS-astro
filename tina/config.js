import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "main";

export default defineConfig({
  branch,
  clientId: null, // Get this from tina.io
  token: null, // Get this from tina.io

  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "public",
    },
  },
  schema: {
    collections: [
      {
        name: "post",
        label: "Blog Posts",
        path: "/src/content/blog",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "reference",
            label: "Author",
            name: "author",
            collections: ['authors']
          },
          {
            type: "rich-text",
            name: "body",
            label: "Post Body",
            isBody: true
          },
          {
            type: "string",
            label: "Tags",
            name: "tags",
            list: true
          }
        ],
      },
      {
        name: "authors",
        label: "Authors",
        path: "/src/content/authors",
        // format: "json",
        fields: [
          {
            type: "string",
            name: "author",
            label: "Author",
            isTitle: true,
            required: true
          },
          {
            type: "string",
            name: "description",
            label: "description",
          }
        ]
      }
    ],
  },
});
