var link = document.querySelector (".btn-search-form");
var popup = document.querySelector(".modal-search");

var form = popup.querySelector("form");
var arrival = popup.querySelector(".arrival-date");
var departure = popup.querySelector(".departure-date");
var numberPersons = popup.querySelector(".quantity");

var isStorageSupport = true;
var storageArrival = "";
var storageDeparture = "";


try {
    var storageArrival = localStorage.getItem("arrival");
    var storageDeparture = localStorage.getItem("departure");
} catch (err) {
    isStorageSupport = false;
};

link.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.toggle("modal-close");
    popup.classList.add("modal-show");
    popup.classList.remove("modal-error");
    if (storageArrival || storageDeparture) {
        arrival.value = storageArrival;
        departure.value = storageDeparture;
        numberPersons.focus();
    } else {
        arrival.focus();
    }
});

form.addEventListener("submit", function (evt) {
    if (!arrival.value || !departure.value) {
        evt.preventDefault();
        popup.classList.remove("modal-error");
        popup.offsetWidth = popup.offsetWidth;
        popup.classList.add("modal-error");
    } else {
        if (isStorageSupport) {
            localStorage.setItem("arrival", arrival.value);
            localStorage.setItem("departure", departure.value);
        }
    }
});

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
          evt.preventDefault();
          popup.classList.add("modal-close");
          popup.classList.remove("modal-error");
    }
});

/*==================================================
===Код для автоматического открытия модального окна
// window.onload = function(evt) {
//     popup.classList.add("modal-show");
// };
===============================================*/

/*==================================================
===Код для другой формы которая изначально скыта=====
// window.addEventListener("keydown", function (evt) {
//     if (evt.keyCode === 27) {
//         if (popup.classList.contains("modal-show")) {
//             evt.preventDefault();
//             popup.classList.remove("modal-show");
//             popup.classList.remove("modal-error");
//         }
//     }
// });
=====================================================*/