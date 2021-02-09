---
title: Rendre WordPress plus vert !
description: Après avoir présenté les principes notables de l’éco-conception web, place à plus de détails. Voici les grandes lignes de mon approche pour éco-concevoir un site web avec WordPress à chaque étape d’un projet.
tag: ['WebDesign', 'WordPress','Eco-conception']
---


Nous l’avons vu, le concept clé de l’éco-conception est l’efficience : utiliser un minimum de ressources pour produire un résultat. Afin de tendre vers la meilleure efficience possible, on s’inscrit dans une démarche de sobriété fonctionnelle et technique. Cette démarche doit se situer au cœur du projet et à chacune de ses étapes pour apporter les meilleurs résultats possible.

## **Recueil des besoins**

**Accompagner le client pour lui permettre une communication pertinente en accordant les moyens mis en œuvre avec les buts**.

En premier lieu, il s’agit de présenter au client les enjeux de l’éco-conception numérique et de lui expliquer l’impact de ses choix au niveau environnemental. Cette étape demeure primordiale, établir clairement la liste des besoins du client et définir ses objectifs sur le web permettent un choix de fonctionnalités adaptées aux besoins réels.   
L’efficience ultime d’une page web serait un texte blanc sur fond noir. Pas de mise en forme, du pur HTML. Le site du client deviendrait particulièrement sobre, mais personne ne s’y attarderait. Ce n’est ni efficace, ni pertinent.  
Communiquer sur le web c’est également respecter certains canons esthétiques et inscrire son message dans univers graphique fluctuant. Ne pas respecter ces codes c’est prendre le risque de ne pas être vu (l’inverse est aussi vrai : le conformisme peut rendre identique, voire indistinct).  
Communiquer en étant éco-responsable c’est donc être visible et reconnu à l’aide d’une économie des moyens mis en œuvre (peu ou pas de superflus) en accord avec des principes écologiques.  
**Connaître les tendances du design, leurs mises en œuvre techniques, mais aussi ce qu’elles impliquent en termes de consommation de ressources** : voici pour moi l’aspect fondamental de mon travail.

## Conception graphique

**L’éco-conception digitale est avant tout une démarche de design web**. Elle rejoint des méthodes propres à l’UX design et apporte une meilleure expérience utilisateur. Faire des choix de sobriété fonctionnelle permet de se concentrer sur la qualité des services proposés afin de convaincre l’utilisateur.  
On peut prendre l’exemple des polices web, Google Fonts notamment. Celles-ci sont désormais partout et ne sont pas toujours utilisées à bon escient. De plus, leur poids et leur chargement ont un impact non négligeable sur le bilan carbone d’un site web. Dans le cadre d’une démarche d’éco-conception radicale, on peut s’en passer et utiliser les polices système (ce qui nous ramène à un temps que les moins de 30 ans…)  
De prime abord, cette radicalité n’augure rien de bon quant à la qualité du design. Cependant, en maitrisant les règles de la composition typographique (composition, graisses, taille et espacement des caractères) on peut produire des maquettes tout à fait convaincantes avec les moyens du bord (les polices présentes sur l’ordinateur de l’utilisateur). Il est possible d’intégrer ces choix graphiques en utilisant la palette de propriétés CSS relative à la typo, bien souvent ignorée des développeurs (letter-spacing etc).  
Évidemment, il faut composer avec les exigences du client, il peut posséder une charte graphique ou avoir des besoins très spécifiques. Il faudra dans ce cas, échanger et l’accompagner vers les solutions les plus vertueuses en matière d’environnement.

## Mise en œuvre

### WordPress

