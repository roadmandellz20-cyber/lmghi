import { defineField, defineType } from "sanity";

export default defineType({
  name: "person",
  title: "Person",
  type: "document",
  fields: [
    defineField({ name: "name", title: "Name", type: "string", validation: (r) => r.required() }),
    defineField({
      name: "roleType",
      title: "Role type",
      type: "string",
      options: { list: ["Board", "Executive", "Advisor"] },
      validation: (r) => r.required(),
    }),
    defineField({ name: "title", title: "Title/Position", type: "string" }),
    defineField({ name: "bio", title: "Bio", type: "text", rows: 5 }),
    defineField({ name: "photo", title: "Photo", type: "image", options: { hotspot: true } }),
  ],
});
