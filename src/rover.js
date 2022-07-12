export class Rover {
  #position;
  #direction;

  constructor(position = [1, 1], direction = "N") {
    this.#position = position;
    this.#direction = direction;
  }

  get position() {
    return this.#position;
  }

  get direction() {
    return this.#direction;
  }

  moveForward() {
    if (this.#direction === "N") {
      this.#position[1] = this.#position[1] + 1;
    } else if (this.#direction === "E") {
      this.#position[0] = this.#position[0] + 1;
    } else if (this.#direction === "S") {
      this.#position[1] = this.#position[1] - 1;
    } else if (this.#direction === "W") {
      this.#position[0] = this.#position[0] - 1;
    }
  }

  moveBackwards() {
    if (this.#direction === "N") {
      this.#position[1] = this.#position[1] - 1;
    } else if (this.#direction === "E") {
      this.position[0] = this.#position[0] - 1;
    } else if (this.#direction === "S") {
      this.#position[1] = this.#position[1] + 1;
    } else if (this.#direction === "W") {
      this.#position[0] = this.#position[0] - 1;
    }
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
