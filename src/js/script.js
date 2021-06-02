let reverse = '';
let prom;
let s = '123456';
prom = s.split('');
console.log(s);
console.log(prom);


for (let i = prom.length - 1; i <= 0; i--) {
    reverse = reverse + prom[i];
}
console.log(reverse);