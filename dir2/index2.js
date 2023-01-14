//local storage

// function getFetch(){
    document.querySelector('button').addEventListener('click', getvalue);

    function getvalue(){
        fetch('https://api.nasa.gov/planetary/apod?api_key=7RsqsXc7yNHN8BZSbSF7tMKSMApGITOTLMNF0VvK')
        .then(response => response.json())
        .then(data => {
            console.log(data);
        
            const h2 = document.querySelector('h2');
            const para = document.querySelector('p');
            const img = document.querySelector('img');

            h2.textContent = data.date;
            para.textContent = data.explanation;
            img.src = data.hdurl;
        });

}
   
   
 
 


