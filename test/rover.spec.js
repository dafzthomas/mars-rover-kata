import { Rover } from "../src/rover";

describe("Mars Rover Tests", () => {
  it("has a start position of 1,1", () => {
    const rover = new Rover();

    expect(rover.position).toEqual([1, 1]);
  });

  it("has a start position of 5,3", () => {
    const rover = new Rover([5, 3]);

    expect(rover.position).toEqual([5, 3]);
  });

  it("has a start direction of north", () => {
    const rover = new Rover();

    expect(rover.direction).toEqual("N");
  });

  it("moves forward by 1", () => {
    const rover = new Rover();

    rover.moveForward();

    expect(rover.position).toEqual([1, 2]);
  });

  it("moves forward by 1 facing east", () => {
    const rover = new Rover([1, 1], "E");

    rover.moveForward();

    expect(rover.position).toEqual([2, 1]);
  });

  it("moves forward by 1 facing south", () => {
    const rover = new Rover([3, 4], "S");

    rover.moveForward();

    expect(rover.position).toEqual([3, 3]);
  });

  it("moves forward by 1 facing west", () => {
    const rover = new Rover([4, 3], "W");

    rover.moveForward();

    expect(rover.position).toEqual([3, 3]);
  });

  it("moves backwards by 1", () => {
    const rover = new Rover([1, 2]);

    rover.moveBackwards();

    expect(rover.position).toEqual([1, 1]);
  });

  it("moved backwards by 1 facing east", () => {
    const rover = new Rover([2, 5], "E");

    rover.moveBackwards();

    expect(rover.position).toEqual([1, 5]);
  });

  it("moved backwards by 1 facing south", () => {
    const rover = new Rover([2, 4], "S");

    rover.moveBackwards();

    expect(rover.position).toEqual([2, 5]);
  });

  it("moved backwards by 1 facing west", () => {
    const rover = new Rover([3, 5], "W");

    rover.moveBackwards();

    expect(rover.position).toEqual([4, 5]);
  });

  it("turns right", () => {
    const rover = new Rover();

    rover.turnRight();

    expect(rover.direction).toEqual("E");
  });

  it("turns right when facing east", () => {
    const rover = new Rover([1, 1], "E");

    rover.turnRight();

    expect(rover.direction).toEqual("S");
  });

  it("turns right when facing south", () => {
    const rover = new Rover([1, 1], "S");

    rover.turnRight();

    expect(rover.direction).toEqual("W");
  });

  it("turns right when facing west", () => {
    const rover = new Rover([1, 1], "W");

    rover.turnRight();

    expect(rover.direction).toEqual("N");
  });

  it("turns left", () => {
    const rover = new Rover();

    rover.turnLeft();

    expect(rover.direction).toEqual("W");
  });

  it("turns left when facing W", () => {
    const rover = new Rover([1, 1], "W");

    rover.turnLeft();

    expect(rover.direction).toEqual("S");
  });

  it("turns left when facing S", () => {
    const rover = new Rover([1, 1], "S");

    rover.turnLeft();

    expect(rover.direction).toEqual("E");
  });

  it("turns left when facing E", () => {
    const rover = new Rover([1, 1], "E");

    rover.turnLeft();

    expect(rover.direction).toEqual("N");
  });
});
