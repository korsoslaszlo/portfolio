// mennyisegi feltetelekkel
const emailPattern = /^[^\s@]{3,}@[^\s@]{3,}\.[^\s@]{2,}$/;       
const passwordPattern = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-;,]).{8,}$/

function ellenorzesEmail() {
    const email = document.getElementById("email").value.trim();

    if (email.match(emailPattern)) {
        return true;
    }
    else {
        return false;
    }
}

function passwordEllenorzes() {
    const password = document.getElementById("password").value.trim();

    if (password.match(passwordPattern)) {
        return true;
    }
    else {
        return false;
    }
}

function passwordEllenorzesAgain() {
    const passwordAgain = document.getElementById("password").value.trim();

    if (passwordAgain.match(passwordPattern)) {
        return true;
    }
    else {
        return false;
    }
}

function passwordEgyenloEVagyNemEzAKerdes() {
    if (passwordEllenorzes(password) == passwordEllenorzesAgain(passwordAgain)) {
        return true
    }
    else {
        return false
    }
}

function regEllenorzes() {
    if (ellenorzesEmail() === true && passwordEllenorzes() === true && passwordEllenorzesAgain() === true) {
        alert("Sikeres regisztráció!")
    }
    else (ellenorzesEmail() === false && passwordEllenorzes() === true && passwordEllenorzesAgain() === true) {
        alert("Rosszul adtad meg az e-mail címet.")
    }
}