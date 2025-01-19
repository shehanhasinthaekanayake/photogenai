import clamp from "lodash/clamp";
import TimingSrcBase from "./base";

class MediaTimingSrc extends TimingSrcBase {
  isActing: any;
  currentState() {
    return {
      position: this.currentPosition,
      velocity: this.currentVelocity,
      acceleration: 0
    };
  }

  _sync() {
    const { position, velocity } = this.timingObject.query();
    this._updatePosition(position);
    this._updateVelocity(velocity);
  }

  async _updateVelocity(velocity: any) {
    if (!this.isActing && velocity !== this.currentVelocity) {
      this.isActing = true;
      try {
        if (velocity === 0) {
          await this.timedObject.pause();
        } else {
          this.timedObject.playbackRate = velocity;
          await this.timedObject.play();
        }
      } finally {
        this.isActing = false;
      }
    }
  }

  _updatePosition(_position: any) {
    const position = clamp(_position, this.minPosition, this.maxPosition);
    if (!this.isTolerableDeviation(this.currentPosition, position)) {
      this.timedObject.currentTime = position;
    }
  }

  get currentVelocity() {
    return this.timedObject.paused ? 0 : this.timedObject.playbackRate;
  }

  get currentPosition() {
    return this.timedObject.currentTime;
  }

  get minPosition() {
    return 0;
  }

  get maxPosition() {
    return this.timedObject.duration;
  }
}

export default MediaTimingSrc;
