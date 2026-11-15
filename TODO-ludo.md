# TODO(ludo) — éléments à fournir après l'audit du 14/11/2026

Ce sont les éléments que je ne peux pas inventer. Chaque ligne indique où les renseigner.
Les mêmes `TODO(ludo)` figurent aussi en commentaire dans le code concerné.
(Ce fichier n'est pas publié : seuls `public/` et `content/` partent en ligne.)

## Global

- [ ] TODO(ludo): valider ou remplacer l'image de partage `public/og-image.png` (1200×630, générée à partir du favicon). — `composables/usePageSeo.ts`
- [ ] TODO(ludo): confirmer le domaine canonique `https://ludovicnouvel.com` (`runtimeConfig.public.siteUrl` dans `nuxt.config.ts`). Le fichier `CNAME` à la racine indique `cv.ludovicnouvel.com`, qui ne résout pas.

## Accueil (`/`)

- [ ] TODO(ludo): valider le texte du hero (proposition de l'audit). — `components/Home/Intro.vue`
- [ ] TODO(ludo): ajouter 1 ou 2 autres études de cas avec visuel (Ludology est faite). Le bloc d'accueil bascule automatiquement des expériences vers les projets dès qu'une étude de cas a `publie: true`. — modèle : `docs/modele-etude-de-cas.json`, à copier dans `content/etudes-de-cas/1.mon-projet.json`, captures dans `public/etudes-de-cas/`

## Portfolio (`/portfolio`)

- [ ] TODO(ludo): `periode` (ex. « 2021 – aujourd'hui ») et 1 ou 2 `realisations` concrètes pour chaque expérience. — `content/projects/*.json`
  - [ ] Heyteam
  - [ ] Idées, Clics & Solutions
  - [ ] Witco
  - [ ] R-PUR
  - [ ] WebEngineering
- [ ] TODO(ludo): l'URL réelle de WebEngineering. Pour l'instant, la carte n'a pas de lien. — `content/projects/5.webengineering.json` (`url`)
- [ ] TODO(ludo): vérifier les stacks réduites. R-PUR ne garde que React Native et WebEngineering que Jelix une fois les outils retirés (Git, GitHub, GitLab, éditeurs, Jira, Trello, Asana). — `content/projects/*.json`
- [ ] TODO(ludo): les études de cas de la section Projets (voir Accueil). La section reste masquée tant qu'il n'y en a aucune.
- [ ] TODO(ludo): du contenu pour « Expérimentation personnelle » et « Projets d'étude » si tu veux réafficher ces sections. — `pages/portfolio.vue`

## Setup (`/setup`)

- [ ] TODO(ludo): la date « Mis à jour le … » (`updatedAt`, format AAAA-MM-JJ, affichée seulement si renseignée). — `pages/setup.vue`
- [ ] TODO(ludo): une photo du bureau (`deskPhoto`, par ex. `/setup/bureau.jpg`). — `pages/setup.vue`
- [ ] TODO(ludo): des vignettes par item (champ `image` dans `content/uses/*.json`, facultatif).
- [ ] TODO(ludo): mettre à jour les éléments datés :
  - [ ] iPhone 15 Pro présenté comme « dernier plaisir » (la page Apple redirige vers `/fr/iphone/`) — `content/uses/apple-iphone-15-pro.json`
  - [ ] Arc toujours navigateur principal ? — `content/uses/arc-browser.json`
  - [ ] MacBook Pro 2016 toujours utilisé ? — `content/uses/macbook-pro.json`
- [ ] TODO(ludo): les liens manquants, retirés parce qu'ils étaient faux :
  - [ ] LG 27 pouces : l'ancien lien pointait vers la fiche de l'écran Asus — `content/uses/lg-monitor.json`
  - [ ] MX Master 3 : il n'y a plus de page produit sur logitech.com/fr-fr — `content/uses/logitech-mx-master-3s.json`
  - [ ] Fausses plantes : l'ancien lien pointait vers amazon.in — `content/uses/fake-plants.json`
- [ ] TODO(ludo): vérifier le modèle d'écran Asus. La fiche LDLC correspond au ROG Swift **PG34WCDM** (OLED), alors que l'item s'appelle « Swift PG34 ». — `content/uses/asus-monitor.json`

## Favoris (`/bookmarks`)

- [ ] TODO(ludo): `pourquoi` (une ligne) et `ajouteLe` (AAAA-MM-JJ) pour chacun des 11 favoris. — `pages/bookmarks.vue`
- [ ] TODO(ludo): vérifier les types attribués, en particulier Refactoring.guru et Tines classés en « Articles et inspirations ». — `pages/bookmarks.vue`
