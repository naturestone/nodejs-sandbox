# NodeJS Basics (Sandbox)

## Einrichten der eigenen Umgebung

### Installation prüfen

```sh
node -v
npm -v
```

## Downloads

- <https://nodejs.org/en/download/>

### Update `npm`

```sh
sudo npm install npm -g    # Install globally
```

## Anwendung erstellen

```sh
mkdir myapp         # Neues Verzeichnis erstellen
mkdir myapp/src     # Unterverzeichnis für js-Skripte
mkdir myapp/bin     # Unterverzeichnis für sh-Skripte
cd myapp            # Springe in Anwendungsverzeichnis
npm create          # Interaktiver Modus
```

Das erste Programm:

```sh
echo "console.log('Hallo Welt');" > src/app.js
node src/app.js
```
