//Classes.js
import React from 'react';
import classData from '../components/data/4210_Final_Project/classes.json';
import ClassImages from './ClassImages';

const Classes = () => {
  return (
    <div>
      <h1>Classes</h1>
      <div className="class-list">
        {Object.keys(classData.classes).map((className) => {
          const classInfo = classData.classes[className];
          return (
            <div key={className} className="class-item">
              <h2>{classInfo.name}</h2>
              {classInfo.Image && (
                <ClassImages src={classInfo.Image} alt={`${classInfo.name} Class`}
                />
              )}
              <p>{classInfo.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Classes;



