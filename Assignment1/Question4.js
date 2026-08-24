async function handleSubmitQ4(){
    await getFlightData()
}

function getFlightData(){
    fetch('https://think.cs.vt.edu/corgis/datasets/json/airlines/airlines.json')
    .then(response => {
        if (!response.ok) {
            throw new Error(`Airline request failed with status ${response.status}`)
        }
        return response.json()
    })
    .then(data=>{
        populateFlightList(data)
    })
    .catch(err=>{
        alert(err)
    })
}

function checkSum(data){
    return data["Cancelled"] + data["Delayed"] + data["Diverted"] + data["On Time"] === data["Total"]
}

function populateFlightList(data) {
    if (data.length === 0) {
        document.getElementById('flight-list').hidden = true
    } else {
        const list = document.getElementById('flight-list')
        list.replaceChildren()
        list.hidden = false
        for (const airline of data) {
            const item = document.createElement('li')
            item.className = 'list-group-item d-flex'
            const values = [
                airline.Airport.Code,
                airline.Airport.Name,
                `sum: ${checkSum(airline.Statistics.Flights)}`
            ]
            for (const value of values) {
                const field = document.createElement('span')
                field.className = 'm-2'
                field.textContent = value
                item.append(field)
            }
            list.append(item)
        }
    }
}
