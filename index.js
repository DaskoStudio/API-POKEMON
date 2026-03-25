const express = require('express');
let pokemons = require('./db-pokemons');
let helper = require('./helper');

const app = express();
const PORT = process.env.PORT || 3003;

// Middleware pour parser les requêtes JSON
app.use(express.json());

// Route pour l'accueil
app.get('/', (req, res) => {
    res.send(`<h3>Hello, YBoosST TEAM !</h3>`);
});

// Route pour voir TOUS les pokemons
app.get('/api/pokemons', (req, res) => {
    const message = `List of ${pokemons.length} * pokemons`;
    res.json( helper.success(message, pokemons) );    
});

// Route pour voir UN pokemon précis par son ID
app.get('/api/pokemons/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const pokemon = pokemons.find( pokemon=> pokemon.id === id );
    const message = "One pokemon is founded !";
    res.json( helper.success(message, pokemon) );
});

// Route pour ajouter un nouveau pokemon
app.post('/api/pokemons', (req, res) => {
    const id = pokemons.length === 0 ? 1 : Math.max(...pokemons.map(p => p.id)) + 1;
    const pokemonCreated = { ...req.body, id: id, created: new Date() };
    pokemons.push(pokemonCreated);
    
    const message = 'Le pokemon a bien été créé.';
    res.json( helper.success(message, pokemonCreated) );
});

// Route pour modifier un pokemon
app.put('/api/pokemons/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const index = pokemons.findIndex(pokemon => pokemon.id === id);

    if (index !== -1) {
        // Fusionne les données existantes avec les nouvelles données (tout en forçant l'ID d'origine)
        pokemons[index] = { ...pokemons[index], ...req.body, id: id };
        
        const message = 'Le pokemon a bien été modifié.';
        res.json( helper.success(message, pokemons[index]) );
    }
});

// Route pour supprimer un pokemon
app.delete('/api/pokemons/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const pokemonDeleted = pokemons.find(pokemon => pokemon.id === id);
    
    if (pokemonDeleted) {
        pokemons = pokemons.filter(pokemon => pokemon.id !== id);
        const message = 'Le pokemon a bien été supprimé.';
        res.json( helper.success(message, pokemonDeleted) );
    } else {
        const message = "Le pokémon demandé n'existe pas. Réessayez avec un autre identifiant.";
        res.status(404).json({ message });
    }
});

app.listen(PORT, () => {
    console.log(`Server listening on http://localhost:${PORT}`);
});