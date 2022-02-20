// console.log('hi there ts');

// const myName = 'shanil';

// myName = 'sdnjsd';

// let lastName;

// lastName = 'skdvns'

let a = 2;
let b = 4;

const add = (a:number, b:number) => {
    return a + b;
};
console.log('add: ' , add(a, b));


const sub = (a:number, b:number): number => {
    return a - b;
};
console.log('sub: ' , sub);

function mul(a:number, b:number): number {
    return a * b;
};


const div = function divide(a:number, b:number): number {
    return a / b;
};

interface PostGatekeeper {
    title: string;
    daysOld: number;
    published: boolean;
}

const post = {
    title: 'Latest typeScript news',
    daysOld: 10,
    published: true,
};

const printPost = (postToPrint: PostGatekeeper) => {
    return `${postToPrint.title} (${postToPrint.daysOld}) days old`;
};
console.log(printPost(post));

