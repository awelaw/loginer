const backlink = document.getElementById('goBack');

backlink.addEventListener('click', function (event){
    event.preventDefault();
    window.location.href = 'resp2-login.html';
});
document.getElementById("confirm").onclick = function () {
    document.getElementById("azoz").textContent = 'Azoz ya jrar';
};