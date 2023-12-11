const container =document.getElementById('container')
const template = (item) =>{
    return `
    <article class="article-awal">
    <div class="news-image">
        <img src=${item.imageurl} class="news-image" alt="Gambar Berita 1">
    </div>
    <div class="news-content">
        <h3>${item.judul}</h3>
        <p>Ditulis oleh ${item.namepenulis}</p>
        <a href=${item.urlsumber}>Baca Selengkapnya</a>
    </div>
    </article>
    `
}


fetch('https://be-2-bandung-28-production.up.railway.app/berita')
    .then(data => data.json())
    .then(datajson => {
        console.log(datajson)
        let content= ''
        datajson.map(item => content += template(item))
        container.innerHTML = content
    })
