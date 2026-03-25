# API Pokémon

Une API RESTful construite avec Node.js et Express, accompagnée d'une **interface web Frontend** conviviale pour visualiser et filtrer une collection de Pokémons.

Ce projet est une démonstration basique des opérations CRUD (Create, Read, Update, Delete) sans connexion à une base de données. Les données sont stockées en mémoire et sont réinitialisées à chaque redémarrage du serveur.

## 🚀 Démo en ligne

Le projet (Frontend + Backend API) est déployé et accessible publiquement sur Vercel :
**[👉 Visiter le Pokédex en ligne](https://api-pokemon-green.vercel.app/)**

## Prérequis

- [Node.js](https://nodejs.org/) (version 14 ou supérieure)
- npm (généralement inclus avec Node.js)

## Installation et Lancement

1.  Clonez ce dépôt sur votre machine locale :
    ```bash
    git clone https://github.com/DaskoStudio/API-POKEMON.git
    ```

2.  Naviguez dans le dossier du projet :
    ```bash
    cd API-POKEMON
    ```

3.  Installez les dépendances nécessaires :
    ```bash
    npm install
    ```

4.  Démarrez le serveur :
    ```bash
    node index.js
    ```

Le serveur sera alors accessible à l'adresse `http://localhost:3003`. 

**Nouveauté :** En vous rendant sur cette URL depuis votre navigateur, vous accéderez directement à l'interface graphique du Pokédex permettant de visualiser les cartes de chaque Pokémon et de les rechercher par nom !

## Endpoints de l'API

L'API expose les routes suivantes :

### `GET /api/pokemons`

Retourne la liste complète de tous les Pokémons.

-   **Réponse de succès (200)** :
    ```json
    {
      "message": "List of 12 * pokemons",
      "data": [
        {
          "id": 1,
          "name": "Bulbizarre",
          "hp": 25,
          "cp": 5,
          "picture": "https://...",
          "types": ["Plante", "Poison"],
          "created": "..."
        }
      ]
    }
    ```

### `GET /api/pokemons/:id`

Retourne un Pokémon spécifique en fonction de son `id`.

-   **Exemple d'URL** : `/api/pokemons/1`
-   **Réponse de succès (200)** :
    ```json
    {
      "message": "One pokemon is founded !",
      "data": {
        "id": 1,
        "name": "Bulbizarre"
      }
    }
    ```
-   **Réponse d'erreur (404)** si l'ID n'est pas trouvé.

### `POST /api/pokemons`

Crée un nouveau Pokémon. Les données doivent être envoyées au format JSON dans le corps de la requête.

-   **Corps de la requête (Body)** :
    ```json
    {
      "name": "Nouveau Pokémon",
      "hp": 50,
      "cp": 10,
      "picture": "http://example.com/image.png",
      "types": ["Fée"]
    }
    ```

### `PUT /api/pokemons/:id`

Met à jour un Pokémon existant. Les champs à modifier doivent être envoyés au format JSON dans le corps de la requête.

-   **Exemple d'URL** : `/api/pokemons/1`
-   **Corps de la requête (Body)** :
    ```json
    {
      "hp": 30
    }
    ```

### `DELETE /api/pokemons/:id`

Supprime un Pokémon spécifique en fonction de son `id`.

-   **Exemple d'URL** : `/api/pokemons/1`
-   **Réponse de succès (200)** avec les données du Pokémon supprimé.
-   **Réponse d'erreur (404)** si l'ID n'est pas trouvé.

## Outils

Pour tester les endpoints, vous pouvez utiliser des outils comme Postman ou l'extension Thunder Client pour VS Code.