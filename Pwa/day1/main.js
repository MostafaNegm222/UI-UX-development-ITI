if ("serviceWorker" in navigator) {
  console.log("Service Worker exists");
  navigator.serviceWorker
    .register("./sw.js")
    .then((registration) => console.log("Service Worker registered:", registration.scope))
    .catch((err) => console.log("Service Worker registration failed", err));
}

let promptEvent;
const installBtn = document.getElementById("btn");

window.addEventListener("beforeinstallprompt", (event) => {
  event.preventDefault();
  promptEvent = event;
});

installBtn.addEventListener("click", () => {
  if (!promptEvent) return;
  promptEvent.prompt();
  promptEvent.userChoice.then((choice) => {
    console.log(choice.outcome === "accepted" ? "User accepted" : "User dismissed");
  });
});
