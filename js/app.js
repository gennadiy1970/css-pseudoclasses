const myform = document.querySelector(".myform");
const inputs = document.querySelectorAll(".myform input");

myform.addEventListener("click", setSelected, false);

function setSelected(e) {

  e.preventDefault();

  Array.from(inputs, elem => {
    elem.parentNode.classList.remove("selected");
    elem.checked = false;
  });

  if (e.target.nodeName === "INPUT") {
      console.log(e.target.checked);
      e.target.checked = true;
    //   e.target.setAttribute('checked', 'true');
      console.log(e.target.checked);
      e.target.parentNode.classList.add("selected");
    } 
    else if (e.target.nodeName === "LABEL") {
        console.log(e.target.children[0]);
        e.target.classList.add("selected");
        e.target.children[0].checked = true;
    }
}
