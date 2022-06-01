var newCommandForm = document.forms.newTaskF; 

function start_end_task(){
  var d = new Date();
  var date = new String;
  date = (d.getFullYear()+"-"+d.getMonth()+"-"+d.getDate()+" at "+d.getHours()+":"+d.getMinutes()+":"+d.getSeconds());
  return date;
}

function incrementerDuree() {
  let durees = document.getElementsByClassName("duree")
  if (durees.length != 0) {
    Array.prototype.forEach.call(durees, function(dureeElement) {
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
    const ajouterTd=document.createElement('td')
    const durationTd = document.createElement('td')
    taskTd.textContent = document.newTaskF.task.value
    dateTd.textContent = document.newTaskF.date.value
    ajouterTd.textContent=start_end_task()  
    categorieTd.textContent = document.newTaskF.category.value
    durationTd.classList.add('duree')
    const finish = document.createElement("td")
    const buttonFinish = document.createElement("button")
    //const selectEntree = document.getElementById("entreeId");
    //const valeurselectionnee = selectEntree.options[selectEntree.selectedIndex].value;
    //const textselectionne = selectEntree.options[selectEntree.selectedIndex].text;
    //Vérification de la récupération
    console.log(taskTd.textContent)
    console.log(dateTd.textContent)
    console.log(categorieTd.textContent)
    console.log(durationTd.textContent)

    if (!document.newTaskF.task.checkValidity() || !document.newTaskF.date.checkValidity() || !document.newTaskF.category.checkValidity()){
      return
    }

    let isFinish = false
    buttonFinish.onclick = () => isFinish = true
    buttonFinish.textContent = "Finish task"

    

    //const table = document.querySelector('table')
    newItem.append(taskTd, dateTd, categorieTd, ajouterTd, durationTd, finish, buttonFinish)

    if(!isFinish){
      durationTd.textContent = setInterval("incrementerDuree()",1000)
    }
    else{
      durationTd.textContent = "Finished"
    }
    

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

    
    let isFinish = false
    buttonFinish.onclick = () => isFinish = true
    buttonFinish.textContent = "Finish task"
    
   