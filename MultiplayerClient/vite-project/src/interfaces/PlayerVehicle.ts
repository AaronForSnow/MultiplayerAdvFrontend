export interface PlayerVehicle {
  id: number;
  xPos: number;
  yPos: number;
  angle: number;
  speed: number;
  turnLeft: boolean;
  turnRight: boolean;
  moveForward: boolean;
  moveBackward: boolean;
}

export const updateVehicle = (vehicle: PlayerVehicle) => {
  if (vehicle.moveForward && vehicle.speed < 50) {
    vehicle.speed -= 10;
  } else if (vehicle.moveBackward && vehicle.speed > -50) {
    vehicle.speed += 10;
  } else if (!vehicle.moveBackward && !vehicle.moveForward) {
    if (vehicle.speed > 0) {
      vehicle.speed -= 10;
    }
    if (vehicle.speed < 0) {
      vehicle.speed += 10;
    }
  }
  if (vehicle.turnLeft) {
    vehicle.angle -= 45;
  }
  if (vehicle.turnRight) {
    vehicle.angle += 45;
  }

  const pi = Math.PI;
  const radians = vehicle.angle * (pi / 180);
  vehicle.xPos += Math.sin(radians) * vehicle.speed;
  vehicle.yPos += Math.cos(radians) * vehicle.speed;

  return {
    ...vehicle,
  };
};
