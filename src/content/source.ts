import {
  business,
  locations,
  menuCategories,
  type BusinessInfo,
  type Location,
  type MenuCategory,
} from "./site-content";

export { business, locations, menuCategories } from "./site-content";

export type SiteContent = {
  business: BusinessInfo;
  locations: Location[];
  menuCategories: MenuCategory[];
};

export type ContentSource = {
  getSiteContent: () => Promise<SiteContent>;
};

export const localContentSource: ContentSource = {
  async getSiteContent() {
    return { business, locations, menuCategories };
  },
};

export function getContentSource(): ContentSource {
  if (import.meta.env.VITE_SANITY_PROJECT_ID) {
    return {
      async getSiteContent() {
        const { getSanitySiteContent, sanityFallbackContent } = await import("./sanity-source");
        return (await getSanitySiteContent()) ?? sanityFallbackContent;
      },
    };
  }

  return localContentSource;
}
