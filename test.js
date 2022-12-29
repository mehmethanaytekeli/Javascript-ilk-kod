const saat = new Date().getHours();
const dakika = new Date().getMinutes();
if(saat>12 && dakika > 30){
    console.log("12.30 dan sonra kapalıyız!");
}else if(saat<8){
    console.log("saat 8 de açılıyoruz ");
}else{
    console.log("hoş geldiniz!")
}