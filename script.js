const quiz = [{
        question: "Jax's favorite food? ",
        a: "Egg",
        b: 'Meat',
        c: 'Rice',
        d: 'Lamp',
        correct: "a"
}
]


const loreQuiz = document.getElementById('quiz');
const choice = document.querySelectorAll('.choice');
const loreQuestion = document.getElementById('quiz-question')
const choce_a = document.getElementById('choice_a');
const choce_b = document.getElementById('choice_b');
const choce_c = document.getElementById('choice_c');
const choce_d = document.getElementById('choice_d');
const skipBtn = document.getElementById('skip');
const submitBtn = document.getElementById('submit');

let currentQuiz = 0;

const currentQuizData = quiz[currentQuiz]

loreQuestion.innerText = currentQuizData.question;
choce_a.innerText = currentQuizData.a;
choce_b.innerText = currentQuizData.b;
choce_c.innerText = currentQuizData.c;
choce_d.innerText = currentQuizData.d;

submitBtn.addEventListener('click',function(){
 
    choice.forEach( choice =>{
        if(choice.checked){
            console.log(choice.id);
        }
    })
})