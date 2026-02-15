import { defineField, defineType } from "sanity";

export default defineType({
  name: "policyDoc",
  title: "Policy / Governance Document",
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
      options: { list: ["Constitution", "Safeguarding", "Anti-fraud", "Governance", "M&E Framework", "Other"] },
    }),
    defineField({ name: "version", title: "Version", type: "string" }),
    defineField({ name: "effectiveDate", title: "Effective date", type: "date" }),
    defineField({
      name: "pdf",
      title: "PDF File",
      type: "file",
      options: { accept: "application/pdf" },
      validation: (r) => r.required(),
    }),
  ],
});
