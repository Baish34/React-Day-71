import React, { useState } from "react";
import "./App.css";

export default function App() {
  const travelQuestions = {
    question: "Select Your Preferred Continent:",
    options: {
      Asia: ["Japan", "Thailand", "India"],
      Europe: ["France", "Italy", "Spain"],
      "North America": ["USA", "Canada", "Mexico"],
    },
  };

  const musicQuestions = {
    question: "Select Your Preferred Genre:",
    options: {
      Rock: ["Classic Rock", "Alternative Rock", "Indie Rock"],
      Pop: ["Pop Rock", "Synth-pop", "Electropop"],
      "Hip Hop": ["East Coast Hip Hop", "West Coast Hip Hop", "Trap Music"],
    },
  };

  const [selectedContinent, setSelectedContinent] = useState("");
  const [selectedDestination, setSelectedDestination] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);

  const [selectedMusicType, setSelectedMusicType] = useState("");
  const [selectedSubgenre, setSelectedSubgenre] = useState("");
  const [musicFormSubmitted, setMusicFormSubmitted] = useState(false);

  const handleContinentChange = (event) => {
    setSelectedContinent(event.target.value);
    setSelectedDestination(""); 
  };

  const handleDestinationChange = (event) => {
    setSelectedDestination(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault(); 
    if (selectedContinent && selectedDestination) {
      setFormSubmitted(true);
    }
  };

  const handleMusicTypeChange = (event) => {
    setSelectedMusicType(event.target.value);
    setSelectedSubgenre(""); 
  };

  const handleSubgenreChange = (event) => {
    setSelectedSubgenre(event.target.value);
  };

  const handleMusicSubmit = (event) => {
    event.preventDefault();
    if (selectedMusicType && selectedSubgenre) {
      setMusicFormSubmitted(true);
    }
  };

  return (
    <main>
      <h2>Travel Destination App</h2>
      {!formSubmitted ? (
        <form onSubmit={handleSubmit}>
          <label>
            {travelQuestions.question}
            <select value={selectedContinent} onChange={handleContinentChange}>
              <option value="">--Select Continent--</option>
              {Object.keys(travelQuestions.options).map((continent) => (
                <option key={continent} value={continent}>
                  {continent}
                </option>
              ))}
            </select>
          </label>
          <br />

          {selectedContinent && (
            <div>
              <p>Select Your Preferred Destination:</p>
              {travelQuestions.options[selectedContinent].map((option) => (
                <div key={option}>
                  <label>
                    <input
                      type="radio"
                      name="selectedOption"
                      value={option}
                      checked={selectedDestination === option}
                      onChange={handleDestinationChange}
                    />
                    {option}
                  </label>
                </div>
              ))}
            </div>
          )}

          <br />
          <button type="submit">Submit</button>
        </form>
      ) : (
        <div>
          <h3>Thank You for Sharing Your Preferences!</h3>
          <p>Preferred Continent: {selectedContinent}</p>
          <p>Preferred Destination: {selectedDestination}</p>
        </div>
      )}

      <h2>Music Preference App</h2>
      {!musicFormSubmitted ? (
        <form onSubmit={handleMusicSubmit}>
          <label>
            {musicQuestions.question}
            <select value={selectedMusicType} onChange={handleMusicTypeChange}>
              <option value="">--Select Genre--</option>
              {Object.keys(musicQuestions.options).map((musicType) => (
                <option key={musicType} value={musicType}>
                  {musicType}
                </option>
              ))}
            </select>
          </label>
          <br />

          {selectedMusicType && (
            <div>
              <p>Select Your Preferred Subgenre:</p>
              {musicQuestions.options[selectedMusicType].map((subgenre) => (
                <div key={subgenre}>
                  <label>
                    <input
                      type="radio"
                      name="selectedOption"
                      value={subgenre}
                      checked={selectedSubgenre === subgenre}
                      onChange={handleSubgenreChange}
                    />
                    {subgenre}
                  </label>
                </div>
              ))}
            </div>
          )}

          <br />
          <button type="submit">Submit</button>
        </form>
      ) : (
        <div>
          <h3>Thank You for Sharing Your Preferences!</h3>
          <p>Selected Genre: {selectedMusicType}</p>
          <p>Selected Sub Genre: {selectedSubgenre}</p>
        </div>
      )}
    </main>
  );
}
