import { defineField, defineType } from "sanity";

export default defineType({
  name: "resource",
  title: "Resource / Knowledge Entry",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Title", type: "string", validation: (r) => r.required() }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title", maxLength: 96 },
      validation: (r) => r.required(),
    }),
    defineField({
      name: "category",
      title: "Category",
      type: "string",
      options: { list: ["Brief", "Insight", "Update", "Guide", "Research Note"] },
      validation: (r) => r.required(),
    }),
    defineField({ name: "tags", title: "Tags", type: "array", of: [{ type: "string" }] }),
    defineField({ name: "publishedAt", title: "Published date", type: "datetime" }),
    defineField({ name: "body", title: "Content", type: "array", of: [{ type: "block" }], validation: (r) => r.required() }),
    defineField({ name: "relatedPrograms", title: "Related Programs", type: "array", of: [{ type: "reference", to: [{ type: "program" }] }] }),
  ],
});
