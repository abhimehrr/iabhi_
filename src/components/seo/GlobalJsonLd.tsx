import {
  faqPageSchema,
  personSchema,
  profilePageSchema,
  serviceSchema,
  websiteSchema,
  workItemListSchema,
} from "@/lib/seo-schema";

/** Global JSON-LD injected once in the root layout */
export function GlobalJsonLd(): React.JSX.Element {
  const schemas = [
    personSchema,
    websiteSchema,
    profilePageSchema,
    faqPageSchema,
    serviceSchema,
    workItemListSchema,
  ];

  return (
    <>
      {schemas.map((schema) => (
        <script
          key={String(schema["@id"] ?? schema["@type"])}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  );
}
