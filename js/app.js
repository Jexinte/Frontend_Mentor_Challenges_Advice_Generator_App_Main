const idCitation = document.getElementById('id--citation')
const citationQuote = document.getElementById('citation')
const dice = document.querySelector('.dice')



dice.addEventListener('click',() => {
    const adviceSlipJsonAPI = fetch ('https://api.adviceslip.com/advice',{cache:'no-cache'})

    adviceSlipJsonAPI.then( response => {
        if(response.ok)
            return response.json()

        else  
            return 'Connexion failed'
    })

    .then( citation => {
        
        idCitation.textContent = citation['slip'].id
        citationQuote.textContent = `" ${citation['slip'].advice} "`
    })

})