// function hide_div(){
//     var check=document.getElementById("contact").querySelectorAll(".contact-section")
//     if(check.style.display=== "none"){
//         check.style.display="block"
//     }
//     else(
//         check.style.display="none"
//     )
    
// }
button=document.getElementById("btn")
button.addEventListener('click', function hide_div(){
    button.textContent="Message Sent";
})
function newImage(){
    document.getElementById("image").src="assets/my_images/undraw_handcrafts_star.png"
    console.log("ho")

}
function oldImage(){
    document.getElementById("image").src="assets/my_images/undraw_handcrafts_smartphone.png"

}