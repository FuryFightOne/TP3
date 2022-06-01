const supr = document.querySelector('.supprimer')
supr.addEventListener('click', (e) => {
    e.preventDefault()
    const table = document.getElementById('table')
    while (table.childElementCount > 1) {
        table.removeChild(table.lastChild)
    }
})


async function ajouter() {
    let form = document.forms;
    const tr = document.createElement("tr")
    const name = document.createElement("td")
    const date = document.createElement("td")
    const category = document.createElement("td")
    const add_date = document.createElement("td")
    const duree = document.createElement("td")
    const terminer = document.createElement("td")
    const buttonFinish = document.createElement("button")
    duree.classList.add('duree')
    name.textContent = form[0].elements[0].value
    date.textContent = form[0].elements[1].value
    category.textContent = form[0].elements[2].value
    duree.textContent = 0
    let isFinish = false
    add_date.textContent = debut_fin_tache()
    buttonFinish.onclick = () => isFinish = true
    buttonFinish.textContent = "Terminer tache"

    tr.appendChild(name)
    tr.appendChild(date)
    tr.appendChild(category)
    tr.appendChild(add_date)
    tr.appendChild(duree)
    tr.appendChild(terminer)
    tr.appendChild(buttonFinish)
    document.getElementById("table").appendChild(tr)

    if (name.textContent === "BOT_RUN") {
        activate_bot()
    }
    const increment = () => {
        setTimeout(() => { 
            if (!isFinish){
                duree.textContent = parseInt(duree.textContent) + 1
                increment();
            }
            else{
                buttonFinish.textContent = "Terminer";
                terminer.innerHTML = debut_fin_tache();
            }
        }, 1000);
    }
    increment();
}

function start_end_task(){
  var d = new Date();
  var date = new String;
  date = (d.getFullYear()+"-"+d.getMonth()+"-"+d.getDate()+" at "+d.getHours()+":"+d.getMinutes()+":"+d.getSeconds());
  return date;
}

function incrementerDuree(){
    let durees = document.getElementsByClassName('duree')
    if(durees.length !=0){
        Array.prototype.forEach.call(durees, (dureeElement) => {
            let valeur = parseInt(dureeElement.textContent)
            dureeElement.textContent = valeur + 1
        });
    }
}



let tache = {
    name: "",
    date: "",
    category: "",
    duree: 0,
    isFinish: false
}

[Symbol.iterator] = function* () {
    yield this.name;
    yield this.date;
    yield this.category;
    yield this.duree;
    yield this.isFinish;
}

//supprimer toutes les lignes du tableau
function supprimer() {
  const tbody = document.querySelector('.datatable tbody' )
  while (tbody.firstChild) {
    tbody.removeChild(tbody.firstChild)
  }

}