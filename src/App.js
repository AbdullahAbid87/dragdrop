import "./App.css";
import Interactable from "./Interactable";

function App() {
  const draggableOptions = {
    onmove: (event) => {
      // console.log(event);
      const target = event.target;
      // keep the dragged position in the data-x/data-y attributes
      const x = (parseFloat(target.getAttribute("data-x")) || 0) + event.dx;
      const y = (parseFloat(target.getAttribute("data-y")) || 0) + event.dy;

      // translate the element
      target.style.webkitTransform = target.style.transform =
        "translate(" + x + "px, " + y + "px)";

      // update the posiion attributes
      target.setAttribute("data-x", x);
      target.setAttribute("data-y", y);
    },
  };
  return (
    <div className="MainContainer">
      <div className="DropzoneContainer">
        <Interactable
          dropzone={true}
          dropzoneOptions={{
            accept: ".drag-item",
            overlap: 0.75,
            ondropactivate: function (event) {
              event.target.classList.add("drop-active");
            },

            ondragenter: function (event) {
              var draggableElement = event.relatedTarget,
                dropzoneElement = event.target;
              dropzoneElement.classList.add("drop-target");
              draggableElement.classList.add("can-drop");
            },

            ondragleave: function (event) {
              event.target.classList.remove("drop-target");
              event.relatedTarget.classList.remove("can-drop");
              event.relatedTarget.textContent = "Dragged out";
            },

            ondrop: function (event) {
              console.log(event);
            },

            ondropdeactivate: function (event) {
              event.target.classList.remove("drop-active");
              event.target.classList.remove("drop-target");
            },
          }}
        >
          <div className="dropzone" id="outer-dropzone">
            <div className="DropzoneContent">
              Dropzone Content here
            </div>
          </div>
        </Interactable>
      </div>
      <div className="dragItems" >
        <Interactable
          draggable={true}
          draggableOptions={draggableOptions}
        >
          <div className="draggable drag-item" >
            Drag Item
          </div>
        </Interactable>
        <Interactable
          draggable={true}
          draggableOptions={draggableOptions}
        >
          <div className="draggable drag-item" >
            Drag Item
          </div>
        </Interactable>
      </div>
    </div>
  );
}

export default App;
