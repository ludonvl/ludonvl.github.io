// Études de cas publiées (content/etudes-de-cas/*.json avec publie: true ; modèle : docs/modele-etude-de-cas.json).
// TODO(ludo): ajouter 2 ou 3 études de cas ; tant qu'il n'y en a aucune, les sections Projets restent masquées.
export function useCaseStudies(key: string, limit?: number) {
  return useAsyncData(key, () => {
    let query = queryContent("/etudes-de-cas").where({ publie: true });
    if (limit) query = query.limit(limit);
    return query.find();
  });
}
