import {
  business,
  locations,
  menuCategories,
  type BusinessInfo,
  type Location,
  type MenuCategory,
} from "./site-content";

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
  return localContentSource;
}
