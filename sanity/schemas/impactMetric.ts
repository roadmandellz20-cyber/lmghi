import { defineField, defineType } from "sanity";

export default defineType({
  name: "impactMetric",
  title: "Impact Metric",
  type: "document",
  fields: [
    defineField({ name: "label", title: "Label", type: "string", validation: (r) => r.required() }),
    defineField({ name: "value", title: "Value", type: "string", validation: (r) => r.required() }),
    defineField({ name: "timeframe", title: "Timeframe", type: "string" }),
    defineField({ name: "methodNote", title: "Methodology note", type: "string" }),
    defineField({ name: "order", title: "Order", type: "number" }),
    defineField({ name: "program", title: "Linked Program (optional)", type: "reference", to: [{ type: "program" }] }),
  ],
});
