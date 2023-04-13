import React, { useState } from 'react';

const Models = ({ robots, onRobotSelect }) => {
  const [selectedRobot, setSelectedRobot] = useState(null);

  const handleRobotSelect = (robot) => {
    if (selectedRobot === robot) {
      setSelectedRobot(null);
      onRobotSelect(null);
    } else {
      setSelectedRobot(robot);
      onRobotSelect(robot.name);
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', marginRight: '320px' }}>
      {robots.map((robot) => (
        <div
          key={robot.name}
          style={{
            width: '100px',
            height: '100px',
            border: `3.4px solid ${selectedRobot === robot ? '#084BB4' : 'gray'}`,
            borderRadius: '7px',
            margin: '20px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            cursor: 'pointer',
          }}
          onClick={() => handleRobotSelect(robot)}
        >
          <img src={robot.img} alt={robot.name} style={{ width: '70px', height: '70px' , marginTop: '12px'}} />
          <h3 style={{ fontSize: '15px', marginTop: '5px' }}>{robot.name}</h3>
        </div>
      ))}
    </div>
  );
};

export default Models;
