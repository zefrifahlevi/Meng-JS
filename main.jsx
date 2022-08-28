let akun_gua = 20
let bestie = 5

function bagiin() {
    for(let i = 0; i <= akun_gua; i++) {
        if(i == 0) {
            console.log('')
        }
        else if(i%2 == 0) {
            console.log(i, 'Bilangan Genap')
        }
        else {
            console.log(i, 'Bilangan Ganjil')
        }
    }
}