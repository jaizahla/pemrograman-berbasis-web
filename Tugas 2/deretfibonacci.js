//function utk menghasilkan deret fibonacci hingga n angka
function deretfibonacci(n){

    let fib = [0, 1]; //inisialisasi fibonacci dgn 2 angka pertama di deret adl 0 dan 1 

    for (let i = 2; i < n; i++){ 
        //let i = 2 itu loop dimulai dr indeks ke 2 krn index ke 0 (0) dan 1 (1) sudah diisi sblmnya
        //i<n itu loop akan berjalan selama i kurang dr n, n disini tergantung mw brp
        //i++ itu setiap iterasi, nilai i nambah 1

        fib[i] = fib[i-1] + fib[i-2]; //menjumlahkan 2 angka sblmnyautk mendapatkan angka berikutnya
    } 
    return fib //mengembalikan deret fibonacci dlm bentuk array
}

//memanggil function dengan n=10 artinya menghasilkan 10 deret pertama dlm deret fibonacci
console.log(deretfibonacci(10)); 
//console.log muncul nya di inspect
//output = [0,1,1,2,3,5,8,13,21,34]

console.log(deretfibonacci(5));

alert('deret fibonacci sampai 10 deret dan sampai 5 deret') //menampilkan notif alert sbg pemberitahuan