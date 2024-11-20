export function Ship(length) {
    const hits = Array(length).fill(false);

  const hit = (position) => {
    if (position < length) hits[position] = true;
  };

  const isSunk = () => hits.every((hit) => hit);

  return { length, hit, isSunk };
}
