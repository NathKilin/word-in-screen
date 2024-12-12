const jokes = [
    {
      baseline: "Why don’t skeletons fight each other?",
      punchline: "They don’t have the guts.",
    },
    {
      baseline: "What do you call cheese that isn't yours?",
      punchline: "Nacho cheese.",
    },
    {
      baseline: "Why couldn’t the bicycle stand up by itself?",
      punchline: "It was two tired.",
    },
    { baseline: "What do you call a fake noodle?", punchline: "An impasta." },
    { baseline: "Why don’t eggs tell jokes?", punchline: "They might crack up." },
    {
      baseline: "How does a penguin build its house?",
      punchline: "Igloos it together.",
    },
    { baseline: "What do you call bears with no ears?", punchline: "B." },
    {
      baseline: "Why don’t some couples go to the gym?",
      punchline: "Because some relationships don’t work out.",
    },
    {
      baseline: "What did one wall say to the other?",
      punchline: "I'll meet you at the corner.",
    },
    {
      baseline: "Why did the scarecrow win an award?",
      punchline: "Because he was outstanding in his field!",
    },
  ];

  const getRandomJoke = (req, res) => {
    const randomIndex = Math.floor(Math.random() * jokes.length);
    const randomJoke = jokes[randomIndex];
    res.send(randomJoke);
};

const getJokeById = (req, res) => {
    const { id } = req.params; 
    const joke = jokes.find(j => j.id === parseInt(id)); 

    if (joke) {
        res.send(joke); 
    } else {
        res.status(404).send({ message: "Joke not found!" }); 
    }
};

module.exports = {
    getRandomJoke,
    getJokeById
};