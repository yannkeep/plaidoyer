# 🗳️ Plaidoyer Citoyen

**Une boîte à outils numérique pour transformer l'indignation en action politique.**

Application web progressive (PWA) qui guide les citoyens et associations dans la construction d'une stratégie de plaidoyer, de l'analyse du contexte jusqu'à l'évaluation des résultats.

[![Licence](https://img.shields.io/badge/licence-AGPL--3.0-blue.svg)](LICENSE)
[![PWA](https://img.shields.io/badge/PWA-offline--ready-green.svg)](#)
[![Status](https://img.shields.io/badge/status-beta-orange.svg)](#)

🔗 **[Essayer l'application](https://yannkeep.github.io/plaidoyer/index.html)** | 📖 **[Guide original (PDF)](https://www.justicepaix.be/le-petit-guide-du-plaidoyer-citoyen-15-outils-vers-le-changement/)**

---

## 🎯 Le problème

Face aux crises sociales, environnementales et économiques, beaucoup de citoyens veulent agir mais ne savent pas comment transformer leur indignation en changement concret. Le plaidoyer politique — l'art d'influencer les décisions publiques — reste un outil méconnu du grand public, souvent perçu comme réservé aux professionnels des ONG.

**Résultat :** des mobilisations dispersées, des messages mal ciblés, des énergies gaspillées.

## 💡 La solution

**Plaidoyer Citoyen** digitalise et rend accessible la méthodologie "Voir, Juger, Agir" développée par la Commission Justice et Paix Belgique. L'application guide pas à pas la construction d'une stratégie de plaidoyer efficace :

| Phase | Outils | Ce que ça permet |
|-------|--------|------------------|
| **👁️ VOIR** | Domino du changement, Profil personnel, Fleur de pouvoir, Cartographie des acteurs | Comprendre le contexte, identifier qui a le pouvoir, se connaître soi-même |
| **⚖️ JUGER** | Théorie du changement, SWOT, PESTEL, Arbre à problème, 5 Pourquoi | Analyser les rapports de force, identifier les fenêtres d'opportunité |
| **✊ AGIR** | Objectifs SMART, Cibles et alliances, Construction de message, Check-list, Suivi | Passer à l'action concrète, mesurer les résultats |

---

## ✨ Fonctionnalités

### Pour les citoyens
- **🚀 Zéro friction** — Aucune inscription, aucun compte, données stockées localement
- **📴 100% hors-ligne** — Fonctionne sans connexion internet (PWA)
- **📱 Mobile-first** — Conçu pour smartphone, adapté desktop
- **🎓 Pédagogique** — Aide contextuelle intégrée pour chaque outil
- **📊 Templates prêts à l'emploi** — Exemples concrets (climat, migrations, droits sociaux)

### Pour les associations
- **📤 Export multi-format** — JSON, PDF, Word, Excel
- **🔄 Import/Export** — Partage de projets entre équipes
- **📈 Tableau de bord** — Suivi de progression, statistiques
- **🌐 Multilingue** — Français (autres langues à venir)

### Pour les développeurs
- **📦 Single-file** — Une seule page HTML autonome (~100kb)
- **🔓 Open source** — Code lisible, modifiable, forkable
- **🛠️ Stack minimal** — Vanilla JS, IndexedDB, aucun framework
- **♿ Accessible** — Navigation clavier, contrastes respectés

---

## 🖼️ Aperçu

```
┌─────────────────────────────────────────────┐
│  ☰  Plaidoyer Citoyen            🔍  👁️   │
├─────────────────────────────────────────────┤
│                                             │
│  📋 Mon projet de plaidoyer                 │
│  ─────────────────────────────              │
│                                             │
│  Domino du changement                       │
│  ┌─────────────────────────────────────┐    │
│  │ Pourquoi voulons-nous nous engager? │    │
│  │ [________________________]          │    │
│  │                                     │    │
│  │ Quelles valeurs portons-nous?       │    │
│  │ [________________________]          │    │
│  └─────────────────────────────────────┘    │
│                                             │
│  Progression: ████████░░ 73%                │
│                                             │
├─────────────────────────────────────────────┤
│   👁️      ⚖️       ✊       🛠️            │
│  Voir   Juger    Agir    Outils             │
└─────────────────────────────────────────────┘
```

---

## 🚀 Démarrage rapide

### Utilisation en ligne
Cliquez simplement sur **[ce lien](https://yannkeep.github.io/plaidoyer/index.html)** — l'application se charge et fonctionne ensuite hors-ligne.

### Installation locale
```bash
# Cloner le dépôt
git clone https://github.com/[user]/plaidoyer-citoyen.git

# C'est tout ! Ouvrez index.html dans votre navigateur
open index.html
```

### Intégration sur votre site
```html
<!-- Option 1: iframe -->
<iframe src="plaidoyer.html" width="100%" height="800"></iframe>

<!-- Option 2: lien direct -->
<a href="plaidoyer.html">Accéder à l'outil de plaidoyer</a>
```

---

## 📚 Origine et crédits

Ce projet est une **adaptation numérique** du guide papier :

> **"Le petit guide du plaidoyer citoyen — 15 outils vers le changement"**  
> Commission Justice et Paix francophone de Belgique, 2020  
> Auteurs : Yvonne Clément, Clara Debeve, Timur Uluç, Anne-Claire Willocx

La méthodologie "Voir, Juger, Agir" est issue des travaux de **Joseph Cardijn** (1882-1967), fondateur de la JOC (Jeunesse Ouvrière Chrétienne).

### Ressources complémentaires
- [Guide original (PDF)](https://www.justicepaix.be/IMG/pdf/guide_plaidoyer_citoyen_2020_web.pdf)
- [Justice et Paix Belgique](https://www.justicepaix.be)
- [Étude "Actions citoyennes"](https://www.justicepaix.be/actionscitoyennes)

---

## 🤝 Contribuer

Les contributions sont bienvenues ! Voici comment aider :

### Signaler un bug ou proposer une amélioration
Ouvrez une [issue](../../issues) en décrivant :
- Ce que vous avez fait
- Ce qui s'est passé
- Ce que vous attendiez

### Proposer du code
1. Forkez le projet
2. Créez une branche (`git checkout -b feature/ma-fonctionnalite`)
3. Committez (`git commit -m 'Ajoute ma fonctionnalité'`)
4. Pushez (`git push origin feature/ma-fonctionnalite`)
5. Ouvrez une Pull Request

### Autres contributions précieuses
- 🌍 **Traduction** — Adapter l'interface en néerlandais, anglais, allemand...
- 📝 **Documentation** — Améliorer ce README, créer des tutoriels
- 🎨 **Design** — Proposer des améliorations UX/UI
- 📢 **Diffusion** — Parler du projet dans vos réseaux

---

## 📋 Roadmap

### v1.0 (actuel)
- [x] 15 outils du guide original
- [x] Stockage local (IndexedDB)
- [x] Export JSON/PDF
- [x] Mode hors-ligne (PWA)
- [x] Templates exemples

### v1.1 (prévu)
- [ ] Export Word/Excel amélioré
- [ ] Visualisation réseau d'acteurs (graphe interactif)
- [ ] Mode collaboratif (partage de projet par lien)
- [ ] Traduction NL/EN

### v2.0 (vision)
- [ ] Synchronisation cloud optionnelle (chiffrée)
- [ ] Bibliothèque de cas d'étude
- [ ] Intégration calendrier politique (échéances électorales, etc.)
- [ ] API pour intégration dans d'autres outils

---

## 📄 Licence

Ce projet est distribué sous licence **AGPL-3.0** — vous pouvez l'utiliser, le modifier et le redistribuer librement, à condition de :
- Garder la même licence pour les versions dérivées
- Citer l'origine (ce projet + le guide de Justice et Paix)
- Partager le code source de vos modifications

Le contenu pédagogique (textes d'aide, méthodologie) reste © Commission Justice et Paix Belgique, utilisé avec permission.

---

## 💬 Contact

- **Projet :** [Issues GitHub](../../issues)
- **Justice et Paix :** info@justicepaix.be
- **Développeur :** [à compléter]

---

## 🙏 Remerciements

- **Commission Justice et Paix Belgique** pour le guide original et l'autorisation d'adaptation
- **NLnet Foundation** / **NGI0 Commons Fund** [si financement obtenu]
- Tous les beta-testeurs et contributeurs

---

<div align="center">

**Fait avec ❤️ pour la démocratie participative**

*"Agir collectivement est la clé de toute stratégie de plaidoyer."*  
— Le petit guide du plaidoyer citoyen

</div>
