const BASE_URL = 'https://api.github.com/search/repositories?q='

async function handleSubmitQ2() {
    await searchRepo()
}

function getFormData() {
    let formdata = {}
    formdata['owner'] = document.getElementById('owner').value
    formdata['repo'] = document.getElementById('repo').value
    return formdata
}

async function searchRepo() {
    const formdata = getFormData()
    if(formdata.owner === "" || formdata.repo === ""){
        alert("Enter both an owner and repository name")
        return
    }

    const query = encodeURIComponent(`repo:${formdata.owner}/${formdata.repo}`)
    const response = await fetch(BASE_URL + query)
    if (!response.ok) {
        throw new Error(`GitHub request failed with status ${response.status}`)
    }
    const data = await response.json()
    populateRepoList(data.items)
}

function populateRepoList(repolist) {
    const list = document.getElementById('repo-list')
    list.replaceChildren()
    list.hidden = repolist.length === 0

    for (const repo of repolist) {
        const item = document.createElement('li')
        item.className = 'list-group-item d-flex align-items-center'

        const avatar = document.createElement('img')
        avatar.width = 50
        avatar.src = repo.owner.avatar_url
        avatar.alt = `${repo.owner.login} avatar`

        const owner = document.createElement('span')
        owner.className = 'm-2'
        owner.textContent = repo.owner.login

        const link = document.createElement('a')
        link.className = 'm-2'
        link.href = repo.html_url
        link.target = '_blank'
        link.rel = 'noopener noreferrer'
        link.textContent = repo.name

        item.append(avatar, owner, link)
        list.append(item)
    }
}
