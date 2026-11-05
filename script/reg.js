// mennyisegi feltetelekkel
const emailPattern = /^[^\s@]{3,}@[^\s@]{3,}\.[^\s@]{2,}$/;
const email = "s@t.h";         

console.log(email.match(emailPattern));

function ellenorzesEmail() {
    const email = document.getElementById("email").value.trim();

    if (email.match(emailPattern)) {
        alert("buksisimi email megfelelő.")
    }
    else {
        alert("nem megfelelő email struktúra")
    }
}

const passwordPattern = /^[^\s](?=.*[a-z])