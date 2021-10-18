function MyArrayProto() {
    this.unshift = function (arr) {
        return arr.unshift('arr')
    }
    this.shift = function (arr) {
        return arr.shift()
    }
    this.concat = function (arr1, arr2) {
        return arr1.concat(arr2)
    }
    this.reverse = function (arr) {
        return arr.reverse()
    }
    this.map = function (arr) {
        return arr.map(el => el * 2)
    }
}

let myArrayProto = new MyArrayProto()

myArrayProto.reverse([1,2,3,4])
