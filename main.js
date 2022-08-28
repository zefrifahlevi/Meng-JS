function tambah(nilai1, nilai2) {
    return(nilai1 + nilai2)
}

function kurang(nilai1, nilai2) {
    return(nilai1 - nilai2)
}

function kali(nilai1, nilai2) {
    return(nilai1 * nilai2)
}

function bagi(nilai1, nilai2) {
    return(nilai1 / nilai2)
}

function calculate(nilai1, nilai2, arg) {
    switch(arg) {
        case 'tambah':
            return tambah(nilai1, nilai2)
        case 'kurang':
            return kurang(nilai1, nilai2)
        case 'kali':
            return kali(nilai1, nilai2)
        case 'bagi':
            return bagi(nilai1, nilai2)
    }
}

console.log("Jika Kamu Anak IT Masukan Angka Positif")
const Angka_Yang_dimasukan_ = (angka) => {
    if(angka >= 1) {
        return("Mantap sekali kamu anak IT")
    }
    else {
        return("Okee No problem karena salah masukan angka")
    }
}

const validateName = (name) => {
    if(name.length < 3) {
        return("Nama anda kurang lengkap")
    }
    else {
        return("Terimakasih sudah mengisi nama anda")
    }
}

let akun_zefri = 10
let teman = 4

function testing() {
    for(let i = 0; i <= akun_zefri; i++) {
        if(i == 0) {
            console.log(' ')
        }
        else if(i%2 == 0) {
            console.log(i,'Merupakan bilangan genap')
        }
        else {
            console.log(i,'Merupakan bilangan ganjil')
        }
    }
}