 document.querySelector('button').addEventListener('click',getFetch);
 function getFetch(){
    const choice = document.querySelector('input').value;
    const url = `https://www.dnd5eapi.co/api/spells/${choice}/`;
    fetch(url)
    .then(res=>res.json())
    .then(data=>{
      data.subclasses.forEach(element => {
         const li = document.createElement('li');
         li.textContent = element.name;
         document.querySelector('ul').appendChild(li);         
      });
    })
    .catch(err=>console.log(`error${err}`));
 };

//local storage
//set item
//clear
