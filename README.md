# Teknisk dokumentation - Høst Møn (Tema 9 - Gruppe 6)

## Om projektet

Dette projekt er lavet i anden del af tema 9. Vi har lavet et semi-dynamisk website med astro, HTML, CSS og JS, hvor noget af indholdet bliver hentet fra vores egne tabeller i vores SUPABASE database.

Sitet består af en enkelt side, hvor brugeren kan:

- Se stemningsvideo, købe billetter og åbne menu
- Se musikprogrammet og detaljer om de enkelte kunstnere
- Se arkivet med billeder fra tidligere festivaller
- Læse om Høst Møn, Impact, måltidet, frivillige og pladsen

## Links

- [GitHub repository](https://github.com/Vicky8484/hostmon_redesign)
- [Netlify Projekt] ()
- [Figma](https://www.figma.com/design/HKQ5s2KR6odf0m03UKxO4T/H%C3%B8st-M%C3%B8n--musikfestival?node-id=225-2&t=J7O3EYgXLeXg4dXL-1)
- [Trello](https://trello.com/b/XDNZTTE3/tema-9-h%C3%B8st-m%C3%B8n)

## Projektstruktur:

Projektet er opdelt i astrofiler og komponenter og et globalt stylesheet. Men individuel CSS og javascript laves i de forskellige komponenter.

hostmon_redesign/
├── pages/
│ └── index.astro
├── components/
│ ├── arkivPopover.astro
│ ├── billetPopover.astro
│ ├── enkeltArkiv.astro
│ ├── enkeltArtist.astro
│ ├── infoPopover.astro
│ ├── menuPopover.astro
│ └── programPopover.astro
├── styles/
│ └── global.css
└── readme.md

## Hvordan koden fungerer

Vi har kun en side, men en masse Popovers i form af komponenter der popper op når man trykker på vores forskellige CTA knapper.
Javascript laves indenfor fences i de forskellige komponenter og loader, når man åbner den komponent.

**Flow:**

- Siden loader
- JavaScript kører
- Data hentes fra Rest API
- Data bliver gennemgået med loop

## Navngivning:

Vi har prøvet at navngive vores filer, variabler og funktioner så tydeligt som muligt og med camel case.

### Eksempler på variabler

`const SUPABASE_URL;
const SUPABASE_PUBLISHABLE_KEY;`

## Link til scripts:

- JS scripts kommer til at være direkte i fences i komponenten eller i et script-tag i komponenten.

## Git branches:

- Vi navngiver branches med hvad vi laver (hvilken funktion eller side der skal kodes i den branch) efterfulgt af navn på gruppemedlem

## Kommentarer i koden

Vi har kommenteret meget i det globale.css, så det er helt tydeligt hvad der er hvad for alle

I vores individuelle css-filer har vi valgt at overlade det til det medlem som er ansvarlig for siden, hvor meget personen vil kommentere.

## Data og JSON-struktur

Vi henter data fra vores eget API i JSON-format.

Et objekt kan fx se sådan ud:

```

```

**Felter vi bruger:**

- id
- kunstner_navn
- kunstner_billede
- om_kunstner
- dato
- tid
- spotify_link
- instagram_link

## Arbejdsflow

Vores arbejdsfordeling:

- Victory
  - index.astro
  - menuPopover

- Natasja
  - arkivPopover
  - enkeltArkiv
  - billetPopover

- Julie
  - programPopover
  - enkeltArtist
  - infoPopover

Vores workflow:

- Lav en branch med feature-navn og eget navn til sidst
- Kod en feature
- Commit ændringer
- Push til GitHub
- Merge til main når det virker

Det gør det nemmere at holde styr på, hvem der laver hvad.

## Bæredygtighed

Vi har tænkt bæredygtighed ind i projektet ved at holde løsningen forholdsvis enkel.

**Tiltag:**

- Bruge lette billedfiler (webp)
- Undgå tunge frameworks
- Genbruge kode (global.css)
- Optimere billeder og indhold (squoosh til webp)
- Lav en enkelt side, mindske site trafik

Et lettere website kræver færre ressourcer at loade og bruge.

# API endpoints

Dette afsnit lister de endpoints fra API'et vi har benyttet:

- (https://dummyjson.com/products)
- (https://dummyjson.com/recipes?limit=100)
- (https://dummyjson.com/recipes/) + id

## Gruppemedlemmer

- Julie Mørk
- Natasja Laursen
- Victory Okosun

```

```
