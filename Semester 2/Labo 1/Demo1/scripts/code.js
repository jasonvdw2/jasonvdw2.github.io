const setup = () => {
    let lblCursus = document.getElementById("lblCursus");
    lblCursus.addEventListener("mouseover", change);

    /*
    let btnSend = document.getElementById("lblSend");
    btnSend.addEventListener("click", show);
    */
    document.getElementById("btnSend").addEventListener("click", show);

}

const show = () =>{
    let txtName = document.getElementById("txtName");
    if(txtName.value !== ""){
        alert("Jouw naam is " + txtName.value);
        console.log("Jouw naam is " + txtName.value);
        console.log(`Jouw naam is ${txtName.value}`);
    }
    else{
        alert("Gelieve naam in te vullen.")
    }

}

const change = () => {
    let lblCursus = document.getElementById("lblCursus");
    lblCursus.className = "cursus";
}
window.addEventListener("load", setup)
;