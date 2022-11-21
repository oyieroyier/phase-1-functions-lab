/*
Use the Maths.abs() method so that negative distances are also returned
as positive distances. You want that if the pickup is Block 39, the
distance still reads 3 Blocks away and not -3 Blocks away.

Since distance will be used in the other functions too, declare it in the
global scope.
*/
let distance;

function distanceFromHqInBlocks(pickup) {
  const block = 42;
  distance = Math.abs(block - pickup);
  return distance;
}

/* 
	Because the function above already calculates the distance between
	the two points in blocks, we can simply call it and then convert the
	value it returns into feet by multiplying by 264. */
function distanceFromHqInFeet(pickup) {
  return distanceFromHqInBlocks(pickup) * 264;
}

/* 
	Again, use the Maths.abs() method so that you don't have negative
	distances traveled. It converts any negative integer to a positive one. */
function distanceTravelledInFeet(start, finish) {
  return Math.abs(start - finish) * 264;
}

/* 
	The function above returns the distance traveled in feet, which means we can
	use it to compare the fares.
	 */
function calculatesFarePrice(start, finish) {
  if (distanceTravelledInFeet(start, finish) <= 400) {
    return 0;
  } else if (distanceTravelledInFeet(start, finish) >= 400) {
    if (distanceTravelledInFeet(start, finish) <= 2000) {
      return (Math.abs(start - finish) * 264 - 400) * 0.02;
    } else if (distanceTravelledInFeet(start, finish) < 2500) {
      return 25;
    } else if (distanceTravelledInFeet(start, finish) >= 2500) {
      return "cannot travel that far";
    }
  }
}
