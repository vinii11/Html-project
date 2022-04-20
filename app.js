let counters = document.querySelectorAll('.counter');
let time = 300;

counters.forEach(counter => {
    let updateCount = () => {
        let target = +counter.getAttribute('data-target');
        let count = +counter.innerText;


    }
    updateCount();

});

let healthCondition = document.querySelector('.health');


setTimeout(() => {
    healthCondition.innerText = "Every Day Must Follow These"
}, 2000);