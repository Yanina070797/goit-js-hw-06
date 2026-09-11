class StringBuilder {
  #value;

  constructor(initialValue) {
    this.#value = initialValue;
  }
  getValue() {
    return this.#value;
  }
  padEnd(str) {
    const count = this.#value.length + str.length;
    this.#value = this.#value.padEnd(count, str);
  }

  padStart(str) {
    const count = this.#value.length + str.length;
    this.#value = this.#value.padStart(count, str);
  }
  padBoth(str) {
    const count1 = this.#value.length + str.length;
    this.#value = this.#value.padStart(count1, str);
    const count2 = this.#value.length + str.length;
    this.#value = this.#value.padEnd(count2, str);
  }
}

const builder = new StringBuilder('.');
console.log(builder.getValue()); // "."
builder.padStart('^');
console.log(builder.getValue()); // "^."
builder.padEnd('^');
console.log(builder.getValue()); // "^.^"
builder.padBoth('=');
console.log(builder.getValue()); // "=^.^="
