const draggables = document.querySelectorAll(".draggableItem");
const containers = document.querySelectorAll(".draggableItemContainer");

draggables.forEach((draggable) => {
  draggable.addEventListener("dragstart", () => {
    draggable.classList.add("currentlyDragging");
    console.log("start");
  });

  draggable.addEventListener("dragend", () => {
    draggable.classList.remove("currentlyDragging");
    console.log("end");
  });
});
