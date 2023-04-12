import React, { useState } from 'react';

const Models = ({ robots }) => {
  const [selectedRobot, setSelectedRobot] = useState(null);

  const handleRobotSelect = (robot) => {
    setSelectedRobot(robot);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', marginRight: '320px' }}>
      {robots.map((robot) => (
        <div
          key={robot.name}
          style={{
            width: '110px',
            height: '110px',
            border: `5px solid ${selectedRobot === robot ? '#084BB4' : 'gray'}`,
            margin: '20px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            cursor: 'pointer',
          }}
          onClick={() => handleRobotSelect(robot)}
        >
          <img src={robot.img} alt={robot.name} style={{ width: '70px', height: '70px' }} />
          <h3 style={{ fontSize: '12px', marginTop: '5px' }}>{robot.name}</h3>
        </div>
      ))}
    </div>
  );
};

export default Models;
