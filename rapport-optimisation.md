# Rapport d'optimisation du projet ScrollyTelling
[Page Speed Insights - Rapport du 12 mai 2024, 14h23:08](https://pagespeed.web.dev/analysis/https-audrey-tim-momo-com/ei1p3wybmr?form_factor=mobile)

## Problème #1
### Diffusez des images aux formats nouvelle génération
Les fichiers PNG et JPEG sont souvent moins compressibles et rendent le processus plus lent. Des économies potentielles seraient calculées avec des formats AVIF ou WebP.

### Action concrète pour resoudre le problème
3 fichiers PNG existent dans le projet et ceux-ci devraient être modifiés pour avoir un format web.

Les trois fichiers sont eau_ocean.png, bulles.png et sable.png. Je vais prendre des fichiers svg à la place de ceux-ci.

### Résultat
J'ai réussi à exporter à nouveau mes images en fichier SVG cette fois-ci et j'ai remplacé dans les liens les fichiers PNG pour les nouveaux fichiers au format web.

## Problème #2
### Des éléments d'image n'ont pas d'attribut [alt]
Un fichier ne comprend pas de texte alternatif ce qui diminue l'accessibilité du site web.

### Action concrète pour resoudre le problème
Le fichier de l'icone ne contient pas de balise alt. Donc., je vais en créer une et inscrire la description de l'image dans sa valeur.

### Résultat
J'ai réussi à régler ce problème en ajoutant simplement une description de l'icone dans une balise alt. 

## Problème #3
### Le document ne contient pas d'attribut "meta description"
Le fichier html ne contient pas l'attribut meta name description. Cela amène le navigateur a ne pas pouvoir donner un résumé de notre site web aux clients.

### Action concrète pour resoudre le problème
Je vais ajouter dans le head cet attribut et inscrire un résumé de mon site web.

### Résultat
J'ai réussi à régler le problème en ajoutant cet atribut dans la section head. 

## Rapport projet ScrollyTelling après optimisation
[Page Speed Insights - Rapport du 12 mai 2024, 16h17:41](https://pagespeed.web.dev/analysis/https-audrey-tim-momo-com/lliui5hlje?form_factor=mobile)
