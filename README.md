# MEAN QS

## Création et utilisation d'un service Angular

Premièrement, créer un fichierr de service :

```
cd ANGclient

ng g s services/<folder-name>/<service-name>
```

Importer et déclarer le service dans le composant qui l'utilise (soit en global dans `app.module` soit dans le module d'un composant spécifique)

Ajouter les fonctions (Promise) dans le service pour contacter l'API (penser au requêtes HTTP)