export class Rover {
  #position;
  #direction;

  constructor(position = [1, 1], direction = "N") {
    this.#position = position;
    this.#direction = direction;
  }

  #MOVE_FORWARD_ACTIONS = {
    N: () => (this.#position[1] = this.#position[1] + 1),
    S: () => (this.#position[1] = this.#position[1] - 1),
    E: () => (this.#position[0] = this.#position[0] + 1),
    W: () => (this.#position[0] = this.#position[0] - 1),
  };

  #MOVE_BACKWARDS_ACTIONS = {
    N: () => (this.#position[1] = this.#position[1] - 1),
    S: () => (this.#position[1] = this.#position[1] + 1),
    E: () => (this.#position[0] = this.#position[0] - 1),
    W: () => (this.#position[0] = this.#position[0] + 1),
  };

  #TURN_RIGHT_ACTIONS = {
    N: () => (this.#direction = "E"),
    S: () => (this.#direction = "W"),
    E: () => (this.#direction = "S"),
    W: () => (this.#direction = "N"),
  };

  #TURN_LEFT_ACTIONS = {
    N: () => (this.#direction = "W"),
    S: () => (this.#direction = "E"),
    E: () => (this.#direction = "N"),
    W: () => (this.#direction = "S"),
  };

  get position() {
    return this.#position;
  }

  get direction() {
    return this.#direction;
  }

  moveForward() {
    this.#MOVE_FORWARD_ACTIONS[this.#direction]();
  }

  moveBackwards() {
    this.#MOVE_BACKWARDS_ACTIONS[this.#direction]();
  }

  turnRight() {
    this.#TURN_RIGHT_ACTIONS[this.#direction]();
  }

  turnLeft() {
    this.#TURN_LEFT_ACTIONS[this.#direction]();
  }
}
