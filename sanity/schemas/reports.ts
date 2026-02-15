import { defineField, defineType } from "sanity";

export default defineType({
  name: "report",
  title: "Report / Publication",
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
      name: "type",
      title: "Type",
      type: "string",
      options: { list: ["Annual Report", "Financial Statement", "Evaluation", "Policy", "Other"] },
      validation: (r) => r.required(),
    }),
    defineField({ name: "period", title: "Period Covered", type: "string" }),
    defineField({ name: "publishedAt", title: "Published date", type: "datetime" }),
    defineField({ name: "summary", title: "Summary", type: "text", rows: 4 }),
    defineField({
      name: "pdf",
      title: "PDF File",
      type: "file",
      options: { accept: "application/pdf" },
      validation: (r) => r.required(),
    }),
    defineField({ name: "tags", title: "Tags", type: "array", of: [{ type: "string" }] }),
    defineField({ name: "relatedPrograms", title: "Related Programs", type: "array", of: [{ type: "reference", to: [{ type: "program" }] }] }),
  ],
});