Idéalement, le site consommant le moins de ressources possible serait un site statique en HTML/css, avec peu d’images et ne chargeant pas de ressources externes. C’est très low tech, mais en termes de maintenance pour le client plus que limité. La JAMstack nous offre une autre piste intéressante. Dynamisme coté serveur pour délivrer une page statique au client (SSR). Je reviendrais sur la JAMstack. Enfin, on peut considérer qu’il vaut mieux améliorer l’existant, car cela offre un levier plus important pour réduire l’impact environnemental du numérique. C’est le choix que j’ai fait. WordPress représente actuellement plus d’un tiers des sites web mondiaux. Ce CMS offre de nombreux atouts : autonomie des clients dans la mise à jour de leurs sites, une infinité d’options de personnalisation et d’outils. Cependant WordPress n’a pas bonne réputation en termes de performance et d’efficience. J’aurais tendance à penser l’inverse. Il est tout à fait possible d’optimiser WordPress et d’améliorer significativement son bilan carbone. Cela suppose de bien choisir ces outils et notamment son thème.   
Je travaille avec le thème [GeneratePress](https://generatepress.com) qui est un framework extrêmement personnalisable, et très bien codé. Il ne possède pas de dépendance, il ne charge ni jQuery ni Font Awesome ni de polices web. Cela lui permet d’être très léger et d’afficher rapidement les pages web (beaucoup de thèmes WordPress se targuent de vitesse alors qu’ils sont surgonflés).  
GeneratePress étant un framework, les possibilités de personnalisation et d’optimisation du code sont très poussées. On peut quasiment tout faire avec lui.

### Code

Un code éco-conçu est un code qui répond à trois principes : simplicité, concision et performance.  
**Simplicité sémantique** au niveau du HTML afin de limiter les éléments du DOM et de moins solliciter le CPU. On cherchera des alternatives au div de div de div.  
**Concision du CSS** notamment : en évitant les redites, en utilisant les propriétés raccourcies et en ciblant précisément les sélecteurs on allégera le poids du site.  
**Performance**, privilégier le CSS pour les animations en préférant agir sur les propriétés les moins gourmandes en énergie : translate, scale, rotate et opacity.  
Quand le CSS n’est pas possible, il est préférable d’utiliser du JavaScript qui est lu nativement par les navigateurs plutôt que de charger une bibliothèque externe (on peut tout faire sans jQuery). Cependant, dans certains cas, une bibliothèque externe pourra permettre un gain de performance, même par rapport à du pur CSS. Évidemment, il faudra livrer le code le plus Dry possible, exempt d’erreurs, tout en restant maintenable. 

### Plugins

Mon premier critère pour choisir une extension WordPress va être son **absence de dépendance**.  
J’ai le souci de limiter le nombre de requêtes, mais aussi d’éviter l’inflation de ligne de code à travers le chargement d’une bibliothèque dont on utilise seulement une petite partie. C’est pourquoi je cherche à ne pas utiliser jQuery (le JavaScript fait tout aussi bien le travail et est lu nativement par les navigateurs) ni Font Awesome (des sprites SVG, via quelques bidouilles pour s’afficher dans WordPress, fonctionnent très bien, sont plus légers et, cerises sur le gâteau, sont plus vertueux en termes d’accessibilité). Pour les polices, sauf mention dans charte graphique du client, je n’ai pas recours aux Google font. Le texte sera affiché avec la police de l’OS du client.  
Mon second critère est le **nombre de requêtes** faites pas le plugin à la base de données. Je fais cette mesure avec Query Monitor (qui certes charge jQuery, mais je n’emploie cette extension qu’en phase de production).  
Ces critères m’ont fait délaisser certains plugin TRÈS utilisés et qui pourtant ont recours à des moyens colossaux pour accoucher d’une souris (contact form 7 est l’exemple le plus emblématique). À la place : soit un autre plugin, soit DIY (mais une fois que c’est fait, c’est réutilisable).  
Pour accélérer mes pages et réduire leur poids et le nombre de requêtes serveur, j’ai recours à  :  
• un plugin d’**optimisation des images** (qui limite aussi leur taille et les recadre si le client en charge une très grande). Les images représentent en moyenne un quart du poids d’une page web. J’active par ailleurs le lazy loading.  
• Un plugin de **minification du css, du HTML et du JavaScript** qui supprime également le chargement des emoticons et autres fioritures de WordPress dont je n’ai pas besoin.  
• Un plugin de **mise en cache**.  
Au final, si j’ai travaillé proprement mes sites sont rapides et s’en sortent haut la main lors de la série de tests auxquels je les soumets.

### Tests

Pour chaque page, j’utilise des outils de test de la vitesse très répandus comme GTmetrix ou Google insight.  
Il existe également des outils qui permettent de mesurer les performances environnementales :  
• [http://www.ecoindex.fr](http://www.ecoindex.fr)  
• [http://www.ecometer.org](http://www.ecometer.org)  
On peut retrouver ces deux derniers sous forme d’une extension (chrome uniquement) pour auditeur ses sites même en travaillant sur un serveur local. Enfin, cette extension (Firefox uniquement) mesure l’empreinte carbone d’un site au cours d’une visite.