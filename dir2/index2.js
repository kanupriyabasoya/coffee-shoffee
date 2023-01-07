 document.querySelector('button').addEventListener('click',getFetch);
 function getFetch(){
    const choice = document.querySelector('input').value;
    const url = `https://www.dnd5eapi.co/api/spells/${choice}/`;
    fetch(url)
    .then(res=>res.json())
    .then(data=>console.log(data))
    .catch(err=>console.log(`error${err}`));
 };