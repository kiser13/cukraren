import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";

import { schemaTypes } from "./schemaTypes";

export default defineConfig({
  name: "cukraren-studio",
  title: "Cukráreň Amando",
  projectId: "g9kcnac1",
  dataset: "production",
  plugins: [structureTool(), visionTool()],
  schema: {
    types: schemaTypes,
  },
});
