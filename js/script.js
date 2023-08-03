// javascript autoslider
let slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
    showDivs(slideIndex += n);
}

function showDivs(n) {
    let i;
    let imgList = document.getElementsByClassName("slider");
    console.log(imgList.length);
    if (n > imgList.length) {slideIndex = 1}
     else if (n < 1) {slideIndex = imgList.length};

    for (i= 0; i < imgList.length; i++) {
        imgList[i].style.display ="none";
    }
    imgList[slideIndex-1].style.display = "block";
}

setInterval(() => {
    plusDivs(1)
}, 2000);

// form validation
const yourName = document.getElementById("name")
const email = document.getElementById("email")
const option = document.getElementById("interest")
const submitButton = document.getElementById("submitButton")

submitButton.addEventListener("click", function(event) {
    event.preventDefault()
    if (yourName.value == "") {
        alert("Nama Tidak Boleh Kosong")
    }
    else if (email.value == "") {
        alert("Email Tidak Boleh Kosong")
    } 
    else if (option.selectedIndex < 1) {
        alert("What are you interested in?")
    }
    else {
        alert("Terima Kasih Sudah Mengirim")
    }
})
