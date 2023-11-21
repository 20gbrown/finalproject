//Races.js
import React from 'react';
import racesData from '../components/data/4210_Final_Project/races.json';
import RaceImages from './RaceImages';
//import './style.css'

const Races = () => {
    const renderRace = (raceName, raceInfo) => {
      return (
        <div key={raceName}>
          <h2>{raceName}</h2>
          {raceInfo.Image && (
            <RaceImages src={raceInfo.Image} alt={`${raceName} Race`} />
          )}
        <p>{raceInfo.Description}</p>
        <h3>Traits</h3>
        <ul>
          {raceInfo.Traits.map((trait, index) => (
            <li key={index}>{trait}</li>
          ))}
        </ul>
        {raceInfo.Subraces && (
          <div>
            <h3>Subraces</h3>
            {Object.keys(raceInfo.Subraces).map((subraceName) => {
              const subraceInfo = raceInfo.Subraces[subraceName];
              return (
                <div key={subraceName}>
                  <h4>{subraceName}</h4>
                  {subraceInfo.Image && (
                    <RaceImages src={subraceInfo.Image}  alt={`${subraceName} Subrace`} />
                  )}
                  <p>{subraceInfo.Description}</p>
                  <h5>Traits</h5>
                  <ul>
                    {subraceInfo.Traits.map((trait, index) => (
                      <li key={index}>{trait}</li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        )}
      </div>
    );
  };
  

  return (
    <div className="races-container">
      <h1>Races</h1>
      {Object.keys(racesData.Races).map((raceName) => {
        const raceInfo = racesData.Races[raceName];
        return renderRace(raceName, raceInfo);
      })}
    </div>
  );
};

export default Races;



