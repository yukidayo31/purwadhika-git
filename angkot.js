// Function Declaration Method with Object.create()
function Angkot (sopir, trayek, kas, penumpang) {
    let angkot = Object.create(methodAngkot)
        angkot.sopir = sopir;
        angkot.trayek = trayek;
        angkot.kas = kas;
        angkot.penumpang = penumpang;
        
        return angkot
    }

const methodAngkot = {
        penumpangNaik: function (namaPenumpang) {
            this.penumpang.push(namaPenumpang);
            return this.penumpang
        },

        penumpangTurun: function (namaPenumpang, bayar) {
            if (this.penumpang.length === 0) {
                console.log("Tidak ada penumpang!");
                return false
            }
            for (let i = 0; i < this.penumpang.length; i++) {
                if (this.penumpang[i] == namaPenumpang) {
                    delete this.penumpang[i] ;
                    this.kas += bayar;
                    return this.penumpang
                }
            }
        }
}

let angkot1 = Angkot("Yamaken", ["Cikini", "Gondangdia"], 0, [])
console.log(angkot1)

console.log(angkot1.penumpangTurun("Icky"))
console.log(angkot1.penumpangNaik("Bryan"))
console.log(angkot1.penumpangNaik("Ayase"))
console.log(angkot1.penumpang)
console.log(angkot1.penumpangTurun("Ayase", 5000))
console.log(angkot1.penumpang)
console.log(angkot1.kas)

    
//////////////////////////////////////////////////
/*                Class method                 */
//////////////////////////////////////////////////

// class TransportasiUmum {
//     constructor(sopir, trayek, kas, penumpang) {
//         this.sopir = sopir;
//         this.trayek = trayek;
//         this.kas = kas;
//         this.penumpang = penumpang;
//         this.penumpangNaik = function (namaPenumpang) {
//             this.penumpang.push(namaPenumpang);
//             return this.penumpang
//         }
//         this.penumpangTurun = function (namaPenumpang, bayar) {
//             if (this.penumpang.length === 0) {
//                 console.log("Tidak ada penumpang!");
//                 return false
//             }
//             for (let i = 0; i < this.penumpang.length; i++) {
//                 if (this.penumpang[i] == namaPenumpang) {
//                     delete this.penumpang[i] ;
//                     this.kas += bayar;
//                     return this.penumpang
//                 }
//             }
//         }
//     }
// }

// class BisKota extends TransportasiUmum {
//     constructor (sopir, trayek, kas, penumpang, halte) {
//         super(sopir, trayek, kas, penumpang)
//         this.halte = halte
//     }
// }

// class Mikrolet extends TransportasiUmum {
//     constructor (sopir, trayek, kas, penumpang, daerah) {
//         super(sopir, trayek, kas, penumpang)
//         this.daerah = daerah
//     }
// }

// let tj1 = new BisKota("Alief", ["Cikini", "Blok M"], 0, [], "Lebak Bulus")
// console.log(tj1)

// console.log(tj1.penumpangTurun("Rina"))
// console.log(tj1.penumpangNaik("Rina"))
// console.log(tj1.penumpangNaik("SZA"))
// console.log(tj1.penumpangNaik("Mia"))
// console.log(tj1.penumpangTurun("Mia", 2500))
// console.log(tj1.kas)


