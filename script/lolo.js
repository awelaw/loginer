document.getElementById("cton4").onclick = function () {
    const hla = document.getElementById("cton1").value;
    console.log(hla);
    const container = /\d/;
    const container2 = /[^a-zA-Z0-9@.]/;
    if (container.test(hla)) {
        document.getElementById("ctoni").textContent = 'you cant use numbers!';
    }   else if (container2.test(hla)) {
        document.getElementById("ctoni").textContent = 'you cant use special charecters!';
    }   else {
        document.getElementById("ctoni").textContent = '';
    }
    
    const cat = document.getElementById("cton2").value;
    const container3 = /\d/;
    if (cat.length === 0) {
        document.getElementById("ctoni2").textContent = 'type a password!';
    }   else if (!container3.test(cat)) {
        document.getElementById("ctoni2").textContent = 'you can only use numbers!';
    }   else if (cat.length < 5) {
        document.getElementById("ctoni2").textContent = 'password is too short!';
    }   else if  (cat.length > 12) {
        document.getElementById("ctoni2").textContent = 'password is too long!';
    }   else if (cat.length > 5 && cat.length < 12) {
        document.getElementById("ctoni2").textContent = '';
    }

};

const forgotlink = document.getElementById('forget');

forgotlink.addEventListener('click', function (event){
    event.preventDefault();
    window.location.href = 'reset-password.html';
});

