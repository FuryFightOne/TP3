
var newCommandForm = document.forms.newTaskF; 


function ajouter(){
    //Vérifier que la récupération se fait bien !)
    console.log(document.forms.newTaskF.tache.value);
    console.log(document.forms.newTaskF.date.value);

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

function logConsole(){
  var tasks = JSON.parse(data)
  for(let i=0; i<tasks.length;i++){
    console.log("{task: "+tasks[i].task+", date: "+tasks[i].date+", category: "+tasks[i].category+"}")
  } 
}

function loadTasks(){
  var tasks = JSON.parse(data)
  for(let i=0; i<tasks.length;i++){
    const table = document.querySelector('.datatable tbody')
    var row = document.createElement('tr')
  
    const task = document.createElement('td')
    const date = document.createElement('td')
    const category = document.createElement('td')

    task.textContent = tasks[i].task
    date.textContent = tasks[i].date
    category.textContent = tasks[i].category

    row.append(task,date,category)
    table.appendChild(row)
  }
}

function arrToObject (array){
	var keys = array[0];
	var newArr = array.slice(1, array.length);
	var obj = [],
  data = newArr,
  cols = keys,
  l = cols.length;
	for (let i=0; i<data.length; i++) {
			var d = data[i],
					o = {};
			for (var j=0; j<l; j++)
					o[cols[j]] = d[j];
			obj.push(o);
	}
	return obj;
}

function htmlToJson(){
  var tasks = document.getElementById('datatable')
  const tasksArray = [...tasks.rows].map(r => [...r.querySelectorAll('td, th')].map(td => td.textContent))
  var JsonArray = JSON.stringify(arrToObject(tasksArray))
  return JsonArray 
}

function createTask(task){
  const table = document.querySelector('.datatable tbody')
  const row = document.createElement('tr')
  const id = document.createElement('td')
  const name = document.createElement('td')
  const status = document.createElement('td')

  id.textContent = task.id
  name.textContent = task.title
  status.textContent = task.completed

  if(!status.textContent.localeCompare("true")){
    row.style.backgroundColor = "green";
  }

  row.append(id,name,status)

  table.appendChild(row)
}