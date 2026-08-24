
async function handleSubmitQ3() {
    await fetchData()
}

function populateNobelList(data) {
    if (data.length === 0) {
        document.getElementById('nobel-list').hidden = true
    } else {
        const list = document.getElementById('nobel-list')
        list.replaceChildren()
        list.hidden = false
        for (const laureate of data) {
            const item = document.createElement('li')
            item.className = 'list-group-item d-flex'
            for (const value of [laureate.year, laureate.category, laureate.name]) {
                const field = document.createElement('span')
                field.className = 'm-2'
                field.textContent = value
                item.append(field)
            }
            list.append(item)
        }
    }
}

function findRequired(data){
    let data_list = []
    data_list=data.filter(element=>{
        return element.year>=2000 && element.year<=2019 && element.category==="chemistry"
    })
    let laureates = []
    for(let i=0;i<data_list.length;i++){
        data_list[i].laureates.map(l=>{
            let new_obj = {
                year:data_list[i].year,
                category:data_list[i].category,
                name: l.firstname+" "+l.surname
            }
            laureates.push(new_obj)
        })
    }
    populateNobelList(laureates)
}

function fetchData(){
    fetch('https://api.nobelprize.org/v1/prize.json')
    .then(response => response.json())
    .then(data => {
        findRequired(data.prizes)
    })
    .catch(err=>{
        alert(err)
    })
}
