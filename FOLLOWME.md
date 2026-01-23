# 📋 Dossier de candidature NLnet — NGI0 Commons Fund

## ⏰ Deadline : 1er février 2026, 12h00 CET

**Lien formulaire :** https://nlnet.nl/propose/

---

## 🔧 INFORMATIONS PRÉALABLES

### Licence — ATTENTION ⚠️

NLnet exige une **licence libre reconnue** (GPL, MIT, Apache, AGPL, etc.).  
La licence actuelle **CC BY-NC-SA 4.0** pose problème car :
- La clause **NC (Non-Commercial)** n'est pas considérée comme "libre" par l'OSI/FSF
- NLnet finance des "communs numériques" qui doivent être utilisables par tous, y compris commercialement

**Solutions possibles :**
1. Passer sous **AGPL-3.0** (recommandé pour apps web — protège contre l'appropriation)
2. Passer sous **GPL-3.0** (classique copyleft)
3. Double licence : GPL pour le code, CC BY-SA pour le contenu méthodologique

**Recommandation :** Discuter avec Justice et Paix — ils ont peut-être des contraintes liées au guide original.

---

## 📝 FORMULAIRE DE CANDIDATURE

### 1. Thematic call
```
NGI Zero Commons Fund
```

### 2. Contact information

```
Name:           [Prénom Nom]
Email:          [ton email]
Phone:          [téléphone]
Organisation:   Commission Justice et Paix Belgique francophone (si accord)
Country:        Belgium
```

### 3. Proposal name
```
#B!Mi Plaidoyer Citoyen — Digital Toolkit for Citizen Advocacy
```

### 4. Website / wiki
```
https://github.com/[ton-username]/bimi-plaidoyer  (à créer)
```

---

### 5. ABSTRACT (champ principal)

```
## Project summary

#B!Mi Plaidoyer Citoyen is a free, offline-first digital workstation that helps 
citizen groups plan and execute advocacy campaigns. It provides a structured 
methodology based on the "See-Judge-Act" framework widely used in popular 
education and civil society organizing.

The tool offers 15 interconnected modules:
- SEEING phase: Vision mapping, skills inventory, power/privilege analysis
- JUDGING phase: Stakeholder mapping with interactive network visualization, 
  problem tree analysis, root cause analysis (5 Whys), SWOT, PESTEL, Theory of Change
- ACTING phase: Power analysis, target prioritization, message crafting, 
  SMART objectives with Kanban/Timeline/Gantt views, evaluation framework, campaign journal

Key features:
- Works 100% offline (Progressive Web App with IndexedDB storage)
- No account required, no data sent to servers — full user sovereignty
- Multi-format exports: Markdown, HTML, Word (.docx), CSV
- Interactive stakeholder network graph (vis.js) with relationship mapping
- Campaign planning dashboard with Kanban board and Gantt charts (Mermaid.js)
- Installable as native app on mobile and desktop
- Designed for workshop facilitation and collective use

The methodology is adapted from "Le Petit Guide du Plaidoyer Citoyen" published 
by Commission Justice et Paix Belgium, a permanent education organization.

## Previous involvement

I have been developing civic tech tools and contributing to digital commons 
for citizen empowerment. This specific project emerged from direct experience 
with social movements in Belgium (anti-poverty advocacy, social security reform 
opposition) where I observed groups struggling to structure their campaigns 
despite having strong motivation and legitimate grievances.

The current prototype (v4.4) is fully functional and has been developed over 
[X] months. It is ready for real-world testing and iterative improvement 
based on user feedback from civil society organizations.
```

---

### 6. REQUESTED AMOUNT

```
15000
```

(Entre 5 000 et 50 000 € — 15 000 € est raisonnable pour une première demande avec un prototype déjà fonctionnel)

---

### 7. BUDGET & TECHNICAL DETAILS

```
## Budget breakdown

The requested €15,000 will fund the following development milestones:

### Milestone 1: Core improvements (€4,000)
- Multi-language support (FR/NL/EN) with i18n framework
- Accessibility audit and WCAG 2.1 AA compliance
- Mobile-responsive optimization
- Security hardening

### Milestone 2: Collaboration features (€4,500)
- Real-time collaborative editing (CRDT-based, serverless option)
- Project sharing via encrypted URLs
- Comment and annotation system
- Version history

### Milestone 3: AI-assisted features (€3,500)
- Optional AI suggestions for content improvement (local LLM or API)
- Automatic coherence checking between sections
- Translation assistance (FR/NL)
- Argument strength analysis

### Milestone 4: Documentation & outreach (€3,000)
- Video tutorials for workshop facilitators
- Printable companion worksheets
- API documentation for integrations
- User testing with 5+ civil society organizations

## Other funding sources

- Past: None (self-funded development)
- Present: Application pending with Commission Justice et Paix Belgium 
  for administrative hosting (no direct funding, organizational support only)
- Future: May apply to Belgian permanent education funding (FWB) for 
  workshop deployment

## Comparison with existing tools

Existing advocacy planning tools fall into three categories:

1. **Commercial platforms** (Mobilize, Action Network, NationBuilder):
   - Require accounts and subscriptions
   - Data stored on US servers, privacy concerns
   - Focus on mobilization metrics, not strategic thinking

2. **Methodological PDFs** (various NGO toolkits):
   - Static documents, no interactivity
   - Cannot be filled in or saved progressively
   - No visualization capabilities

3. **Generic project management** (Notion, Trello):
   - Not tailored to advocacy methodology
   - Require technical literacy to configure
   - Data sovereignty issues

#B!Mi fills a specific gap: a **methodology-native** tool that works offline, 
requires no account, and guides users through proven advocacy frameworks 
while respecting their data sovereignty.

Closest comparable: Ushahidi (crisis mapping) — but focused on different use case.

## Technical challenges

1. **Offline-first architecture**: Ensuring reliable data sync when 
   connectivity is intermittent (common in workshop settings)

2. **CRDT implementation**: Enabling real-time collaboration without 
   central server while handling merge conflicts gracefully

3. **Accessibility**: Making complex visualizations (network graphs, 
   Gantt charts) accessible to screen reader users

4. **Local AI integration**: Running lightweight language models in-browser 
   for suggestions without sending data to external APIs

## Ecosystem and engagement

Target users:
- Permanent education organizations (Belgium, France)
- Trade unions and social movements
- Environmental advocacy groups
- Human rights NGOs
- Citizen collectives and neighborhood associations

Engagement strategy:
- Partnership with Commission Justice et Paix (methodology authors)
- Workshop pilot with Belgian anti-poverty networks (RWLP, BAPN)
- Presentation at civic tech events (FOSDEM Community track, Open Belgium)
- Integration with existing tools: export to Decidim, Action Network
- Open source community building on GitHub/Codeberg

The tool will be promoted through existing permanent education networks 
in Belgium (FWB-recognized organizations) who have established relationships 
with citizen groups and can provide training and accompaniment.
```

---

## 📎 PIÈCE JOINTE SUGGÉRÉE

Créer un PDF de 2-3 pages avec :
1. **Screenshots** de l'application (Dashboard, Cartographie acteurs, Kanban, Export)
2. **Schéma** de la méthodologie Voir-Juger-Agir
3. **Témoignage/lettre de soutien** de Justice et Paix (si obtenu)

---

## ⚠️ DÉCLARATION IA GÉNÉRATIVE

NLnet demande de déclarer l'usage d'IA. Réponse suggérée :

```
I have used generative AI in writing this proposal.

Model: Claude (Anthropic)
Usage: 
- Drafting and structuring the application text
- Technical architecture discussions during development
- Code assistance for the prototype development

The core methodology, user research, and strategic decisions are my own.
The AI was used as a writing and coding assistant, not for generating 
the project concept or technical approach.

[Optionnel: joindre ce fichier de conversation comme preuve de transparence]
```

---

## ✅ CHECKLIST AVANT SOUMISSION

- [ ] Accord de Justice et Paix pour le portage administratif
- [ ] Décision sur la licence (passage en AGPL-3.0 ?)
- [ ] Création du repo GitHub/Codeberg public
- [ ] Hébergement de la démo (GitHub Pages, Netlify)
- [ ] Relecture du formulaire
- [ ] Préparation des screenshots pour la pièce jointe
- [ ] Soumission avant le 1er février 12h00 CET

---

## 📧 CONTACT NLNET

En cas de doute, NLnet propose un **Office Hour** mensuel (dernier mercredi du mois, 16h CET) sur Matrix : https://matrix.to/#/#nlnet:matrix.org

Tu peux aussi écrire directement à : proposals@nlnet.nl

---

## 💡 CONSEILS FINAUX

1. **Sois concis** — NLnet reçoit des centaines de candidatures, ils apprécient la clarté
2. **Sois technique** — Ils financent des développeurs, pas du marketing
3. **Montre le prototype** — Tu as un énorme avantage avec un outil déjà fonctionnel
4. **Mentionne l'alignement NGI** — "Data sovereignty", "offline-first", "no vendor lock-in" sont des mots-clés importants
5. **Budget réaliste** — 15k€ pour une première demande est bien, tu pourras demander plus ensuite

Bonne chance ! 🍀
