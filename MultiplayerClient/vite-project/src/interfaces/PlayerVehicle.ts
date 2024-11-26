export interface PlayerVehicle {
  id: number;
  type: string;
  xPos: number;
  yPos: number;
  angle: number;
  speed: number;
  turnLeft: boolean;
  turnRight: boolean;
  moveForward: boolean;
  moveBackward: boolean;
  forwardKey:  string;
  backwardKey:  string;
  leftKey:  string;
  rightKey: string;
}

export const updateVehicle = (vehicle: PlayerVehicle) => {
  if (vehicle.moveForward && vehicle.speed < 50) {
    vehicle.speed -= 10;
    vehicle.moveForward = false;
  } else if (vehicle.moveBackward && vehicle.speed > -50) {
    vehicle.speed += 10;
    vehicle.moveBackward = false;
  } else if (!vehicle.moveBackward && !vehicle.moveForward) {
    if (vehicle.speed > 0) {
      vehicle.speed -= 10;
    }
    if (vehicle.speed < 0) {
      vehicle.speed += 10;
    }
  }
  if (vehicle.turnLeft) {
    vehicle.angle -= 5;
    vehicle.turnLeft = false;
  }
  if (vehicle.turnRight) {
    vehicle.angle += 5;
    vehicle.turnRight = false;
  }

  const pi = Math.PI;
  const radians = vehicle.angle * (pi / 180);
  vehicle.xPos += Math.sin(radians) * vehicle.speed;
  vehicle.yPos += Math.cos(radians) * vehicle.speed;

  return {
    ...vehicle,
  };
};
