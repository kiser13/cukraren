import { defineArrayMember, defineField, defineType } from "sanity";

const menuCategoryKeys = ["cakes", "iceCream", "coffee", "drinks", "snacks"] as const;

export const siteContent = defineType({
  name: "siteContent",
  title: "Website content",
  type: "document",
  fields: [
    defineField({
      name: "business",
      title: "Business information",
      type: "object",
      fields: [
        defineField({ name: "name", title: "Name", type: "string", validation: (rule) => rule.required() }),
        defineField({ name: "phone", title: "Phone", type: "string", validation: (rule) => rule.required() }),
        defineField({ name: "email", title: "Email", type: "string", validation: (rule) => rule.required().email() }),
        defineField({ name: "hours", title: "Opening hours", type: "string", validation: (rule) => rule.required() }),
      ],
    }),
    defineField({
      name: "locations",
      title: "Locations",
      type: "array",
      of: [
        defineArrayMember({
          name: "location",
          title: "Location",
          type: "object",
          fields: [
            defineField({ name: "name", title: "Name", type: "string", validation: (rule) => rule.required() }),
            defineField({ name: "address", title: "Address", type: "string", validation: (rule) => rule.required() }),
            defineField({ name: "phone", title: "Phone", type: "string", validation: (rule) => rule.required() }),
            defineField({ name: "hours", title: "Opening hours", type: "string", validation: (rule) => rule.required() }),
            defineField({ name: "mapQuery", title: "Google Maps search", type: "string", validation: (rule) => rule.required() }),
          ],
        }),
      ],
      validation: (rule) => rule.required().min(1),
    }),
    defineField({
      name: "menuCategories",
      title: "Menu categories",
      type: "array",
      of: [
        defineArrayMember({
          name: "menuCategory",
          title: "Menu category",
          type: "object",
          fields: [
            defineField({
              name: "key",
              title: "Internal key",
              type: "string",
              options: { list: menuCategoryKeys.map((value) => ({ title: value, value })) },
              validation: (rule) => rule.required(),
            }),
            defineField({ name: "title", title: "Title", type: "string", validation: (rule) => rule.required() }),
            defineField({
              name: "items",
              title: "Items",
              type: "array",
              of: [
                defineArrayMember({
                  name: "menuItem",
                  title: "Menu item",
                  type: "object",
                  fields: [
                    defineField({ name: "name", title: "Name", type: "string", validation: (rule) => rule.required() }),
                    defineField({ name: "price", title: "Price", type: "string", validation: (rule) => rule.required() }),
                    defineField({
                      name: "image",
                      title: "Image",
                      type: "image",
                      options: { hotspot: true },
                      fields: [defineField({ name: "alt", title: "Alt text", type: "string" })],
                    }),
                  ],
                  preview: {
                    select: { title: "name", subtitle: "price", media: "image" },
                  },
                }),
              ],
              validation: (rule) => rule.required(),
            }),
          ],
          preview: {
            select: { title: "title", subtitle: "key" },
          },
        }),
      ],
      validation: (rule) => rule.required().min(1),
    }),
  ],
  preview: {
    prepare: () => ({ title: "Website content" }),
  },
});
