# Mon Projet

Ce projet est une application web qui permet aux utilisateurs de créer et de télécharger des PDF basés sur différents modèles. Il a été réalisé dans le cadre d'un projet à l'école HETIC en deuxième année WEB2. Les technologies utilisées sont Node.js, React et MySQL.

## Installation

Pour installer ce projet, suivez les étapes suivantes :

1. Clonez le dépôt :

```git clone git@github.com:Feydai/TP-API-PDF.git```

2. Naviguez vers le répertoire du projet :

```cd TP-API-PDF```

3. Assurez-vous qu'un fichier `.env` existe à la racine du projet. Ce fichier doit contenir toutes les variables d'environnement nécessaires pour exécuter l'application. Si le fichier `.env` n'existe pas, créez-en un avec le contenu suivant dans la racine du projet :

`DB_HOST=db DB_USER=myuser
DB_PASSWORD=myuser123456@!
DB_NAME=pdf_database`

## Utilisation avec Docker Compose

Si vous avez Docker Compose installé, vous pouvez utiliser Docker Compose pour lancer l'application. Voici comment faire :

1. Construisez et lancez les conteneurs Docker :

```docker-compose up --build```

Maintenant, l'application devrait être accessible à 

`http://localhost:3000`.
