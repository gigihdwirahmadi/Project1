function formfunction(){
let nama= document.querySelector('#exampleFormControlInput1').value;
let pwd= document.querySelector('#inputPassword').value;



let nama1 = localStorage.getItem('email');
let pasword1 = localStorage.getItem('pasword');

if (nama1==nama && pwd==pasword1 ){
    alert("Berhasil Login");
    window.location.href="home-copy.html";
    let nilai= 1;
    localStorage.setItem('nilai',nilai)
    alert(nilai)
}
else {
    alert("nama atau pasword tidak sesuai");
    
}

}

