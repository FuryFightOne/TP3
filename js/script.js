var newCommandForm = document.forms.newTaskF; 

function start_end_task(){
  var d = new Date();
  var date = document.createElement('td');
  date.textContent = (d.getFullYear()+"-"+d.getMonth()+"-"+d.getDate()+" at "+d.getHours()+":"+d.getMinutes()+":"+d.getSeconds());
  return date;
}

function incrementerDuree() {
  let durees = document.getElementsByClassName("Duration (s)")
  if (durees.length != 0) {
    Array.prototype.forEach.call(durees,
    function(dureeElement) {
      let valeur = parseInt(dureeElement.textContent)
      dureeElement.textContent = valeur + 1
    });
  }
}

function ajouter(){
    //Vérifier que la récupération se fait bien !)
    console.log(document.forms.newTaskF.task.value);
    console.log(document.forms.newTaskF.date.value);

    //création des variable pour la création d'une nouvelle ligne dans le tableau
    const newItem = document.createElement('tr')
    const taskTd = document.createElement('td')
    const dateTd = document.createElement('td')
    const categorieTd = document.createElement('td')
    const durationTd = document.createElement('td')
    taskTd.textContent = document.newTaskF.task.value
    dateTd.textContent = document.newTaskF.date.value
    categorieTd.textContent = document.newTaskF.category.value
    //const selectEntree = document.getElementById("entreeId");
    //const valeurselectionnee = selectEntree.options[selectEntree.selectedIndex].value;
    //const textselectionne = selectEntree.options[selectEntree.selectedIndex].text;
   //Vérification de la récupération
    console.log(taskTd.textContent)
    console.log(dateTd.textContent)
    console.log(categorieTd.textContent)
    console.log(durationTd.textContent)

    if (!document.newTaskF.task.checkValidity() ||
          !document.newTaskF.date.checkValidity() ||
          !document.newTaskF.category.checkValidity()
         ) {
               return
        }
    
    //const table = document.querySelector('table')
    newItem.append(taskTd, dateTd, categorieTd, start_end_task(), setTimeout(durationTd, incrementerDuree()))

     /* le premier élément dans le document qui contient la classe "datatable" est retourné*/
    const table = document.querySelector('.datatable tbody')
    /*  Ex2)3)vi) */
    table.appendChild(newItem)
        
}

 //supprimer toutes les lignes du tableau
function supprimer() {
        const tbody = document.querySelector('.datatable tbody' )
        while (tbody.firstChild) {
          tbody.removeChild(tbody.firstChild)
        }
    
}

function button(){
  const buttonTd = document.createElement('td')
}

document.createElement("Finish task").addEventListener("click", "Finis")

// variable to store our intervalID
let nIntervId;

function flashText() {
  const oElem = document.getElementById("my_box");
  if (oElem.className === "go") {
    oElem.className = "stop";
  } else {
    oElem.className = "go";
  }
}

function stopTextColor() {
  clearInterval(nIntervId);
  // release our intervalID from the variable
  nIntervId = null;
}

document.getElementById("start").addEventListener("click", changeColor);
document.getElementById("stop").addEventListener("click", stopTextColor);