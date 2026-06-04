function SavedJokes({ savedJoke, handleDeleteJoke }) {
  return (
    <div className="saved-joke">
      <h3>{savedJoke.setup}</h3>
      <p>{savedJoke.punchline}</p>
      <button onClick={() => handleDeleteJoke(savedJoke)}>
        Remove
      </button>
    </div>
  );
}

export default SavedJokes;