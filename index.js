let BookName = document.getElementById('BookName')
let Url = document.getElementById('URL')
let Submit = document.getElementById('Submit')
let showitem = document.getElementById('show-item') 
let NameRequire = document.getElementById('NameRequire')
let UrlRequire = document.getElementById('UrlRequire')

let Bookarr=[] ;

(function (){
    if(localStorage.getItem('BookData') == null)
    {Bookarr = [];}
    else {
        Bookarr = JSON.parse(localStorage.getItem('BookData'))
        displayBookName()
    }
})()

Submit.onclick = function(){
    addBook()
}

function addBook(){
    if(checkisEmpty() == false){
        let BookNames ={
            BName:BookName.value,
            BUrl:Url.value,  
          }
          Bookarr.push(BookNames)
          console.log(Bookarr)
          localStorage.setItem('BookData',JSON.stringify(Bookarr))
          displayBookName()
    }
}


function displayBookName(){
    let box ='';
    for(let i=0 ; i<Bookarr.length ; i++){
        box+=` <div class="item my-3 py-3 px-5">
        <div class="d-flex ">
                <h2>${Bookarr[i].BName}</h2>
                <button class="btn btn-outline-info ms-5" id="visiturl"><a href="${Bookarr[i].BUrl}" target = "_blank"> visit</a></button>
                <button class="btn btn-outline-danger ms-2" id="deleteurl" onclick="deleteitem(${i})">delete</button>
            </div>
        </div>`
    }
    showitem.innerHTML = box
}

function deleteitem(index){
  Bookarr.splice(index,1)
  localStorage.setItem('BookData',JSON.stringify(Bookarr))
  displayBookName()
}

function checkisEmpty(){
    if(BookName.value == '' || Url.value == ''){
        NameRequire.innerHTML = '<p class ="text-center alert alert-danger fw-bold w-75 m-auto">Name is required </p>'
        UrlRequire.innerHTML = '<p class ="text-center alert alert-danger fw-bold w-75 m-auto">Url is required </p>'
        return true;
    }
    else {
        NameRequire.innerHTML = ''
        UrlRequire.innerHTML = ''
        return false
    }
}

// function SiteNameRegex(){
//     let NameRegex = //
// }