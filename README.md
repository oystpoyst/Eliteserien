# Eliteserien

Eliteserien er en applikasjon som viser Eliteserien tabellen og kamper for hvert lag man trykker på. Kamplisten viser kamper for hele eliteserie sesongen.

Forutsetninger/ begrensninger for løsningen:

- Listen med tabelldata er allerede sortert i backend.
- listen (data) over celler i tabllen vil ikke endre seg (Viser flere kolonne-celler basert på indekser, men er mer hensiktsmessig å sammenlikne med feltet: code. Dette gjelder også på andre steder hvor hardkodede indekser er brukt).
- Brukere er på desktop, selv om løsningen er delvis tilpasset mobil.

### Bygget med

Prosjektet er satt opp med byggeverktøyet Vite, med en tilhørende React / typescript start template. Apollo Client for å kjøre graphQL queries, mantine for ferdige React komponenter og styled-components for custom html komponenter. dayjs er brukt for dato håndtering.

### Setup

1. Clone repoet
2. Install NPM packages
   ```sh
   npm install
   ```
3. Kjør prosjektet
   ```sh
   npm run dev
   ```
