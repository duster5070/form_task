var x = document.getElementById("next_1"); //  next in the first page
var y = document.getElementById("prev");  // previous in the second page
var z = document.getElementById("next_2"); //  next in the second page

var a = document.querySelector(".first_page"); //first page div
var b = document.querySelector(".second_page"); //second page div
var c = document.querySelector(".third_page"); //third page div



// next fisrt page
x.addEventListener("click",(e)=>
{
    e.preventDefault();
    a.classList.remove("show");
    b.classList.add("show");
})

// prev second page
y.addEventListener("click",(e)=>
{
    e.preventDefault();
    b.classList.remove("show");
    a.classList.add("show")

})


// next second page
z.addEventListener('click',(e)=>
{
    e.preventDefault();
    b.classList.remove("show");
    c.classList.add("show")
})