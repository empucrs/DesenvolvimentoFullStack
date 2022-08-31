//02a_basicPromise.js
const myFirstPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Successo!");
  }, 2000);
});

myFirstPromise.then((successMessage) => {
  console.log(`Finalizado! ${successMessage}`);
});

console.log("Fim do programa")