var newCommandForm = document.forms.newTaskF; 

/*function tacheSaisie(){
  var Name= document.newTaskF.tache.value
  var Startdate=document.newTaskF.date.value
  var Category=document.newTaskF.categorie.value
  return (Name+" / "+Startdate+" / "+Category)

}*/

var myNewTask= {
  name : document.newTaskF.tache.value,
  date: document.newTaskF.date.value,
  category: document.newTaskF.categorie.value,
}

class Tache{
  constructor(nom,date,categorie){
    this.nom=nom;
    this.date=date;
    this.categorie=categorie;
  }
}
function tacheSaisie(){
  const name=document.newTaskF.tache.value
  const date=document.newTaskF.date.value
  const cat=document.newTaskF.categorie.value 
  const nouvelletache =new Tache(name, date, cat);
  return nouvelletache
}

const mesTaches=[];
function pushTache(Tache){
  mesTaches.push(Tache);

}

function ajouter(){



  //création des variable pour la création d'une nouvelle ligne dans le tableau
  const newItem = document.createElement('tr')
  const taskTd = document.createElement('td')
  const dateTd = document.createElement('td')
  const categorieTd = document.createElement('td')
  taskTd.textContent = document.newTaskF.tache.value
  dateTd.textContent = document.newTaskF.date.value
  categorieTd.textContent = document.newTaskF.categorie.value

  


  
  //const selectEntree = document.getElementById("entreeId");
  //const valeurselectionnee = selectEntree.options[selectEntree.selectedIndex].value;
  //const textselectionne = selectEntree.options[selectEntree.selectedIndex].text;
  //Vérification de la récupération
  console.log(taskTd.textContent)
  console.log(dateTd.textContent)
  console.log(categorieTd.textContent)

  if (!document.newTaskF.tache.checkValidity() ||
        !document.newTaskF.date.checkValidity() ||
        !document.newTaskF.categorie.checkValidity()
        ) {
              return
      }
  
  //const table = document.querySelector('table')
  newItem.append(taskTd, dateTd, categorieTd)


  
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



