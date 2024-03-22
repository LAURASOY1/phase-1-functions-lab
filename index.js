

function distanceFromHqInBlocks(blockNumber) {
  
  const headquartersBlock = 42;
  
  
  const distance = Math.abs(blockNumber - headquartersBlock);
  
  return distance;
}

module.exports = distanceFromHqInBlocks;

function distanceFromHqInFeet(blockNumber) {
  const headquartersBlock = 42;
  const feetPerBlock = 264;
  const distance = Math.abs(blockNumber - headquartersBlock) * feetPerBlock;
  return distance;
}

function distanceTravelledInFeet(startBlock, endBlock) {
  const feetPerBlock = 264; 
  const distance = Math.abs(startBlock - endBlock) * feetPerBlock;
  return distance;
}
function calculatesFarePrice(startBlock, endBlock) {
  const distance = distanceTravelledInFeet(startBlock, endBlock);
  let farePrice = 0;
  
  if (distance <= 400) {
    farePrice = 0; 
  } else if (distance > 400 && distance <= 2000) {
    farePrice = (distance - 400) * 0.02; 
  } else if (distance > 2000 && distance <= 2500) {
    farePrice = 25; 
  } else {
    farePrice = 'cannot travel that far'; 
  }
  
  return farePrice;
}

module.exports = {
  distanceFromHqInFeet,
  distanceTravelledInFeet,
  calculatesFarePrice
};
