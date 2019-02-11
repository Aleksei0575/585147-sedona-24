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
    popup.classList.toggle("modal-show");
    if (storageArrival || storageDeparture) {
        arrival.value = storageArrival;
        departure.value = storageDeparture;
        numberPersons.focus();
    } else {
        arrival.focus();
    }
});

window.onload = function() {
    document.querySelector('a[href="search-form.html"]').click();
}

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
        if (popup.classList.contains("modal-show")) {
            evt.preventDefault();
            popup.classList.remove("modal-show");
            popup.classList.remove("modal-error");
        }
    }
});

