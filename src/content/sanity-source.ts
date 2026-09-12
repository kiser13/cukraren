import { createClient } from "@sanity/client";

import {
  business as fallbackBusiness,
  locations as fallbackLocations,
  menuCategories as fallbackMenuCategories,
  type SiteContent,
} from "./source";
import type { MenuCategoryKey } from "./site-content";

type SanityImage = {
  asset?: { url?: string };
};

type SanitySiteContent = {
  business?: SiteContent["business"];
  locations?: SiteContent["locations"];
  menuCategories?: Array<{
    key?: string;
    title?: string;
    items?: Array<{
      name?: string;
      price?: string;
      image?: SanityImage;
    }>;
  }>;
};

const projectId = import.meta.env.VITE_SANITY_PROJECT_ID;
const dataset = import.meta.env.VITE_SANITY_DATASET ?? "production";

const sanityClient = projectId
  ? createClient({
      projectId,
      dataset,
      apiVersion: "2026-09-12",
      useCdn: true,
      perspective: "published",
    })
  : undefined;

const siteContentQuery = `*[_type == "siteContent"][0]{
  business,
  locations[]{name, address, phone, hours, mapQuery},
  menuCategories[]{
    key,
    title,
    items[]{name, price, image{asset->{url}}}
  }
}`;

const menuCategoryKeys = new Set<MenuCategoryKey>([
  "cakes",
  "iceCream",
  "coffee",
  "drinks",
  "snacks",
]);

export async function getSanitySiteContent(): Promise<SiteContent | undefined> {
  if (!sanityClient) return undefined;

  const content = await sanityClient.fetch<SanitySiteContent | null>(siteContentQuery);
  if (!content?.business || !content.locations?.length || !content.menuCategories?.length) {
    return undefined;
  }

  const menuCategories = content.menuCategories.flatMap((category) => {
    if (
      !category.key ||
      !menuCategoryKeys.has(category.key as MenuCategoryKey) ||
      !category.title ||
      !category.items
    ) {
      return [];
    }

    const items = category.items.flatMap((item) => {
      if (!item.name || !item.price) return [];
      return [
        {
          name: item.name,
          price: item.price,
          ...(item.image?.asset?.url ? { image: item.image.asset.url } : {}),
        },
      ];
    });

    return [{ key: category.key as MenuCategoryKey, title: category.title, items }];
  });

  if (!menuCategories.length) return undefined;

  return {
    business: content.business,
    locations: content.locations,
    menuCategories,
  };
}

export const sanityFallbackContent: SiteContent = {
  business: fallbackBusiness,
  locations: fallbackLocations,
  menuCategories: fallbackMenuCategories,
};
