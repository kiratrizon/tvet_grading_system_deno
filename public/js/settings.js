const imageholder = document.getElementById("imageholder");
const poster = document.getElementById("image");


poster.addEventListener('change', imageRenderFIle);

function imageRenderFIle() {
    const file = poster.files[0];


    if (file) {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function (e) {
            imageholder.src = e.target.result;
        }
    }
}