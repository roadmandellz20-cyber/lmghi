import { defineField, defineType } from "sanity";

export default defineType({
  name: "project",
  title: "Project",
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
      name: "program",
      title: "Program",
      type: "reference",
      to: [{ type: "program" }],
      validation: (r) => r.required(),
    }),
    defineField({ name: "status", title: "Status", type: "string", options: { list: ["Planned", "Active", "Completed"] } }),
    defineField({ name: "locations", title: "Locations", type: "array", of: [{ type: "string" }] }),
    defineField({ name: "timeframe", title: "Timeframe", type: "string" }),
    defineField({ name: "summary", title: "Summary", type: "text", rows: 3 }),
    defineField({ name: "body", title: "Details", type: "array", of: [{ type: "block" }] }),
  ],
});
