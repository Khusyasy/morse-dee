const map = require("./map");

class Morse {
    constructor(input, isMorse = true) {
        this._input = input.toLowerCase();
        this._isMorse = isMorse;
    }

    mapToMorse = map.toMorse;

    mapFromMorse = map.fromMorse;

    decode(value) {
        return value
            .split(/\s*\/\s*/)
            .map(w=>(
                w.split(" ")
                    .map(c=>this.mapFromMorse[c] ?? c)
                    .join("")
            ))
            .join(" ");
    }

    encode(value) {
        return value
            .split(" ")
            .map(w=>(
                w.split("")
                    .map(c=>this.mapToMorse[c] ?? c)
                    .join(" ")
            ))
            .join(" / ");
    }

    get decoded() {
        return this._isMorse ? this.decode(this._input) : this._input;
    }

    get encoded() {
        return !this._isMorse ? this.encode(this._input) : this._input;
    }
}

module.exports = Morse;
