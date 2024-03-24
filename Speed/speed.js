// Prompt the user for input
const input = prompt(" carspeed:");

function calculateDemeritPoints(speed) {
  const speedLimit = 70;
  const kmPerDemeritPoint = 5;

  if (speed < speedLimit) {
      console.log("OK");
      return;
  }

  const excessSpeed = speed - speedLimit;
  const demeritPoints = Math.floor(excessSpeed / kmPerDemeritPoint);

  if (demeritPoints >= 12) {
      console.log(`License suspended! You have ${demeritPoints} demerit points.`);
  } else {
      console.log(`You have ${demeritPoints} demerit point(s).`);
  }
}

// Example usage:
calculateDemeritPoints(100);
calculateDemeritPoints(120);
calculateDemeritPoints(150);
calculateDemeritPoints(200);
calculateDemeritPoints(300);
calculateDemeritPoints(400);