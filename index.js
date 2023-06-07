import { posts } from '/postsData.js'

for (const post of [posts[0]]) {
    console.log(post.name);
    const vangoghElName = document.getElementById('vangogh-flex-container')
    const likesSectionEl = document.getElementById('likes-section')
    vangoghElName.innerHTML =` 
    <h1 class="name">${post.name}</h1>
    <p class="location">${post.location}</p>`
    likesSectionEl.innerHTML = `
    <h4 class="name count">${post.likes} likes</h4>
    <p class="username"><span>${post.username}</span> ${post.comment}</p>`

    
}




for (const post of [posts[1]]) {
    console.log(post.name);
    const gustavaElName = document.getElementById('gustava-flex-container')
    const likesSectionEl = document.getElementById('gustava-likes-section')
    gustavaElName.innerHTML =` 
    <h1 class="name">${post.name}</h1>
    <p class="location">${post.location}</p>`
    likesSectionEl.innerHTML = `
    <h4 class="name count">${post.likes} likes</h4>
    <p class="username"><span>${post.username}</span> ${post.comment}</p>`

    
}


for (const post of [posts[2]]) {
    console.log(post.name);
    const decreuxElName = document.getElementById('decreux-flex-container')
    const likesSectionEl = document.getElementById('decreux-likes-section')
    decreuxElName.innerHTML =` 
    <h1 class="name">${post.name}</h1>
    <p class="location">${post.location}</p>`
    likesSectionEl.innerHTML = `
    <h4 class="name count">${post.likes} likes</h4>
    <p class="username"><span>${post.username}</span> ${post.comment}</p>`

    
}

const iconOneHeartEl = document.getElementById('icon-heart')
iconOneHeartEl.addEventListener('click', getLikes)
let count = 21496;
function getLikes(){
   count = count + 1
   const pinkImageEl = document.getElementById('pink')
   pinkImageEl.style.display = 'block'
   setTimeout(() => {
       pinkImageEl.style.display = 'none'
    }, 700);
    localStorage.setItem('myLeads', JSON.stringify(count))
    const leadsFromLocalStorage = JSON.parse(localStorage.getItem('myLeads'))
    document.querySelector('.count').textContent = `${leadsFromLocalStorage} likes`
console.log(leadsFromLocalStorage);
}




    
  


   
    
    


