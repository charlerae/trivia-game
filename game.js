
// importing required modules
import { getClue as getClueFromCallback } from './callback-version.js';
import { getClue as getClueFromPromise } from './promise-version.js';

// creating button variables
const cbButton = document.getElementById('use-callback');
const promiseButton = document.getElementById('use-promise');
const asyncButton = document.getElementById('use-async-await');

// creating div variables
const questionDiv = document.getElementById('question');
const answerDiv = document.getElementById('answer');
const valueDiv = document.getElementById('value');
const categoryTitleDiv = document.getElementById('category-title');


cbButton.addEventListener('click', event => {
    getClueFromCallback((error, clue) => {
        // console.log(xmlReq);
        if (error !== null) {
            console.error(error);
        } else {
            // console.log(data);
            questionDiv.innerHTML = `${clue.question}`;
            answerDiv.innerHTML = `${clue.answer}`;
            valueDiv.innerHTML = `${clue.value}`;
            categoryTitleDiv.innerHTML = `${clue.category.title}`;
        }

    })
})


// promise getClue event listener
promiseButton.addEventListener('click', event => {
    getClueFromPromise()
        .then((obj) => {
        questionDiv.innerHTML = `${obj.question}`;
        answerDiv.innerHTML = `${obj.answer}`;
        valuenDiv.innerHTML = `${obj.question.value}`;
        categoryTitleDiv.innerHTML = `${obj.category.title}`;
    })
})
