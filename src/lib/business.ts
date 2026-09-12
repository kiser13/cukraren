export { business, locations } from "@/content/site-content";
import { business } from "@/content/site-content";

export const phoneHref = `tel:${business.phone.replace(/\s/g, "")}`;
