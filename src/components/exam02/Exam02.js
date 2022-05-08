import "./exam02.css";
import React, { useState } from "react";

function Exam02() {
  const POOL = [
    {
      level: 1,
      name: "Benz",
    },
    {
      level: 2,
      name: "Gogoro",
    },
    {
      level: 3,
      name: 'Sony TV 65"',
    },
    {
      level: 4,
      name: "iPhone 14",
    },
    {
      level: 4,
      name: "iPhone 14",
    },
    {
      level: 4,
      name: "iPhone 14",
    },
    {
      level: 5,
      name: "AirPods Pro",
    },
    {
      level: 5,
      name: "AirPods Pro",
    },
    {
      level: 5,
      name: "AirPods Pro",
    },
    {
      level: 5,
      name: "AirPods Pro",
    },
  ];
  const [currentPool, setCurrentPool] = useState([...POOL]);
  const [listOfWinners, setListOfWinners] = useState([]);

  function drawReward() {
    if (!currentPool || currentPool.length <= 0) {
      alert("There is no reward left.");
      return null;
    }
    const pool = [...currentPool];
    const winners = [...listOfWinners];
    const leftRewardsAmount = pool.length;
    const randomRewardIndex = getRandomInteger(leftRewardsAmount);
    const reward = pool.splice(randomRewardIndex, 1);
    winners.push({
      name: `Number${winners.length + 1} winner`,
      reward: reward[0].name,
    });
    setCurrentPool(pool);
    setListOfWinners(winners);
  }

  function getRandomInteger(number) {
    return Math.floor(Math.random() * number);
  }

  function getCurrentPoolList() {
    return currentPool.map((reward, index) => {
      return (
        <div className="exam02-each-reward" key={index}>
          <p>
            {`Reward${reward.level} is `}
            <b>{reward.name}</b>
          </p>
        </div>
      );
    });
  }

  function getListOfWinners() {
    if (!listOfWinners) return null;
    return listOfWinners.map((winner, index) => {
      return (
        <div className="exam02-each-winner" key={index}>
          <p>
            {`${winner.name} got `}
            <b>{winner.reward}</b>
          </p>
        </div>
      );
    });
  }

  function handleButtonClick() {
    drawReward();
  }

  return (
    <div className="exam02-body">
      <div className="exam02-pool">{getCurrentPoolList()}</div>
      <button className="exam02-button" onClick={handleButtonClick}>
        Draw
      </button>
      <div className="exam02-result">
        <h2 className="exam02-list-of-winners-title">List of Winners</h2>
        {getListOfWinners()}
      </div>
    </div>
  );
}
export default Exam02;
