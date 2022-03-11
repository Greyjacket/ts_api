// import { hello } from "./index";

// hello()

const last1 = (arr: Array<any>) => {
    return arr[arr.length -1];
};

const last2 = <T>(arr: T[]): T => {
    return arr[arr.length -1];
};


const l = last1([1, 2, 3]);
const l2 = last1(['a', 'b'])

// observe that when you hover over this string, it reveals what type is being used by inference
const l3 = last2([1, 2, 3, 8]);
const l4 = last2(["a", "b", "c"])

console.log("1: " + l)
console.log("2: " + l2)
console.log("3: " + l3)
console.log("4: " + l4)
