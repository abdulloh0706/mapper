let elUl = document.querySelector('.list')
let elFooter = document.querySelector('.ullar')
let elFoot = document.querySelector('.footer')

fetch('https://jsonplaceholder.typicode.com/users')
.then(response => response.json())
.then(json => mapper(json))
fetch('https://jsonplaceholder.typicode.com/posts')
.then(response => response.json())
.then(data => mapper2(data))
fetch('https://jsonplaceholder.typicode.com/comments')
.then(response => response.json())
.then(dataBase => forl(dataBase))


function mapper(para) {
    para.map((e)=>{
        let newLi = document.createElement('li')
        newLi.innerHTML = `<div class="card" style="width: 18rem;">
        <img class="card-img-top" src="https://www.cbc.ca/kids/images/picture_header1140.jpg?s…RhlIFwoTzAP&rs=AOn4CLANri6UMJ-TjU_U679W_N4rPNE1ng" alt="Card image cap">
        <div class="card-body">
          <h5 class="card-title">${e.name}</h5>
          <p class="card-text">${e.website}</p>
          <p class="card-text">${e.phone}</p>
          <button class="btn btn-primary butt" id="${e.id}">About</button>
          <button class="btn btn-primary buttt" id="${e.id}">Back</button>
        </div>
      </div>`
        newLi.setAttribute("id", `${e.id}`)
        newLi.setAttribute("class", 'cals')
        elUl.appendChild(newLi)
    })
}

function mapper2(mapper) {
    let elBtnn = document.querySelectorAll('.buttt')
    elBtnn.forEach(e=>e.classList.add('none'))
    let elBtn = document.querySelectorAll('.butt')
    let elCals = document.querySelectorAll('.cals')

    elBtn.forEach(e=>{
        e.addEventListener('click',i=>{
            elCals.forEach(r=>{
                if(r.id != e.id){
                    r.classList.add('none')
                }

            })
            
            elBtn.forEach(y=>y.classList.add('none'))
            elBtnn.forEach(e=>e.classList.add('block'))

            mapper.forEach(o=>{
                if(e.id == o.userId){
                    let newLi = document.createElement('li')
                    newLi.innerHTML = `<div class="card" style="width: 18rem;">
                    <img class="card-img-top" src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" alt="Card image cap">
                    <div class="card-body">
                    <h3 class="card-title">${o.title}</h3>
                    <p class="card-text">${o.body}</p>
                    
                    </div>
                    </div>`
                    elBtnn.forEach(e=>e.classList.add('none'))
                    newLi.setAttribute('class', 'cle')
                    elUl.appendChild(newLi)
                }
                
            })
            let elClass = document.querySelectorAll('.cle')
            elBtnn.forEach(e=> {

                e.addEventListener('click', ()=>{
                    elBtnn.forEach(e=>e.classList.remove('block'))
                    elBtn.forEach(y=>y.classList.remove('none'))
                    elCals.forEach(r=>{
                        if(r.id != e.id){
                            r.classList.remove('none')
                        }
                    })
                    elClass.forEach(p => {
                        p.classList.add('none')
                    })
                    
                    // delete elClass
                })
            })
            
        })
            
    })
}

function forl(par) {
    elFoot.classList.add('none')
    let elBtn = document.querySelectorAll('.butt')
    let elBtnn = document.querySelectorAll('.buttt')
    let param = par.splice(0,50)
    
    elBtn.forEach(t => {
        t.addEventListener('click', ()=>{
            param.forEach(e => {
                if(e.postId == t.id){
                    console.log('Hato yoq');
                    let newDiv = document.createElement('li')
                    newDiv.innerHTML = `
                        <h4>${e.name}</h4>
                        <h5>${e.email}</h5>
                        <h6>${e.body}</h6>
                        <hr>`
                    newDiv.setAttribute('class', 'nd')
                    elFooter.appendChild(newDiv)
                    elFoot.classList.remove('none')
                }
            })
            let elNd = document.querySelectorAll('.nd')
            elBtnn.forEach(e=> {
                e.addEventListener('click', ()=>{
                    elNd.forEach(z => {
                        console.log(z);
                        z.classList.add('none')
                        elFoot.classList.add('none')
                        
                    })
                })
            })
        })
        // console.log(e);
        
    })
    
}
