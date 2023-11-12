# Projet : petit jeu de regex

## Introduction
Dans le cadre de ce projet, nous allons développer un petit jeu offrant à l'utilisateur d'encoder un texte de son choix ainsi qu'une RegEx, et de tester automatiquement si le texte encodé valide la RegEx.

Nous aurons besoin
- d'un textarea pour la zone permettant d'encoder un texte libre,
- d'un input de type texte pour la zone permettant d'encoder une expression rationnelle.
- d'une zone dans laquelle on reportera
  - la regex encodée
  - et une phrase indiquant si le texte encodé correspond (en vert) ou non (en rouge) au texte encodé.
 
Lorsqu'on arrive sur la page, les zones sont pré-remplies pour correspondre à l'exemple ci-dessous.  
On aura besoin de capturer les évènements d'input sur les deux zones de saisie pour modifier dynamiquement le contenu de la zone inférieure.  
On utilisera la méthode test associée à la regex.

## Exemple
![exemple d'écran du projet fini](./exemple.png)
