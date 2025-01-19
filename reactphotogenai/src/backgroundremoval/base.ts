class TimingSrcBase {
    static defaultOptions = {
      pollFrequency: 250,
      tolerance: 1
    };
  
    private _pollIntervalId: number | null = null;
    private _timedObject: any;
    private _timingObject: any;
    private _options: typeof TimingSrcBase.defaultOptions;
  
    constructor(timedObject: any, timingObject: any, options: object = {}) {
      this._timedObject = timedObject;
      this._timingObject = timingObject;
      this._options = Object.assign({}, TimingSrcBase.defaultOptions, options);
    }
  
    connect() {
      this.disconnect();
      this._pollIntervalId = window.setInterval(
        () => this.sync(),
        this.options.pollFrequency
      );
    }
  
    // Public method that can be overridden in subclasses
    public sync() {
      throw new Error("`sync` method is not implemented");
    }
  
    // To be implemented by the extending class
    currentState(): void {
      throw new Error("`currentState` method is not implemented");
    }
  
    disconnect() {
      if (this._pollIntervalId) {
        window.clearInterval(this._pollIntervalId);
      }
    }
  
    isTolerableDeviation(current: number, expected: number): boolean {
      return Math.abs(current - expected) <= this.options.tolerance;
    }
  
    get timedObject() {
      return this._timedObject;
    }
  
    get timingObject() {
      return this._timingObject;
    }
  
    get options() {
      return this._options;
    }
  }
  
  export default TimingSrcBase;
  