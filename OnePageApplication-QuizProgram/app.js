/******** TODO LIST ********/

const addForm = document.querySelector(".add");
const list = document.querySelector(".todos");
const search = document.querySelector(".search input");


const generateTemplate = todo => {
    let html = `
        <li class="list-group-item d-flex justify-content-between align-items-center">
            <span>${todo}</span>
            <i class="far fa-trash-alt delete"></i>
        </li>
    `;


    list.innerHTML += html;
}

// Add To do
addForm.addEventListener("submit", e => {
    e.preventDefault();


    const todo = addForm.add.value.trim(); 
    
    if(todo.length){
        generateTemplate(todo);
        addForm.reset() 
    }
})




// Remove to do
list.addEventListener("click", e => {
    if(e.target.classList.contains("delete")){
        e.target.parentElement.remove();
    }
})
// Filter to do
const filterTodos = term => {
    
    Array.from(list.children)
        .filter((todo) => !todo.textContent.toLowerCase().includes(term))
        .forEach((todo) => todo.classList.add("filtered"))
    
   
    Array.from(list.children)
        .filter((todo) => todo.textContent.toLowerCase().includes(term))
        .forEach((todo) => todo.classList.remove("filtered"))
}
// Keyup event
search.addEventListener("keyup", () => {
    const term = search.value.trim().toLowerCase();
    filterTodos(term)
})


/******** QUIZ ********/

const correctAnswers = ["B", "A", "B", "A"];
const form = document.querySelector(".quiz-form");
const result = document.querySelector(".result");

form.addEventListener("submit", e => {
    e.preventDefault();

    let score = 0;
    const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value];

    // Check answer
    userAnswers.forEach((answer, index) => {
        if(answer === correctAnswers[index]) {
            score += 25;
        }
    })
    
    // Show result
    scrollTo(0,0); 
    result.classList.remove("d-none");

    let output = 0;
    const timer = setInterval(() => {
        result.querySelector("span").textContent = `${output}%`;

        if(output === score) {
            clearInterval(timer);
        } else {
            output++;
        }
    }, 10);
});