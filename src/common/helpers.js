export function readStore(name) {
  return new Promise((resolve) => {
    const data = localStorage.getItem(name);
    resolve(data);
  });
}

export function writeStore(name, content) {
  return new Promise((resolve) => {
    localStorage.setItem(name, content);
    resolve();
  });
}

export function getRandomSlots() {
  const randomSlot = () => {
    const slot=['GiClubs','GiDiamonds','GiSpades','GiHearts'];
    return slot[Math.floor(Math.random() * slot.length)];

  };

  return [randomSlot(), randomSlot(), randomSlot()];
}

export function getResults(slots) {
  const [a, b, c] = slots;
  console.log(slots)

  // if no match - do not change score || XYZ
  const isNotMatch = (a !== b && b !== c && a !== c) || (a === c && a !== b);

  // if there is a pair XXY XYX YXX
  const isPair = (a == b && b !== c) || (a !== b && b == c);

  // if ♠♠♠ (!)
  const isBingo = a == "GiSpades" && b == "GiSpades" && c == "GiSpades";

  // if three in a row XXX
  const isThreeInRow = a == b && b == c;

 // Thee different symbols XYZ does nothing
  if (isNotMatch) {
    return {
      amount: 0,
      text: "Sorry, you lost. Try one more time..."
    };
  }
 // Each pair XXY XYX YXX adds $0.5 to the balanceif there is a pair XXY XYX YXX
  if (isPair) {
    return {
      amount: 0.5,
      text: `Congrats! You won $0.5. Keep it going.`
    };
  }

   // if ♠♠♠  adds $5 to the balance
  if (isBingo) {
    return {
      amount: 5,
      text: `Yahooo! Bingo! You won $5! Amazing!`
    };
  }

  //  Each spin costs $2 from the balance
  if (isThreeInRow) {
    return {
      amount: 2,
      text: `Wow! Three in a row! You won $2. You are so close to success!`
    };
  }

  console.log("Passed slots", slots);

  return {
    amount: 404,
    text: "There is some error. Open Console."
  };
}
