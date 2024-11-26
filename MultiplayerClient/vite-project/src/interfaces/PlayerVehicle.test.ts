import { expect, test } from "vitest";
import { PlayerVehicle, updateVehicle } from "./PlayerVehicle";

const createNewTestVehicle = (): PlayerVehicle => {
  return {
    id: 1,
    xPos: 200,
    yPos: 200,
    angle: 180,
    speed: 0,
    turnLeft: false,
    turnRight: false,
    moveForward: false,
    moveBackward: false,
    leftKey: "a",
    rightKey: "d",
    forwardKey: "w",
    backwardKey: "s",
  };
};
test("vehicle is new vehicle", () => {
  const testVehicle = createNewTestVehicle();
  expect(testVehicle.id).toBe(1);
  expect(testVehicle.xPos).toBe(200);
  expect(testVehicle.angle).toBe(180);
});

test("vehicle updates properly", () => {
  const testVehicle = createNewTestVehicle();

  expect(testVehicle.id).toBe(1);
  expect(testVehicle.xPos).toBe(200);
  expect(testVehicle.angle).toBe(180);
  expect(testVehicle.speed).toBe(0);

  testVehicle.moveForward = true;
  const newVehicle = updateVehicle(testVehicle);
  expect(newVehicle.id).toBe(1);
  expect(newVehicle.speed).toBe(10);
});
test("vehicle turns left", () => {
  const testVehicle = createNewTestVehicle();

  expect(testVehicle.angle).toBe(180);

  testVehicle.turnLeft = true;
  const newVehicle = updateVehicle(testVehicle);
  expect(newVehicle.angle).toBe(185);
});
test("vehicle turns right", () => {
  const testVehicle = createNewTestVehicle();

  expect(testVehicle.angle).toBe(180);

  testVehicle.turnRight = true;
  const newVehicle = updateVehicle(testVehicle);
  expect(newVehicle.angle).toBe(175);
});
test("vehicle DOESNT turn", () => {
  const testVehicle = createNewTestVehicle();

  expect(testVehicle.angle).toBe(180);

  testVehicle.turnLeft = false;
  const newVehicle = updateVehicle(testVehicle);
  expect(newVehicle.angle).toBe(180);
});
test("User can accelerate on the x axis", () => {
  const testVehicle = createNewTestVehicle();

  expect(testVehicle.angle).toBe(0);
  expect(testVehicle.speed).toBe(0);
  expect(testVehicle.xPos).toBe(200);
  expect(testVehicle.yPos).toBe(200);

  testVehicle.moveForward = true;
  const newVehicle = updateVehicle(testVehicle);
  expect(newVehicle.xPos).toBe(210);

  newVehicle.moveForward = true;
  const newVehicle2 = updateVehicle(newVehicle);
  expect(newVehicle2.xPos).toBe(230);
});

test("User can accelerate backward on the x axis", () => {
  const testVehicle = createNewTestVehicle();

  testVehicle.angle = 0;
  expect(testVehicle.angle).toBe(0);
  expect(testVehicle.speed).toBe(0);
  expect(testVehicle.xPos).toBe(200);
  expect(testVehicle.yPos).toBe(200);

  testVehicle.moveBackward = true;
  const newVehicle = updateVehicle(testVehicle);
  expect(newVehicle.xPos).toBe(190);

  newVehicle.moveBackward = true;
  const newVehicle2 = updateVehicle(newVehicle);
  expect(newVehicle2.xPos).toBe(170);

  newVehicle2.moveBackward = true;
  const newVehicle3 = updateVehicle(newVehicle2);
  expect(newVehicle3.xPos).toBe(140);

  expect(newVehicle3.moveBackward).toBe(false);
  const newVehicle4 = updateVehicle(newVehicle3);
  expect(newVehicle4.xPos).toBe(120);
});

test("User can accelerate on the y axis", () => {
  const testVehicle = createNewTestVehicle();

  testVehicle.angle = 90;
  expect(testVehicle.angle).toBe(90);
  expect(testVehicle.speed).toBe(0);
  expect(testVehicle.xPos).toBe(200);
  expect(testVehicle.yPos).toBe(200);

  testVehicle.moveForward = true;
  const newVehicle = updateVehicle(testVehicle);
  expect(newVehicle.xPos).toBe(200);
  expect(newVehicle.yPos).toBe(210);
});

test("User can turn at a 45 degree angle", () => {
  const testVehicle = createNewTestVehicle();

  testVehicle.angle = 45;
  expect(testVehicle.angle).toBe(45);
  expect(testVehicle.speed).toBe(0);
  expect(testVehicle.xPos).toBe(200);
  expect(testVehicle.yPos).toBe(200);

  testVehicle.moveForward = true;
  const newVehicle = updateVehicle(testVehicle);
  expect(newVehicle.xPos).toBe(207.07106781186548);
  expect(newVehicle.yPos).toBe(207.07106781186548);
});

test("User can turn at a 225 degree angle", () => {
  const testVehicle = createNewTestVehicle();

  testVehicle.angle = 225;
  expect(testVehicle.angle).toBe(225);
  expect(testVehicle.speed).toBe(0);
  expect(testVehicle.xPos).toBe(200);
  expect(testVehicle.yPos).toBe(200);

  testVehicle.moveForward = true;
  const newVehicle = updateVehicle(testVehicle);
  expect(newVehicle.xPos).toBe(192.92893218813452);
  expect(newVehicle.yPos).toBe(192.92893218813452);
});

test("User can turn at a -45 degree angle", () => {
  const testVehicle = createNewTestVehicle();

  testVehicle.angle = -45;
  expect(testVehicle.angle).toBe(-45);
  expect(testVehicle.speed).toBe(0);
  expect(testVehicle.xPos).toBe(200);
  expect(testVehicle.yPos).toBe(200);

  testVehicle.moveForward = true;
  const newVehicle = updateVehicle(testVehicle);
  expect(newVehicle.xPos).toBe(207.07106781186548);
  expect(newVehicle.yPos).toBe(192.92893218813452);
});
