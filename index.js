class MyArray {
    constructor() {
        for (let i = 0, len = arguments.length; i < len; i++) {
            this[i] = arguments[i]
        }
        this.length = arguments.length;
    }

    unshift(el) {
        this.length = this.length + 1
        for (let i = this.length - 1; i >= 0; i--) {
            this[i] = this[i - 1]
        }
        this[0] = el
        return this.length
    }

    shift() {
        const firstElem = this[0]
        for (let i = 1; i < this.length; i++) {
            this[i - 1] = this[i]
        }
        delete this[this.length - 1]
        this.length = this.length - 1
        return firstElem
    }

    concat() {
        for (let i = 0, len = arguments.length; i < len; i++) {
            let arr = arguments[i];
            if (!(arr instanceof MyArray)) {
                throw new Error('Arguments must be instance of MyArray');
            }
            for (let j = 0; j < arr.length; j++) {
                this.push(arr[j]);
            }
        }
        return this;
    }

    push() {
        for (let i = 0, len = arguments.length; i < len; i++) {
            const el = arguments[i];
            this.length = this.length + 1;
            this[this.length - 1] = el;
        }
        return this.length;
    }

    reverse() {
        const arr = new MyArray();
        for (let i = 0; i < this.length; i++) {
            arr[i] = this[i];
        }
        for (let i = this.length - 1, a = 0; i >= 0; i--, a++) {
            this[a] = arr[i]
        }
        return this;
    }

    map(callback) {
        const arr = new MyArray();
        for (let i = 0; i < this.length; i++) {
            arr.push(callback(this[i]))
        }
        return arr;
    }
}

const myArray = new MyArray(1, 2, 3, 4)
console.log(myArray.unshift(0));
console.log(myArray.shift())
console.log(myArray.concat(5, 6))
console.log(myArray.reverse())
console.log(myArray.map(el => el * 2))
