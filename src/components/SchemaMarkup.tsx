interface SchemaMarkupProps {
  jsonLd: Record<string, unknown>
}

export default function SchemaMarkup({ jsonLd }: SchemaMarkupProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(jsonLd),
      }}
    />
  )
}
