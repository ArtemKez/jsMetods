class MyArray {
    constructor(...args) {
        this.args = args;
    }
    unshift(el) {
        const arr = [el]
        for (let i = 0; i < this.args.length; i++) {
            arr.push(this.args[i])
        }
        this.args = arr
        return this.args.length
    }
    shift() {
        // let [firstArg,...argsArr] = this.args
        // this.args = argsArr
        // return firstArg

        const arr = []
        let firstElem = this.args[0]
        for (let i = 1; i < this.args.length; i++) {
            arr.push(this.args[i])
        }
        this.args = arr
        return firstElem
    }
    concat(...args) {
        const arr = []
        for (let i = 0; i < this.args.length; i++) {
            arr.push(this.args[i])
        }
        arr.push(...args)
        return arr
    }
    reverse() {
        const arr = []
        for (let i = this.args.length-1; i >= 0; i--) {
            arr.push(this.args[i])
        }
        return this.args = arr
    }
    map(callback) {
        const arr = []
        for (let i = 0; i < this.args.length; i++) {
            arr.push(callback(this.args[i]))
        }
        return arr;
    }
}

const myArray = new MyArray(1,2,3,4)
console.log(myArray.unshift(0));
console.log(myArray.shift())
console.log(myArray.concat(5,6))
console.log(myArray.reverse())
console.log(myArray.map(el=>el*2))
