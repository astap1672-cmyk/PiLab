let zoom = 1;
const workspace = document.getElementById("workspace");
const zoomValue = document.getElementById("zoomValue");
const fileInput = document.getElementById("fileInput");
const image = document.getElementById("image");
const uploadBtn = document.getElementById("uploadBtn");

function updateZoom() {
    workspace.style.transform = `scale(${zoom})`;
    zoomValue.textContent = Math.round(zoom * 100) + "%";
}

document.getElementById("zoomIn").addEventListener("click", () => {
    zoom += 0.1;
    updateZoom();
});

document.getElementById("zoomOut").addEventListener("click", () => {
    if (zoom > 0.2) {
        zoom -= 0.1;
        updateZoom();
    }
});

fileInput.addEventListener("change", function () {
    const file = this.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function (e) {
        image.src = e.target.result;
    };
    reader.readAsDataURL(file);
});

document.getElementById("saveBtn").addEventListener("click", () => {
    const link = document.createElement("a");
    link.href = image.src;
    link.download = "image.png";
    link.click();
});


