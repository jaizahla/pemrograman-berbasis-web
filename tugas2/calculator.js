//deklarasi fungsi kalkulator menggunakan arrow function
const calculator = (operator, ...numbers) => {

    //jika tidak ada angka yg diberikan / angka kurang dr 2, kembalikan pesan eror
if (numbers.length < 2){
    return "eror : masukkan minimal 2 angka untuk operasi";
}

    //inisialisasi hasil dgn angka pertama dlm array. numbers sbg niali awal result
    //mksdnya ambil angka pertama dr numbers dan disimpan di result
    let result = numbers[0];
    
    //objek yg menyimpan fungsi operator berdasarkan operator
    const operators = {
        '+': (a, b) => a + b, //pertambahan
        '-': (a, b) => a - b, //pengurangan
        '*': (a, b) => a * b, //perkalian
        '/': (a, b) => a / b, //pembagian
        '%': (a, b) => a % b  //modulus (operator utk mgitung sisa hasil bagi dr suatu pembagian)
    };
    
    //cek apkh operator ada dlm objek operator 
// misal operator = '+'  operators['+'] ada di dalam objek { '+': (a, b) => a + b, ... } Berarti if ini bernilai true dan operasi dijalankan.
//jd semisal ada simbol'x' dll yg tdk ada dlm objek operator maka if ini bernilai false dan operasi tdk bisa dijalankan
if (!operators[operator]){
    return "eror : operator tidak valid";
}
    
    //loop utk melakukan operasi pd semua angka dlm array
    //loop dimulai dr index 1 yg mana merupakan angka ke 2
    //Ini adalah perulangan yang mulai dari angka kedua (i = 1) sampai angka terakhir.Setiap iterasi, result akan dihitung dengan angka selanjutnya.
    //misal result = 10 (angka pertama dari numbers)
    // maka Iterasi pertama (i = 1) ,result = 10 + 3 = 13
    //Iterasi kedua (i = 2) result = 13 + 5 = 18. Akhirnya, hasil akhir 18 dikembalikan dengan: return result
    for (let i = 1; i < numbers.length; i++){
        result = operators[operator](result, numbers[i]);

        //ngecek apkh elemen dlm numbers adl angka
    //misal numbers = [10, 'a'] numbers[1] = 'a' → ini bukan angka, typeof 'a' hasilnya 'string', bukan 'number'
	//Jadi if ini bernilai true, dan program akan langsung return error: input hrs berupa angka
    if (typeof result === "string") {
        return 'eror : input harus berupa angka';
    }
       
    }
        //mengembalikan hasil akhir
        return result;
    };
    
    //penggunaan berbagai operasi
    console.log(calculator('+',5,3));
    //output : 8 (5+3)
    console.log(calculator('-',5,3));
    //output : 2 (5-3)
    console.log(calculator('*',5,3));
    //output : 15 (5 dikali 3)
    console.log(calculator('/',10,2));
    //output : 5 (10 dibagi 2)
    console.log(calculator('%',10,3));
    //output : 1 (10 modulus 3)

    //contoh eror
    console.log(calculator('x',5,3)); // output = "operator tidak valid"
    //simbol x tdk ada dlm objek operator
    console.log(calculator('+', 7)); // output = " eror : masukkan minimal 2 angka"
    //angka hanya ada 1 sehingga eror
    console.log(calculator('+')); // output = " eror : masukkan minimal 2 angka"
    //tdk ada angka sm sekali sehingga eror
    console.log(calculator('+', 3,'a')); //output = "input harus berupa angka"
    // ada input berupa string sehingga eror

    alert('kalkulator siap digunakan') // notifikasi saat halaman dimuat