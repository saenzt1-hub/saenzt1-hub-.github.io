const select = document.getElementById("bgSelect");

select.addEventListener("change", () => {
    if (select.value === "blue") {
        document.body.style.backgroundImage = "url('lightblue.jpg')";
    
    } else if (select.value === "gold") {
        document.body.style.backgroundImage = "url('lightgold.jpg')";

    }

    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundRepeat = "no-repeat";
});

const input = document.getElementById("nameInput");
const greeting = document.getElementById("greeting");

window.onload = () => {
    const savedName = localStorage.getItem("name");
    if (savedName) {
        greeting.textContent = "Welcome back, " + savedName + "!";
        input.value = savedName;
    }
};

input.addEventListener("change", () => {
    localStorage.setItem("name", input.value);
    greeting.textContent = "Hello, " + input.value + "!";
});

if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("service-worker.js").then(() => console.log("Service Worker Registered"));
}
