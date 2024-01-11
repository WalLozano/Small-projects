const buttons = document.querySelectorAll('.btn');
const display = document.querySelector('.pantalla')


buttons.forEach(btn =>{
    btn.addEventListener("click", () => {
        const clickedBtn = btn.textContent;

        if(btn.id === "C"){
            display.textContent = "0"
            return;
        }

        if(btn.id === "delete"){
            if (display.textContent.length === 1 || display.textContent === "Error!" ) {
                display.textContent = "0"
            }else{
                display.textContent = display.textContent.slice(0, -1)
            } return;
        }
        
        if(btn.id === "equal"){
            try {display.textContent = eval(display.textContent)
            } catch (error) {
                display.textContent = "Error!"
            }   
            return;         
        }

        if (display.textContent === '0' || display.textContent === "Error!"){
            display.textContent = clickedBtn
        } 
        else {
            display.textContent += clickedBtn
        };

    })
})

{}