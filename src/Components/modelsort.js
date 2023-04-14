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

  const isPhoneScreen = window.matchMedia("(max-width: 768px)").matches;

  const styles = {
    robotsList: {
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'center',
    },
    robotCard: {
      width: '100px',
      height: '100px',
      border: '3.4px solid #A2A0A0',
      borderRadius: '7px',
      margin: '20px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      cursor: 'pointer',
    },
    robotCardSelected: {
      border: '3.4px solid #084BB4',
    },
    robotImage: {
      width: '67px',
      height: '67px',
      marginTop: '12px',
    },
    robotName: {
      fontSize: '13px',
      marginTop: '5px',
    },
  };
  
  // Media Query for Phone Screen
  const phoneStyles = {
    robotsList: {
      marginBottom: '-25px',
    },
    robotCard: {
      width: '100px',
      height: '100px',
      margin: '10px',
    },
    robotImage: {
      width: '60px',
      height: '60px',
      marginTop: '10px',
    },
    robotName: {
      fontSize: '15px',
      marginTop: '3px',
    },
  };
  

  return (
    <div style={{ ...styles.robotsList, ...(isPhoneScreen && phoneStyles.robotsList) }}>
      {robots.map((robot) => (
        <div
          key={robot.name}
          style={{ ...styles.robotCard, ...(isPhoneScreen && phoneStyles.robotCard), ...(selectedRobot === robot && styles.robotCardSelected) }}
          onClick={() => handleRobotSelect(robot)}
        >
          <img src={robot.img} alt={robot.name} style={{ ...styles.robotImage, ...(isPhoneScreen && phoneStyles.robotImage) }} />
          <h3 style={{ ...styles.robotName, ...(isPhoneScreen && phoneStyles.robotName) }}>{robot.name}</h3>
        </div>
      ))}
    </div>
  );
};

export default Models;
