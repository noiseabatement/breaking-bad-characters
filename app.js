const list = document.getElementById('list-container')
const searchBar = document.getElementById('search-bar')
const checkbox = document.getElementById('bcs')


function makeList(arr){
    arr.map(e=>{
        const li = document.createElement('li')
        const image = document.createElement('img')
        if(searchBar.value == ""){
            image.src = e.img   
            
            li.appendChild(image)
            li.append(e.name)      
                              
            list.append(li)
        }        
    })
}

function search(){
    let val = searchBar.value.toLowerCase()
    const li = document.getElementsByTagName("LI")
    const arr = [...li]  
   
    if(!checkbox.checked){
        arr.forEach(e=>{
            if(e.textContent.toLowerCase().indexOf(val) > -1) {
                e.style.display = ""
            } else {
                e.style.display = "none"
            }       
         })  
    }

    
    
}
async function getData(){    
    const response = await fetch('https://breakingbadapi.com/api/characters')
    const data = await response.json()
    const li = document.getElementsByTagName("LI")  
    
    
    makeList(data)     
   
    checkbox.addEventListener("change",()=>{    
        searchBar.value = ""      
        for(let i = 0;i < data.length;i++){    
            if(checkbox.checked){
                if(data[i].better_call_saul_appearance.length == 0){
                    li[i].style.display = "none"      
                                  
                } 
            }else{
                li[i].style.display = ""
            }                             
        }       
    })

    // for(let i = 0; i < li.length; i++){
    //     li[i].addEventListener("click",()=>{
    //         if(li[i].status == undefined){
    //             li[i].textContent = "nickname" + ":\n" +
    //         data[i].nickname+"," + "\nstatus" + ":\n" +
            
    //         data[i].status
            
    //         }
               
    //             li[i].textContent = ""             
    //             const imaj = document.createElement('img')
    //             if(searchBar.value == ""){
    //                 image.src = data[i].img   
            
    //                 li[i].appendChild(imaj)
    //                 li[i].append(data[i].name)      
                              
                
    //             }       
            
    //     })
    // }
    // console.log(li[0].status)
    console.log(data)
}

getData()

searchBar.addEventListener("keyup",search)









