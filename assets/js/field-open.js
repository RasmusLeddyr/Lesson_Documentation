// Dev option
const closeAll = true;

const fields = document.querySelectorAll("#school .field");
const fieldButtons = document.querySelectorAll(".field-button");
fieldButtons.forEach(function (item) {
  item.addEventListener("click", function () {
    const container = item.parentNode.parentNode;
    if (closeAll == true) {
      const isOpen = container.classList.contains("open");
      fields.forEach(function (field) {
        console.log(field);
        field.classList.remove("open");
      });
      if (isOpen == false) {
        container.classList.toggle("open");
      }
    } else {
      container.classList.toggle("open");
    }
  });
});
