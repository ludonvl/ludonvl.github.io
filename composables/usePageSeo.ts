// Balises SEO et de partage communes à toutes les pages.
// `description` est du texte brut (140–160 caractères), distinct de l'intro HTML affichée.
export function usePageSeo(options: {
  title: string;
  description: string;
  path: string;
  image?: string;
}) {
  const { siteUrl } = useRuntimeConfig().public;
  const url = `${siteUrl}${options.path === "/" ? "/" : options.path}`;
  // TODO(ludo): l'image OG par défaut (/og-image.png) a été générée à partir du favicon ; à valider ou remplacer.
  const image = `${siteUrl}${options.image ?? "/og-image.png"}`;

  useSeoMeta({
    title: options.title,
    description: options.description,
    ogTitle: options.title,
    ogDescription: options.description,
    ogUrl: url,
    ogType: "website",
    ogLocale: "fr_FR",
    ogSiteName: "Ludovic Nouvel",
    ogImage: image,
    ogImageWidth: 1200,
    ogImageHeight: 630,
    ogImageAlt: "Ludovic Nouvel, lead developer",
    twitterCard: "summary_large_image",
    twitterTitle: options.title,
    twitterDescription: options.description,
    twitterImage: image,
  });

  useHead({
    link: [{ rel: "canonical", href: url }],
  });
}
