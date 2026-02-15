import { defineField, defineType } from "sanity";

export default defineType({
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  fields: [
    defineField({ name: "orgName", title: "Organization name (full)", type: "string", validation: (r) => r.required() }),
    defineField({ name: "shortName", title: "Short name", type: "string", validation: (r) => r.required() }),
    defineField({ name: "region", title: "Operating region", type: "string" }),
    defineField({ name: "country", title: "Primary country", type: "string" }),

    defineField({
      name: "emails",
      title: "Role emails",
      type: "object",
      fields: [
        defineField({ name: "info", title: "Info", type: "string" }),
        defineField({ name: "partnerships", title: "Partnerships", type: "string" }),
        defineField({ name: "donate", title: "Donate", type: "string" }),
      ],
    }),
  ],
});
