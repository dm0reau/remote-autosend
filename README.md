# Remote mail auto

Petit script permettant l'envoi automatique du mail pour le télétravail.

## Installation

Vous devez avoir [NodeJS](https://nodejs.org/en/) d'installé.
Ensuite, lancez `npm install`.

## Configuration

Copiez le fichier _config-sample.json_ dans un nouveau fichier _config.json_, puis éditez-le.

## Exécution

Lancez le script via la commande `node index.js`. Par défaut, le jour de télétravail indiqué est celui
de demain. Il est possible de le changer via ces possibilités :

```
# Pour demain (par défaut)
node index.js tomorrow
# Pour aujourd'hui
node index.js today
# Pour le 30 janvier 2019
node index.js 2019-01-30
```

## Contenu du mail

Il est possible de modifier le contenu du mail envoyé en éditant le fichier _mail.ejs_.
