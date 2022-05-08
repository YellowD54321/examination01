# Interview Examination

## Exam01
寫一個函式計算下列公式之總和：
    1-2+3-4+5-6+.....+ / -  N

### Solution-1
Use for loop to add all the number to N.
Only needs to check if the number is (% 2 === 0) or not.

```
function formular(lastNumber) {
    let result = 0;
    for (let i = 1; i <= lastNumber; i++) {
        const nextNumber = i % 2 === 0 ? -1 * i : i;
        result += nextNumber;
    }
    return result;
}
```

### Solution-2
Simplify the formular:
if (N % 2 === 0) => result = -1 * N / 2
if (N % 2 !== 0) => result = -1 * (N - 1) / 2 + N

```
function formularTwo(lastNumber) {
    if (lastNumber <= 0) return 0;
    if (lastNumber % 2 === 0) {
        return (-1 * lastNumber) / 2;
    } else {
        return (-1 * (lastNumber - 1)) / 2 + lastNumber;
    }
}
```

## Exam02
抽抽樂總共有五個獎項, 1,2,3 獎各只有一個, 4 獎有 3 個，5 獎有 4 個，請寫出一個程式可以「隨機」的取得「不重複」的禮物

### Solution
Use a random number start from 0 to length of Reward Array.
Splice Reward Array[random number] and add it into Winner Array.

```
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
```