let aim = new Date(new Date().getFullYear() + 0, 4, 14);

setInterval(function() {
console.clear()
let now = new Date();
let remainder = aim - now;

if (remainder <= 0) {
    console.log("SEÇİM GÜNÜÜÜÜÜÜ!");
    
} else {
    let days = Math.floor(remainder / (1000 * 60 * 60 * 24));
    let hours = Math.floor((remainder % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((remainder % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((remainder % (1000 * 60)) / 1000);

    console.log(
        "SEÇİME KALAN SÜRE: " +
        days + " GÜN " +
        hours + " SAAT " +
        minutes + " DAKİKA " +
        seconds + " SANİYE"
    );
}
}, 1000);
