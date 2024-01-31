const draggables = document.querySelectorAll(".draggableItem");
const containers = document.querySelectorAll(".draggableItemContainer");

draggables.forEach((draggable) => {
  draggable.addEventListener("dragstart", () => {
    draggable.classList.add("currentlyDragging");
  });

  draggable.addEventListener("dragend", () => {
    draggable.classList.remove("currentlyDragging");
  });
});

containers.forEach((container) => {
  container.addEventListener("dragover", (e) => {
    e.preventDefault();
    const draggable = document.querySelector(".currentlyDragging");
    container.appendChild(draggable);
  });
});
