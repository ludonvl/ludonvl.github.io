# TODO(ludo) — éléments à fournir après l'audit du 14/11/2026

Ce sont les éléments que je ne peux pas inventer. Chaque ligne indique où les renseigner.
Les mêmes `TODO(ludo)` figurent aussi en commentaire dans le code concerné.
(Ce fichier n'est pas publié : seuls `public/` et `content/` partent en ligne.)

## Global

- [ ] TODO(ludo): valider ou remplacer l'image de partage `public/og-image.png` (1200×630, générée à partir du favicon). — `composables/usePageSeo.ts`
- [x] Domaine canonique confirmé : `https://ludovicnouvel.com` (CNAME aligné le 15/11/2026).

## Accueil (`/`)

- [ ] TODO(ludo): valider le texte du hero (proposition de l'audit). — `components/Home/Intro.vue`
- [x] Résultat de DevQuality : on garde la formulation actuelle, sans chiffres internes (choix du 15/11/2026).
- [ ] TODO(ludo): ajouter éventuellement une 3ᵉ étude de cas (Ludology et DevQuality sont faites). Le bloc d'accueil bascule automatiquement des expériences vers les projets dès qu'une étude de cas a `publie: true`. — modèle : `docs/modele-etude-de-cas.json`, à copier dans `content/etudes-de-cas/1.mon-projet.json`, captures dans `public/etudes-de-cas/`

## Portfolio (`/portfolio`)

- [x] URL de WebEngineering : https://webengineering.fr/
- [ ] TODO(ludo): vérifier les stacks réduites. R-PUR ne garde que React Native et WebEngineering que Jelix une fois les outils retirés (Git, GitHub, GitLab, éditeurs, Jira, Trello, Asana). — `content/projects/*.json`
- [ ] TODO(ludo): les études de cas de la section Projets (voir Accueil). La section reste masquée tant qu'il n'y en a aucune.
- [ ] TODO(ludo): du contenu pour « Expérimentation personnelle » et « Projets d'étude » si tu veux réafficher ces sections. — `pages/portfolio.vue`

## Setup (`/setup`)

- [ ] TODO(ludo): une photo du bureau (`deskPhoto`, par ex. `/setup/bureau.jpg`). — `pages/setup.vue`
- [ ] TODO(ludo): des vignettes par item (champ `image` dans `content/uses/*.json`, facultatif).

## Favoris (`/bookmarks`)

- [ ] TODO(ludo): `pourquoi` (une ligne) et `ajouteLe` (AAAA-MM-JJ) pour chacun des 11 favoris. — `pages/bookmarks.vue`
- [ ] TODO(ludo): vérifier les types attribués, en particulier Refactoring.guru et Tines classés en « Articles et inspirations ». — `pages/bookmarks.vue`
