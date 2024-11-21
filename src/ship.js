export function Ship(length) {
    const hits = Array(length).fill(false);

  const hit = () => {
    for (let i = 0; i < length; i++) {
      if (!hits[i]) {
        hits[i] = true;
        break; // Register one hit at a time
      }
    }
  };

  const isSunk = () => hits.every(Boolean);

  return { length, hit, isSunk };
}
