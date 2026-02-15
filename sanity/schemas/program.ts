import { defineField, defineType } from "sanity";

export default defineType({
  name: "program",
  title: "Program",
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
      name: "pillar",
      title: "Pillar",
      type: "reference",
      to: [{ type: "pillar" }],
      validation: (r) => r.required(),
    }),

    defineField({ name: "overview", title: "Overview", type: "text", rows: 3, validation: (r) => r.required() }),

    defineField({ name: "problem", title: "Problem", type: "array", of: [{ type: "block" }], validation: (r) => r.required() }),
    defineField({ name: "strategy", title: "Strategy", type: "array", of: [{ type: "block" }], validation: (r) => r.required() }),

    defineField({
      name: "indicators",
      title: "Indicators",
      type: "array",
      of: [
        {
          type: "object",
          name: "indicator",
          fields: [
            defineField({ name: "name", title: "Indicator", type: "string", validation: (r) => r.required() }),
            defineField({ name: "baseline", title: "Baseline", type: "string" }),
            defineField({ name: "target", title: "Target", type: "string" }),
            defineField({ name: "notes", title: "Notes", type: "string" }),
          ],
        },
      ],
    }),

    defineField({ name: "results", title: "Results", type: "array", of: [{ type: "block" }] }),

    defineField({
      name: "waysToSupport",
      title: "Ways to Support",
      type: "object",
      fields: [
        defineField({ name: "donate", title: "Donate blurb", type: "text", rows: 2 }),
        defineField({ name: "partner", title: "Partner blurb", type: "text", rows: 2 }),
        defineField({ name: "volunteer", title: "Volunteer blurb", type: "text", rows: 2 }),
      ],
    }),
  ],
});
