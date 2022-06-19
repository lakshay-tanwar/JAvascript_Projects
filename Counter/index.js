let count = 0;

// const value = document.querySelector("#value");
// const btns = document.querySelectorAll(".btn")


// console.log(btns)

// btns.forEach(function(btn) {
//     btn.addEventListener("click", function(e) {
//         const styles = e.currentTarget.classList;
//         if (styles.contain('decrease')) {
//             count--;

//         } else if (styles.contain('increase')) {
//             count++;

//         } else {
//             count = 0;

//         }
//         value.textContent = count;
//     })
// })




const value = document.getElementById('value')
const dec = document.querySelector(".decrease")
const reset = document.querySelector(".reset")
const inc = document.querySelector(".increase")

dec.addEventListener("click", function() {
    count--;
    value.textContent = count;
    if (count < 0) {
        value.style.color = "red";
    } else if (count === 0) {
        value.style.color = "#000";
    }
})
reset.addEventListener("click", function() {
    count = 0;
    value.textContent = count;
    if (count === 0) {
        value.style.color = "#000";
    }

})
inc.addEventListener("click", function() {
    count++;
    value.textContent = count;
    if (count > 0) {
        value.style.color = "green";
    } else if (count === 0) {
        value.style.color = "#000";
    }
})