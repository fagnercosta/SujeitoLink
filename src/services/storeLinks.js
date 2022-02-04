

//buscar links
export async function getLinks(key) {
    const myLinks = await localStorage.getItem(key);

    let linksSaves = JSON.parse(myLinks) || [];

    return linksSaves;

}

//Salvar links

export async function saveLink(key, newLink) {
    let linksStored = await getLinks(key);

    //Náo deixar duplicar 
    const hasLink = linksStored.find(l => (l.id === newLink.id));

    if (hasLink) {
        console.log('Link já existe na sua lista');
        return;
    }

    //add new Link
    linksStored.push(newLink);
    await localStorage.setItem(key, JSON.stringify(linksStored));
    console.log('Link Salvo ')

}

//Deletar links

export async function deleteLink(links, idLink) {
    let myLinks = links.filter(item => { return item.id != idLink });
    await localStorage.setItem('@encurtaLink', JSON.stringify(myLinks));
    return myLinks;
}
