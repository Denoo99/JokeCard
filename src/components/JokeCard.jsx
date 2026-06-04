import { useState } from 'react'

function JokeCard({ setup, punchline, saveJoke, isSaved }) {
  // useState ->

  const [likes, setLikes] = useState(0)

  const [showPunchline, setShowPunchline] = useState(false)

  // likes -> vlera aktuale -> 0
  // setLikes -> e ndryshon vleren
  // useState(0) -> vlera fillestare eshte 0

  const handleLike = () => {
    setLikes(likes + 1)
  }

  const handleTogglePunchline = () => {
    // 2) set...
    setShowPunchline(!showPunchline)
  }

  return (
    <div className="joke-card">
      <h2>{setup}</h2>

      {showPunchline && <p>{punchline}</p>}
      <button onClick={handleLike}>Like</button>

      <button onClick={handleTogglePunchline}>
        {showPunchline ? 'Hide punchline' : 'Show punchline'}
      </button>

      <button disabled={isSaved} onClick={saveJoke}>{isSaved ? 'Saved' : 'Save Joke'}</button>


      <p>Likes: {likes} </p>
    </div>
  )

  
}

export default JokeCard