const select = document.getElementById("bgSelect");

select.addEventListener("change", () => {
    if (select.value === "blue") {
        document.body.style.backgroundImage = "url('lightblue.jpg')";
    
    } else if (select.value === "gold") {
        document.body.style.backgroundImage = "url('lightgold.jpg')";

    }
});

const input = document.getElementById("nameInput");
const greeting = document.getElementById("greeting");

window.onload = () => {
    const savedName = localStorage.getItem("name");
    if (savedName) {
        greeting.textContent = "Welcome back, " + savedName + "!";
    }
};

input.addEventListener("change", () => {
    let name = localStorage.getItem("name");
    if (!name) {
        localStorage.setItem("name", input.value);
    }
    greeting.textContent = "Hello, " + localStorage.getItem("name") + "!";
});

if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("service-worker.js").then(() => console.log("Service Worker Registered"));
}