const hasilUjianJohn = [75,80,79,90]
const hasilUjianEd = [66,77,88,99]

const gabunganHasilUjian = [...hasilUjianJohn,...hasilUjianEd]

// nilai min,max,average menggunakan loop dan flowchartnya

// min
let minimum = gabunganHasilUjian[0]
for(i = 0; i < gabunganHasilUjian.length; i++){
    if(minimum > gabunganHasilUjian[i]){
        minimum = gabunganHasilUjian[i]
    }
}
console.log("Nilai minimum pada array gabungan adalah :" + minimum)

// max
let maximum = gabunganHasilUjian[0]
for(j = 0; j < gabunganHasilUjian.length; j++){
    if(maximum < gabunganHasilUjian[j]){
        maximum = gabunganHasilUjian[j]
    }
}
console.log("Nilai maximum pada array gabungan adalah :" + maximum)

let average = 0
for(k = 0; k < gabunganHasilUjian.length; k++){
    average = average + gabunganHasilUjian[k]
}
console.log("Nilai rata-rata dari gabungan hasil ujian adalah :" + average/gabunganHasilUjian.length)

