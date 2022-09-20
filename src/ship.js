const Ship = function Ship(length, direction, column, row) {
  const status = [];
  for (let i = 0; i < length; i += 1) {
    status.push('intact');
  }

  // Returns the array of spaces of a ship and whetheer it's been hit or not
  const getStatus = function getStatus() {
    return status;
  };

  // Marks a space as hit
  const hit = function hit(num) {
    status[num] = 'hit';
  };

  // Returns whether all spaces have been hit or not
  const isSunk = function isSunk() {
    let sunk = true;
    status.forEach((space) => {
      if (space !== 'hit') {
        sunk = false;
      }
    });
    return sunk;
  };

  return { getStatus, hit, isSunk };
};

export default Ship;
