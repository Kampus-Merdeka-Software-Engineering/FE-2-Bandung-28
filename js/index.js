const container =document.getElementById('container')
const template = (item) =>{
    return `
    <div>
        <p>Name: ${item.name}</p>
        <p>Course: ${item.Course}</p>
    </div>
    `
}


fetch('http://localhost:3008/')
    .then(data => data.json())
    .then(datajson => {
        console.log(datajson)
        let content= ''
        datajson.data.map(item => content += template(item))
        container.innerHTML = content
    })
