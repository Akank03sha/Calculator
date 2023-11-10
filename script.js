let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');

let string = "";
let arr = Array.from(buttons);
arr.forEach(button => {
    button.addEventListener("click", (e) => {
        if(e.target.innerHTML == "="){
            string = string.replace(/x/g, '*');
            document.querySelector("input").value = eval(string);
        }

        else if(e.target.innerHTML == "RESET")
        {
            string = "";
            document.querySelector("input").value = string;
        }

        else if(e.target.innerHTML == "DEL")
        {
            string = string.substring(0, string.length-1);
            document.querySelector("input").value = string;
        }
        
        else{
            string += e.target.innerHTML + " ";
            document.querySelector("input").value = string;
        }    
    })
})