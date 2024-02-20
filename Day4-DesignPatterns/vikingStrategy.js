class Fly {
  move(unit) {
    unit._position(10);
  }
}

class Walk {
  move(unit) {
    unit._position(1);
  }
}

class Viking {
  constructor() {
    this.position = 0;
    this.moveBehavior = new Walk();
  }

  _position(amount) {
    this.position += amount;
  }

  _moveBehavior() {
    this.moveBehavior.move(this);
  }

  move() {
    this._moveBehavior();
  }
}
