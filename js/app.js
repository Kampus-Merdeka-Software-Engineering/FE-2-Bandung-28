const form = document.getElementById('form')
const fname = document.getElementById('fname')
const lname = document.getElementById('lname')
const country = document.getElementById('country')
const subject = document.getElementById('subject')


function postFeedback (){
    fetch ('https://be-2-bandung-28-production.up.railway.app/contactus', 
    {
        method:'POST', 
        headers: {
            'Accept':'application/json',
            'Content-Type':'application/json'
        },
        body: JSON.stringify({
            firstname:fname.value,
            lastname:lname.value,
            country:country.value,
            subject: subject.value
        })
    }
    ).then(()=>{
        alert('Terimakasih atas pesan Anda')
        fname.value=''
        lname.value=''
        country.value=''
        subject.value=''
    }).catch(error=>{
        alert(error)

    })
}
form.addEventListener('submit', event=>{
    event.preventDefault(
        postFeedback()
    )
})