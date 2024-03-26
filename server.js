import express from "express";
// Middleware per gestire i dati inviati nel corpo della richiesta
const bodyParser = require("body-parser");
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware per parsare il corpo della richiesta in formato JSON
app.use(bodyParser.json());

let data = [
  {
    id: 1,
    name: "Jean",
    location: "Monstadt",
    jp_voice_actor: "Manaka Iwami",
    en_voice_actor: "Kelly Baskin",
    description: `Una ragazza vivace e diretta, nonché la Vigilante dei Cavalieri di Favonius.
    <br /> Grazie alle sue grandi abilità nell'uso dell'aliante, è tre
    volte campionessa di volo a vela di Mondstadt.
    <br /> Stella nascente dei Cavalieri di Favonius, Jean è sempre pronta per qualsiasi missione, facile o difficile che sia.`,
    element: "./src/assets/elements/Pyro.png",
    img_fullart: "./src/assets/character/Jean.png",
    img_avatar: "./src/assets/character/profile/Jean-profile.png",
  },
  {
    id: 2,
    name: "Amber",
    location: "Monstadt",
    jp_voice_actor: "Manaka Iwami",
    en_voice_actor: "Kelly Baskin",
    description: `Una ragazza vivace e diretta, nonché la Vigilante dei Cavalieri di Favonius.
    <br /> Grazie alle sue grandi abilità nell'uso dell'aliante, è tre
    volte campionessa di volo a vela di Mondstadt.
    <br /> Stella nascente dei Cavalieri di Favonius, Amber è sempre pronta per qualsiasi missione, facile o difficile che sia.`,
    element: "./src/assets/elements/Pyro.png",
    img_fullart: "./src/assets/character/Amber.png",
    img_avatar: "./src/assets/character/profile/Amber-profile.png",
  },
  {
    id: 3,
    name: "Lisa",
    location: "Monstadt",
    jp_voice_actor: "Manaka Iwami",
    en_voice_actor: "Kelly Baskin",
    description: `Una ragazza vivace e diretta, nonché la Vigilante dei Cavalieri di Favonius.
    <br /> Grazie alle sue grandi abilità nell'uso dell'aliante, è tre
    volte campionessa di volo a vela di Mondstadt.
    <br /> Stella nascente dei Cavalieri di Favonius, Lisa è sempre pronta per qualsiasi missione, facile o difficile che sia.`,
    element: "./src/assets/elements/Pyro.png",
    img_fullart: "./src/assets/character/Lisa.png",
    img_avatar: "./src/assets/character/profile/Lisa-profile.png",
  },
  {
    id: 4,
    name: "Kaeya",
    location: "Monstadt",
    jp_voice_actor: "Manaka Iwami",
    en_voice_actor: "Kelly Baskin",
    description: `Una ragazza vivace e diretta, nonché la Vigilante dei Cavalieri di Favonius.
    <br /> Grazie alle sue grandi abilità nell'uso dell'aliante, è tre
    volte campionessa di volo a vela di Mondstadt.
    <br /> Stella nascente dei Cavalieri di Favonius, Kaeya è sempre pronta per qualsiasi missione, facile o difficile che sia.`,
    element: "./src/assets/elements/Pyro.png",
    img_fullart: "./src/assets/character/Kaeya.png",
    img_avatar: "./src/assets/character/profile/Kaeya-profile.png",
  },
  {
    id: 5,
    name: "Barbara",
    location: "Monstadt",
    jp_voice_actor: "Manaka Iwami",
    en_voice_actor: "Kelly Baskin",
    description: `Una ragazza vivace e diretta, nonché la Vigilante dei Cavalieri di Favonius.
    <br /> Grazie alle sue grandi abilità nell'uso dell'aliante, è tre
    volte campionessa di volo a vela di Mondstadt.
    <br /> Stella nascente dei Cavalieri di Favonius, Barbara è sempre pronta per qualsiasi missione, facile o difficile che sia.`,
    element: "./src/assets/elements/Pyro.png",
    img_fullart: "./src/assets/character/Barbara.png",
    img_avatar: "./src/assets/character/profile/Barbara-profile.png",
  },
  {
    id: 6,
    name: "Diluc",
    location: "Monstadt",
    jp_voice_actor: "Manaka Iwami",
    en_voice_actor: "Kelly Baskin",
    description: `Una ragazza vivace e diretta, nonché la Vigilante dei Cavalieri di Favonius.
    <br /> Grazie alle sue grandi abilità nell'uso dell'aliante, è tre
    volte campionessa di volo a vela di Mondstadt.
    <br /> Stella nascente dei Cavalieri di Favonius, Diluc è sempre pronta per qualsiasi missione, facile o difficile che sia.`,
    element: "./src/assets/elements/Pyro.png",
    img_fullart: "./src/assets/character/Diluc.png",
    img_avatar: "./src/assets/character/profile/Diluc-profile.png",
  },
  {
    id: 7,
    name: "Razor",
    location: "Monstadt",
    jp_voice_actor: "Manaka Iwami",
    en_voice_actor: "Kelly Baskin",
    description: `Una ragazza vivace e diretta, nonché la Vigilante dei Cavalieri di Favonius.
    <br /> Grazie alle sue grandi abilità nell'uso dell'aliante, è tre
    volte campionessa di volo a vela di Mondstadt.
    <br /> Stella nascente dei Cavalieri di Favonius, Razor è sempre pronta per qualsiasi missione, facile o difficile che sia.`,
    element: "./src/assets/elements/Pyro.png",
    img_fullart: "./src/assets/character/Razor.png",
    img_avatar: "./src/assets/character/profile/Razor-profile.png",
  },
  {
    id: 8,
    name: "Venti",
    location: "Monstadt",
    jp_voice_actor: "Manaka Iwami",
    en_voice_actor: "Kelly Baskin",
    description: `Una ragazza vivace e diretta, nonché la Vigilante dei Cavalieri di Favonius.
    <br /> Grazie alle sue grandi abilità nell'uso dell'aliante, è tre
    volte campionessa di volo a vela di Mondstadt.
    <br /> Stella nascente dei Cavalieri di Favonius, Venti è sempre pronta per qualsiasi missione, facile o difficile che sia.`,
    element: "./src/assets/elements/Pyro.png",
    img_fullart: "./src/assets/character/Venti.png",
    img_avatar: "./src/assets/character/profile/Venti-profile.png",
  },
  {
    id: 9,
    name: "Klee",
    location: "Monstadt",
    jp_voice_actor: "Manaka Iwami",
    en_voice_actor: "Kelly Baskin",
    description: `Una ragazza vivace e diretta, nonché la Vigilante dei Cavalieri di Favonius.
    <br /> Grazie alle sue grandi abilità nell'uso dell'aliante, è tre
    volte campionessa di volo a vela di Mondstadt.
    <br /> Stella nascente dei Cavalieri di Favonius, Klee è sempre pronta per qualsiasi missione, facile o difficile che sia.`,
    element: "./src/assets/elements/Pyro.png",
    img_fullart: "./src/assets/character/Klee.png",
    img_avatar: "./src/assets/character/profile/Klee-profile.png",
  },
  {
    id: 10,
    name: "Bennett",
    location: "Monstadt",
    jp_voice_actor: "Manaka Iwami",
    en_voice_actor: "Kelly Baskin",
    description: `Una ragazza vivace e diretta, nonché la Vigilante dei Cavalieri di Favonius.
    <br /> Grazie alle sue grandi abilità nell'uso dell'aliante, è tre
    volte campionessa di volo a vela di Mondstadt.
    <br /> Stella nascente dei Cavalieri di Favonius, Bennett è sempre pronta per qualsiasi missione, facile o difficile che sia.`,
    element: "./src/assets/elements/Pyro.png",
    img_fullart: "./src/assets/character/Bennett.png",
    img_avatar: "./src/assets/character/profile/Bennett-profile.png",
  },
  {
    id: 11,
    name: "Noelle",
    location: "Monstadt",
    jp_voice_actor: "Manaka Iwami",
    en_voice_actor: "Kelly Baskin",
    description: `Una ragazza vivace e diretta, nonché la Vigilante dei Cavalieri di Favonius.
    <br /> Grazie alle sue grandi abilità nell'uso dell'aliante, è tre
    volte campionessa di volo a vela di Mondstadt.
    <br /> Stella nascente dei Cavalieri di Favonius, Noelle è sempre pronta per qualsiasi missione, facile o difficile che sia.`,
    element: "./src/assets/elements/Pyro.png",
    img_fullart: "./src/assets/character/Noelle.png",
    img_avatar: "./src/assets/character/profile/Noelle-profile.png",
  },
  {
    id: 12,
    name: "Fischl",
    location: "Monstadt",
    jp_voice_actor: "Manaka Iwami",
    en_voice_actor: "Kelly Baskin",
    description: `Una ragazza vivace e diretta, nonché la Vigilante dei Cavalieri di Favonius.
    <br /> Grazie alle sue grandi abilità nell'uso dell'aliante, è tre
    volte campionessa di volo a vela di Mondstadt.
    <br /> Stella nascente dei Cavalieri di Favonius, Fischl è sempre pronta per qualsiasi missione, facile o difficile che sia.`,
    element: "./src/assets/elements/Pyro.png",
    img_fullart: "./src/assets/character/Fischl.png",
    img_avatar: "./src/assets/character/profile/Fischl-profile.png",
  },
  {
    id: 13,
    name: "Sucrose",
    location: "Monstadt",
    jp_voice_actor: "Manaka Iwami",
    en_voice_actor: "Kelly Baskin",
    description: `Una ragazza vivace e diretta, nonché la Vigilante dei Cavalieri di Favonius.
    <br /> Grazie alle sue grandi abilità nell'uso dell'aliante, è tre
    volte campionessa di volo a vela di Mondstadt.
    <br /> Stella nascente dei Cavalieri di Favonius, Sucrose è sempre pronta per qualsiasi missione, facile o difficile che sia.`,
    element: "./src/assets/elements/Pyro.png",
    img_fullart: "./src/assets/character/Sucrose.png",
    img_avatar: "./src/assets/character/profile/Sucrose-profile.png",
  },
  {
    id: 14,
    name: "Mona",
    location: "Monstadt",
    jp_voice_actor: "Manaka Iwami",
    en_voice_actor: "Kelly Baskin",
    description: `Una ragazza vivace e diretta, nonché la Vigilante dei Cavalieri di Favonius.
    <br /> Grazie alle sue grandi abilità nell'uso dell'aliante, è tre
    volte campionessa di volo a vela di Mondstadt.
    <br /> Stella nascente dei Cavalieri di Favonius, Mona è sempre pronta per qualsiasi missione, facile o difficile che sia.`,
    element: "./src/assets/elements/Pyro.png",
    img_fullart: "./src/assets/character/Mona.png",
    img_avatar: "./src/assets/character/profile/Mona-profile.png",
  },
  {
    id: 15,
    name: "Diona",
    location: "Monstadt",
    jp_voice_actor: "Manaka Iwami",
    en_voice_actor: "Kelly Baskin",
    description: `Una ragazza vivace e diretta, nonché la Vigilante dei Cavalieri di Favonius.
    <br /> Grazie alle sue grandi abilità nell'uso dell'aliante, è tre
    volte campionessa di volo a vela di Mondstadt.
    <br /> Stella nascente dei Cavalieri di Favonius, Diona è sempre pronta per qualsiasi missione, facile o difficile che sia.`,
    element: "./src/assets/elements/Pyro.png",
    img_fullart: "./src/assets/character/Diona.png",
    img_avatar: "./src/assets/character/profile/Diona-profile.png",
  },
  {
    id: 16,
    name: "Albedo",
    location: "Monstadt",
    jp_voice_actor: "Manaka Iwami",
    en_voice_actor: "Kelly Baskin",
    description: `Una ragazza vivace e diretta, nonché la Vigilante dei Cavalieri di Favonius.
    <br /> Grazie alle sue grandi abilità nell'uso dell'aliante, è tre
    volte campionessa di volo a vela di Mondstadt.
    <br /> Stella nascente dei Cavalieri di Favonius, Albedo è sempre pronta per qualsiasi missione, facile o difficile che sia.`,
    element: "./src/assets/elements/Pyro.png",
    img_fullart: "./src/assets/character/Albedo.png",
    img_avatar: "./src/assets/character/profile/Albedo-profile.png",
  },
  {
    id: 17,
    name: "Rosaria",
    location: "Monstadt",
    jp_voice_actor: "Manaka Iwami",
    en_voice_actor: "Kelly Baskin",
    description: `Una ragazza vivace e diretta, nonché la Vigilante dei Cavalieri di Favonius.
    <br /> Grazie alle sue grandi abilità nell'uso dell'aliante, è tre
    volte campionessa di volo a vela di Mondstadt.
    <br /> Stella nascente dei Cavalieri di Favonius, Rosaria è sempre pronta per qualsiasi missione, facile o difficile che sia.`,
    element: "./src/assets/elements/Pyro.png",
    img_fullart: "./src/assets/character/Rosaria.png",
    img_avatar: "./src/assets/character/profile/Rosaria-profile.png",
  },
  {
    id: 18,
    name: "Eula",
    location: "Monstadt",
    jp_voice_actor: "Manaka Iwami",
    en_voice_actor: "Kelly Baskin",
    description: `Una ragazza vivace e diretta, nonché la Vigilante dei Cavalieri di Favonius.
    <br /> Grazie alle sue grandi abilità nell'uso dell'aliante, è tre
    volte campionessa di volo a vela di Mondstadt.
    <br /> Stella nascente dei Cavalieri di Favonius, Eula è sempre pronta per qualsiasi missione, facile o difficile che sia.`,
    element: "./src/assets/elements/Pyro.png",
    img_fullart: "./src/assets/character/Eula.png",
    img_avatar: "./src/assets/character/profile/Eula-profile.png",
  }
];

// Rotta per ottenere tutti i dati
app.get("/api/dati", (req, res) => {
  res.json(data);
});

// Rotta per ottenere un dato specifico
app.get("/api/dati/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const item = data.find((item) => item.id === id);
  if (item) {
    res.json(item);
  } else {
    res.status(404).json({ message: "Dato non trovato" });
  }
});
