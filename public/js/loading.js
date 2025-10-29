document.addEventListener("DOMContentLoaded", function() {
    const loader = document.getElementById("loading-overlay");

   
    document.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", function(e) {
         
            if (!this.href.includes("#") && this.target !== "_blank") { 
                loader.style.display = "flex";
            }
        });
    });

    
    document.querySelectorAll("form").forEach(form => {
        form.addEventListener("submit", function (e) {
           
            if (this.target !== "_blank" && this.target !== "_new") {
                loader.style.display = "flex";
            }
        });
    });
});
