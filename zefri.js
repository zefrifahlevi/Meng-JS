const nama = [
    'zefri',
    'drian',
    'patrzalek',
    'driansyah',
] 

nama.splice();
console.log(nama); 

console.log(nama[0]);

for (const i of nama) {
    console.log(i)
} 

let akun_zefri = 10
let bestie = 4

function akun() {
    for(let i = 0; i <= akun_zefri; i++) {
        if(i = 0) {
            console.log('')
        }
        else if (i % 2 == 0) {
            console.log(i,'Merupakan BIlangan genap')
        }
        else {
            console.log(i,'Merupakan bilangan ganjil')
        }
    }
}