function Tambah(nilai1, nilai2) {
    return(nilai1 + nilai2)
}

function Kurang(nilai1, nilai2) {
    return(nilai1 - nilai2)
}

function Kali(nilai1, nilai2) {
    return(nilai1 * nilai2)
}

function Bagi(nilai1, nilai2) {
    return(nilai1 / nilai2)
}

function calculate(nilai1, nilai2, arg) {
    switch(arg) {
        case 'Tambah':
            return Tambah (nilai1, nilai2)
        case 'Kurang':
            return Kurang (nilai1, nilai2)
        case 'Kali':
            return Kali (nilai1, nilai2)
        case 'Bagi':
            return Bagi (nilai1, nilai2)        
    }
}