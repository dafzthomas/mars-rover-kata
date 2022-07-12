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
    if (this.#direction === "N") {
      this.#direction = "E";
    } else if (this.#direction === "E") {
      this.#direction = "S";
    } else if (this.#direction === "S") {
      this.#direction = "W";
    } else if (this.#direction === "W") {
      this.#direction = "N";
    }
  }

  turnLeft() {
    if (this.#direction === "N") {
      this.#direction = "W";
    } else if (this.#direction === "W") {
      this.#direction = "S";
    } else if (this.#direction === "S") {
      this.#direction = "E";
    } else if (this.#direction === "E") {
      this.#direction = "N";
    }
  }
}
