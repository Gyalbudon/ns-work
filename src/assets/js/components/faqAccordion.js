import $ from "jquery";

var questions = document.querySelectorAll(".faq .faq__heading");
var answers = document.querySelectorAll(".faq .faq__answer");

function hidePanels() {
    $.each(answers, function (a, answer) {
        answer.classList.remove("is-shown");
    });
    $.each(questions, function (q, question) {
        question.classList.remove("is-opened");
        var content = question.nextElementSibling;
        if (content.style.maxHeight) {
            content.style.maxHeight = null;
            content.style.marginTop = "0";
        }
    });
}

function faqAccordion() {
    $.each(questions, function (q, question) {
        question.addEventListener("click", function () {
            var content = question.nextElementSibling;
            if (!question.classList.contains("is-opened")) {
                hidePanels();
                content.classList.add("is-shown");
                if (content.style.maxHeight) {
                    content.style.maxHeight = null;
                    content.style.marginTop = "0";
                } else {
                    content.style.maxHeight = content.scrollHeight + "px";
                    content.style.marginTop = "20px";
                }
                question.classList.add("is-opened");
            } else {
                question.classList.remove("is-opened");
                content.classList.remove("is-shown");
                if (content.style.maxHeight) {
                    content.style.maxHeight = null;
                    content.style.marginTop = "0";
                } else {
                    content.style.maxHeight = content.scrollHeight + "px";
                    content.style.marginTop = "20px";
                }
            }
        });
    });
}


export {
    faqAccordion
};