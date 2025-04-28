// dev option, toggle on/off the "closeAll" feature
const closeAll = true;

// fetch elements
const fields = document.querySelectorAll("#school .field");
const fieldButtons = document.querySelectorAll(".field-button");

// iterate buttons
fieldButtons.forEach((item) => {
  // detect click
  item.addEventListener("click", () => {
    const container = item.parentNode.parentNode;
    // if closeAll is true
    if (closeAll == true) {
      // detect if container is open
      // close all containers
      // open current container if it was closed
      const isOpen = container.classList.contains("open");
      fields.forEach((field) => {
        field.classList.remove("open");
      });
      if (isOpen == false) {
        container.classList.toggle("open");
      }
    } else {
      // toggle current container on/off
      container.classList.toggle("open");
    }
  });
});
