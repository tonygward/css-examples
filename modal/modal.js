const dialog = document.getElementById("dialog");

const showModal = document.querySelector(".show");
showModal.addEventListener("click", () => {
    dialog.showModal();
});

const closeModal = document.querySelector(".close");
closeModal.addEventListener("click", () => {
    dialog.close();
});