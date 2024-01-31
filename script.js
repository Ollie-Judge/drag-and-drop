const draggables = document.querySelectorAll(".draggableItem");
const containers = document.querySelectorAll(".draggableItemContainer");

draggables.forEach((draggable) => {
  draggable.addEventListener("dragstart", () => {
    console.log("start");
  });
});
