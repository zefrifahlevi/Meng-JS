const nama = "Zefri Fahlevi";
let usia = 19;

function generateBiodata () {
    if (usia >= 1 && usia <= 5 ) {
        console.log('Kamu Masih Balita')
    }
    else if (usia >= 6 && usia <= 10) {
        console.log('Kamu Anak-Anak')
    }
    else if (usia >= 11 && usia <= 18) {
        console.log('Kamu Remaja')
    }
    else if (usia >= 19 && usia <= 30) {
        console.log('Kamu Dewasa')
    }
    else if (usia >= 31 && usia <= 60) {
        console.log('Kamu Sudah Tua')
    }
    else if (usia >= 61 && usia <= 100) {
        console.log('Kamu Sangat Tua')
    }
    else if (usia >= 101) {
        console.log('Tidak Mungkin')
    }
    else { 
        console.log('Belum Lahir')
    }
}

console.log(`
Atas Nama: ${nama}
Usia Kamu: ${usia}`)
generateBiodata();