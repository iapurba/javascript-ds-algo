class MyArray {
  constructor() {
    this.data = {};
    this.length = 0
  }
  get(index) {
    return this.data[index];
  }
  push(item) {
    this.data[this.length] = item;
    this.length++;
    return this.length;
  }
  pop() {
    const lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return lastItem;
  }
  delete(index) {
    const unwantedItem = this.data[index];
    this._shiftItemToLeft(index);
    delete this.data[this.length - 1]
    this.length--;
    return unwantedItem;
  }
  unshift(item) {
    this._shiftItemToRight(0);
    this.data[0] = item;
    this.length++;
    return this.length;
  }
  shift() {
    const firstItem = this.data[0];
    this._shiftItemToLeft(0);
    delete this.data[this.length - 1];
    this.length--;
    return firstItem;
  }
  splice(index, deleteCount, item) {
    if (deleteCount === 0) {
      this._shiftItemToRight(index);
      this.data[index] = item;
      this.length++;
    }
    else if (deleteCount === 1) {
      this.data[index] = item;
    }
    else if (deleteCount > (this.length - index)) {
      for (let i = this.length; i > index; i--) {
        delete this.data[i];
        this.length--;
      }
      this.data[index] = item;
      this.length++;
    }
    else if (this.length > deleteCount) {
      this.data[index] = item;
      for (let i = index; i < this.length; i++) {
        this.data[i + 1] = this.data[i + deleteCount];
      }
      const newLength = this.length - deleteCount + 1;
      for (let j = this.length; j >= newLength; j--) {
        delete this.data[j];
      }
      this.length = newLength;
    }
  }

  _shiftItemToLeft(index) {
    for (let i = index; i < this.length; i++) {
      this.data[i] = this.data[i + 1];
    }
  }
  _shiftItemToRight(index) {
    for (let i = this.length; i > index; i--) {
      this.data[i] = this.data[i - 1];
    }
  }
}

const myArray = new MyArray();

myArray.push(1);
myArray.push(22);
myArray.push(10);
myArray.push(36);
myArray.push(11);
myArray.push(30);
myArray.push(28);
myArray.push(7);
myArray.unshift('tt')
myArray.splice(3, 1, 'hihi')
console.log(myArray);

