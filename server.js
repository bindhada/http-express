const express = require("express");

const app = express();

const PORT = 3000;

const videoGames = {
  title: "My Favorite Video Games",
  categories: {
    genre: ["Action", "Adventure", "RPG"],
    characters: ["Mario", "Link", "Kirby"],
    levels: ["World 1", "Hyrule", "Green Hill Zone"]
  },
  lastUpdated: new Date().toISOString().split("T")[0]
};

// 200 if successful, 404 if the route does not exist.
app.get("/", (req, res) => {
  res.send("Welcome to my video game server!");
});

// 200 if successful, 404 if the route does not exist.
app.get("/games", (req, res) => {
  res.json(videoGames);
});

// 200 if successful, 404 if the route does not exist.
app.get("/about", (req, res) => {
  res.status(200).json({
    title: "Video Games",
    description: "Video games are interactive digital experiences played for entertainment.",
    founded: "1970s",
    funFact: "The first commercially successful home video game console was the Magnavox Odyssey."
  });
});

// 200 if successful, 404 if the route does not exist.
app.get("/message", (req, res) => {
  // res.send is useful here because this route only needs to return simple plain text.
  res.send("Video games bring stories, challenges, and fun to players!");
});

// 503 because the server is intentionally unavailable for maintenance.
app.get("/maintenance", (req, res) => {
  res.status(503).send("We're down for maintenance, check back soon!");
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
