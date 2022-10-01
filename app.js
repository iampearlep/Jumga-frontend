const nextButton = document.querySelector(".btn-next");
const prevButton = document.querySelector(".btn-prev");
const steps = document.querySelectorAll(".step");
const formSteps = document.querySelectorAll(".form-step");

let active = 1;

nextButton.addEventListener("click", function() {
    active++;
    if (active > steps.length) {
        active = steps.length;
    }
    updateProgress();
})
prevButton.addEventListener("click", function() {
    active--;
    if (active < 1) {
        active = 1;
    }
    updateProgress();
})

const updateProgress = function() {
    console.log('steps.length =>' + steps.length);
    console.log('active => ' + active);

    steps.forEach(function(step, i){
        if (i === active-1) {
            step.classList.add('active');
            formSteps[i].classList.add('active');
            console.log('i =>' + i);
        } else {
            step.classList.remove('active');
            formSteps[i].classList.remove('active');
        }
    });
    if (active === 1) {
        prevButton.disabled = true;
    } else if (active === steps.length) {
        nextButton.disabled = true;
    } else {
        prevButton.disabled = false;
        nextButton.disabled = false;
    }
}

function validateEmail (email) {
	var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(String(email).toLowerCase());
}
