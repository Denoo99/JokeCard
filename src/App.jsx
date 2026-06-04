import Header from "./components/Header";
import { useState, useEffect } from "react";

import "./App.css";
import JokeCard from "./components/JokeCard";
import SavedJokes from "./components/SavedJoke";

const title = "Joke Classroom";

function App() {
  // const jokes = [
  //   {
  //     id: 1,
  //     setup: 'Why did the developer go broke?',
  //     punchline: 'Because he used up all his cache.',
  //   },
  //   {
  //     id: 2,
  //     setup: 'Why do JavaScript developers wear glasses?',
  //     punchline: "Because they don't C#.",
  //   },
  //   {
  //     id: 3,
  //     setup: 'Why was the function sad?',
  //     punchline: 'Because nobody called it.',
  //   },
  // ]

  const getLocalStorageItems = () => {
    return JSON.parse(localStorage.getItem("savedJokes")) || [];
  };

  const [savedJokes, setSavedJokes] = useState(getLocalStorageItems);
  const [randomJoke, setRandomJoke] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const API_URL = "https://official-joke-api.appspot.com";

  const handleSaveJoke = (joke) => {
    const alreadySaved = savedJokes.some(
      (savedJoke) => savedJoke.id === joke.id,
    );

    if (!alreadySaved) {
      setSavedJokes([...savedJokes, joke]);
    }
  };

  const handleDeleteJoke = (jokeFromDelete) => {
    const filteredJokes = savedJokes.filter((savedJoke) => {
      return savedJoke.id !== jokeFromDelete.id;
    });

    setSavedJokes(filteredJokes);
    console.log(filteredJokes);
  };

  const handleGetRandomJoke = async () => {
    setLoading(true);
    setError("");

    try {
      const response = await fetch(`${API_URL}/random_joke`);

      if (!response.ok) {
        throw new Error("Failed to fetch joke");
      }

      const data = await response.json();
      setRandomJoke(data);
    } catch (error) {
      console.error(error);
      setError("Something went wrong while fetching a joke.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    handleGetRandomJoke();
  }, []);

  useEffect(() => {
    localStorage.setItem("savedJokes", JSON.stringify(savedJokes));
  }, [savedJokes]);

  const isRandomJokeSaved =
    randomJoke &&
    savedJokes.some((savedJoke) => savedJoke.id === randomJoke.id);

  return (
    <div className="app">
      <Header title={title} subtitle="Learn React with funny jokes" />

      <button disabled={loading} onClick={handleGetRandomJoke}>
        {loading ? "Loading..." : "Get random joke"}
      </button>

      {loading && <p>Loading...</p>}
      {error && <p className="error">{error}</p>}

      {/* {jokes.map((joke) => {
        const isSaved = savedJokes.some(
          (savedJoke) => savedJoke.id === joke.id
        )

        return (
          <JokeCard
            key={joke.id}
            setup={joke.setup}
            punchline={joke.punchline}
            saveJoke={() => handleSaveJoke(joke)}
            isSaved={isSaved}
          />
        )
      })} */}

      {/* {randomJoke.map((joke) => (
        <JokeCard
          key={joke.id}
          setup={joke.setup}
          punchline={joke.punchline}
          saveJoke={() => handleSaveJoke(joke)}
        />
      ))} */}

      {randomJoke && (
        <JokeCard
          key={randomJoke.id}
          setup={randomJoke.setup}
          punchline={randomJoke.punchline}
          saveJoke={() => handleSaveJoke(randomJoke)}
          isSaved={isRandomJokeSaved}
        />
      )}

      {savedJokes.length !== 0 && <h1>Saved Jokes</h1>}

      {savedJokes.map((savedJoke) => {
        return (
          <SavedJokes
            key={savedJoke.id}
            savedJoke={savedJoke}
            handleDeleteJoke={handleDeleteJoke}
          />
        );
      })}
    </div>
  );

  // 1) te dhenat reale zakonisht vijne si array; const jokes = []
  // 2) .map() per me kalu ne secilin element
  // 3) per qdo joke (ele i array-it) krijohet nje jokecard component
  // 4) "key" i ndihmon reactit me identifiku secilin element
}

export default App;
