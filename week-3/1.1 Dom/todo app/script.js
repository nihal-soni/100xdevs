document.getElementById("addtask").addEventListener("click" , function() {
     const taskinput = document.getElementById("taskinput");
     if (taskinput.value.trim() !== ""){
        const li = document.createElement("li");
        li.innertext = taskinput.value;
        li.classList.add("item");
        li.addEventListener("click", function () {
            this.classList.add("removed"); // Add remove animation
            setTimeout(() => this.remove(), 300); // Wait for animation to complete
        });
    
        document.getElementById("tasklist").appendChild(li);
        taskinput.value = "";

     }

})


let ctr = 0;
 function callback() {
      console.log(ctr)
 }