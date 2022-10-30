let table = document.querySelector(".body");
let edit = document.getElementById('edit');
let remove = document.getElementById('remove');
let Show_persons = document.getElementById('Show_persons');
let Name = document.querySelector('.Name');
let Username = document.querySelector('.Username');
let Email = document.querySelector('.Email');
let phone = document.querySelector('.Phone');
let website = document.querySelector('.Website');
let test = document.getElementById('test1');
let inputs_div = document.querySelector('.inputs_div');
let addNewPerson = document.getElementById('addNewPerson');
let close_all = document.getElementById("close_all");
let add_inputs = document.getElementById("addinputs")
let close_inputs = document.getElementById("close_inputs")
let yoxla =/^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;

let base_url = "https://jsonplaceholder.typicode.com/users";

   
    
    Show_persons.addEventListener("click",getPersons)

     

    function getPersons() {
         
        storage();
        
        if (getPersons.isRun) {
            return false;
        }
        else{
           
            const fetch_data = fetch(base_url)
            .then((res) => res.json())
            .then((data) => {
            for (const items of data) {
                
              table.innerHTML += ` 
              <tr id="test1">
              <th scope="row">${items.name}</th>
              <td>${items.username}</td>
              <td>${items.email}</td>
              <td>${items.phone}</td>
              <td>${items.website}</td>
              <td>
              <button id="edit" onclick="" type="button" class="btn btn-success">Edit</button>
              <button onclick="(parentElement.parentElement.remove())" id="remove" type="button" class="btn btn-danger">Remove</button>
              </td>
              </tr> 
              
              `
              ;
              
            }
         
          });
        
          
        }


       
    
        getPersons.isRun=true;
    }




let cavab2 =false;
table.addEventListener("click",event=>{
let cavab = true;

   if (inputs_div.style.display === "block") {
    if (Name.value=='' || Name.value.length < 3 || Name.value.length > 18) {
        Name.style.borderColor="red";
        cavab = false;
    }
    else{
        Name.style.borderColor="#ced4da";
    }
    if(Username.value=='' || Username.value.length < 3 || Username.value.length > 16) {
        Username.style.borderColor="red";
        cavab = false;
    }
    else{
        Username.style.borderColor="#ced4da";
    }
    if(Email.value=='' || Email.value.length < 5 || !yoxla.test(Email.value) || Email.value.length > 25) {
        Email.style.borderColor="red";
        cavab = false;
    }
    else{
        Email.style.borderColor="#ced4da";
    }
    if(phone.value=='' || phone.value.length < 7 || phone.value.length > 18) {
        phone.style.borderColor="red";
        cavab = false;
    }
    else{
        phone.style.borderColor="#ced4da";
    }
    if(website.value=='' || website.value.length < 5 || website.value.length > 14) {
        website.style.borderColor="red";
        cavab = false;
    }
    else{
        website.style.borderColor="#ced4da";
    }
    cavab2=true;
   }

    
    if (cavab==true) {
        
        Name.style.borderColor="#ced4da";
        Username.style.borderColor="#ced4da";
        Email.style.borderColor="#ced4da";
        phone.style.borderColor="#ced4da";
        website.style.borderColor="#ced4da";

        if (event.target.id=="edit") {
            let item = event.target; 
            inputs_div.style.display="block";
            if (cavab2 != false) {
                
             
                


                item.parentElement.parentElement.innerHTML =`
                <tr>
                <th scope="row">${Name.value}</th>
                <td>${Username.value}</td>
                <td>${Email.value}</td>
                <td>${phone.value}</td>
                <td>${website.value}</td>
                <td>
                <button id="edit" onclick="" type="button" class="btn btn-success">Edit</button>
                <button onclick="(parentElement.parentElement.remove())" id="remove" type="button" class="btn btn-danger">Remove</button>
                </td>
                </tr> 
                `


                console.log(localStorage.key('event.parentElement.parentElement'));
                localStorage.setItem(localStorage.key('event.parentElement.parentElement'),`
                <tr>
                <th scope="row">${Name.value}</th>
                <td>${Username.value}</td>
                <td>${Email.value}</td>
                <td>${phone.value}</td>
                <td>${website.value}</td>
                <td>
                <button id="edit" onclick="" type="button" class="btn btn-success">Edit</button>
                <button onclick="(parentElement.parentElement.remove())" id="remove" type="button" class="btn btn-danger">Remove</button>
                </td>
                </tr> 
                `)






                Name.value='';
                Username.value='';
                Email.value='';
                phone.value='';
                website.value='';

                
            }
            
             
             
        }
      
        
    }
        
       

   
   
    
})

addNewPerson.addEventListener("click",()=>{
  
    let cavab = true;

   if (inputs_div.style.display === "block") {
    if (Name.value=='' || Name.value.length < 3 || Name.value.length > 18) {
        Name.style.borderColor="red";
        cavab = false;
    }
    else{
        Name.style.borderColor="#ced4da";
    }
    if(Username.value=='' || Username.value.length < 3 || Username.value.length > 16) {
        Username.style.borderColor="red";
        cavab = false;
    }
    else{
        Username.style.borderColor="#ced4da";
    }
    if(Email.value=='' || Email.value.length < 5 || !yoxla.test(Email.value) || Email.value.length > 25) {
        Email.style.borderColor="red";
        cavab = false;
    }
    else{
        Email.style.borderColor="#ced4da";
    }
    if(phone.value=='' || phone.value.length < 7 || phone.value.length > 18) {
        phone.style.borderColor="red";
        cavab = false;
    }
    else{
        phone.style.borderColor="#ced4da";
    }
    if(website.value=='' || website.value.length < 5 || website.value.length > 14) {
        website.style.borderColor="red";
        cavab = false;
    }
    else{
        website.style.borderColor="#ced4da";
    }
    cavab2=true;
   }

    
    if (cavab==true) {
        
        Name.style.borderColor="#ced4da";
        Username.style.borderColor="#ced4da";
        Email.style.borderColor="#ced4da";
        phone.style.borderColor="#ced4da";
        website.style.borderColor="#ced4da";

       
            inputs_div.style.display="block";
            if (cavab2 != false) {
                
                table.innerHTML +=`
                <tr>
                <th scope="row">${Name.value}</th>
                <td>${Username.value}</td>
                <td>${Email.value}</td>
                <td>${phone.value}</td>
                <td>${website.value}</td>
                <td>
                <button id="edit" onclick="" type="button" class="btn btn-success">Edit</button>
                <button onclick="(parentElement.parentElement.remove())" id="remove" type="button" class="btn btn-danger">Remove</button>
                </td>
                </tr> 
                `

                    
                    if (localStorage.getItem("person")===null) {
                        
                        localStorage.setItem("person",`
                        <tr>
                        <th scope="row">${Name.value}</th>
                        <td>${Username.value}</td>
                        <td>${Email.value}</td>
                        <td>${phone.value}</td>
                        <td>${website.value}</td>
                        <td>
                        <button id="edit" onclick="" type="button" class="btn btn-success">Edit</button>
                        <button onclick="(parentElement.parentElement.remove())" id="remove" type="button" class="btn btn-danger">Remove</button>
                        </td>
                        </tr> 
                        `)
                       
                    }
                    else if(localStorage.getItem("person1")===null){

                        localStorage.setItem("person1",`
                        <tr>
                        <th scope="row">${Name.value}</th>
                        <td>${Username.value}</td>
                        <td>${Email.value}</td>
                        <td>${phone.value}</td>
                        <td>${website.value}</td>
                        <td>
                        <button id="edit" onclick="" type="button" class="btn btn-success">Edit</button>
                        <button onclick="(parentElement.parentElement.remove())" id="remove" type="button" class="btn btn-danger">Remove</button>
                        </td>
                        </tr> 
                        `)

                    }
                    else if(localStorage.getItem("person2")===null){

                        localStorage.setItem("person1",`
                        <tr>
                        <th scope="row">${Name.value}</th>
                        <td>${Username.value}</td>
                        <td>${Email.value}</td>
                        <td>${phone.value}</td>
                        <td>${website.value}</td>
                        <td>
                        <button id="edit" onclick="" type="button" class="btn btn-success">Edit</button>
                        <button onclick="(parentElement.parentElement.remove())" id="remove" type="button" class="btn btn-danger">Remove</button>
                        </td>
                        </tr> 
                        `)

                    }
                    else if(localStorage.getItem("person3")===null){

                        localStorage.setItem("person1",`
                        <tr>
                        <th scope="row">${Name.value}</th>
                        <td>${Username.value}</td>
                        <td>${Email.value}</td>
                        <td>${phone.value}</td>
                        <td>${website.value}</td>
                        <td>
                        <button id="edit" onclick="" type="button" class="btn btn-success">Edit</button>
                        <button onclick="(parentElement.parentElement.remove())" id="remove" type="button" class="btn btn-danger">Remove</button>
                        </td>
                        </tr> 
                        `)

                    }
                    else if(localStorage.getItem("person4")===null){

                        localStorage.setItem("person1",`
                        <tr>
                        <th scope="row">${Name.value}</th>
                        <td>${Username.value}</td>
                        <td>${Email.value}</td>
                        <td>${phone.value}</td>
                        <td>${website.value}</td>
                        <td>
                        <button id="edit" onclick="" type="button" class="btn btn-success">Edit</button>
                        <button onclick="(parentElement.parentElement.remove())" id="remove" type="button" class="btn btn-danger">Remove</button>
                        </td>
                        </tr> 
                        `)

                    }
                    else if(localStorage.getItem("person5")===null){

                        localStorage.setItem("person1",`
                        <tr>
                        <th scope="row">${Name.value}</th>
                        <td>${Username.value}</td>
                        <td>${Email.value}</td>
                        <td>${phone.value}</td>
                        <td>${website.value}</td>
                        <td>
                        <button id="edit" onclick="" type="button" class="btn btn-success">Edit</button>
                        <button onclick="(parentElement.parentElement.remove())" id="remove" type="button" class="btn btn-danger">Remove</button>
                        </td>
                        </tr> 
                        `)

                    }
                    else if(localStorage.getItem("person6")===null){

                        localStorage.setItem("person1",`
                        <tr>
                        <th scope="row">${Name.value}</th>
                        <td>${Username.value}</td>
                        <td>${Email.value}</td>
                        <td>${phone.value}</td>
                        <td>${website.value}</td>
                        <td>
                        <button id="edit" onclick="" type="button" class="btn btn-success">Edit</button>
                        <button onclick="(parentElement.parentElement.remove())" id="remove" type="button" class="btn btn-danger">Remove</button>
                        </td>
                        </tr> 
                        `)

                    }
                    else if(localStorage.getItem("person7")===null){

                        localStorage.setItem("person1",`
                        <tr>
                        <th scope="row">${Name.value}</th>
                        <td>${Username.value}</td>
                        <td>${Email.value}</td>
                        <td>${phone.value}</td>
                        <td>${website.value}</td>
                        <td>
                        <button id="edit" onclick="" type="button" class="btn btn-success">Edit</button>
                        <button onclick="(parentElement.parentElement.remove())" id="remove" type="button" class="btn btn-danger">Remove</button>
                        </td>
                        </tr> 
                        `)

                    }
                    else if(localStorage.getItem("person8")===null){

                        localStorage.setItem("person1",`
                        <tr>
                        <th scope="row">${Name.value}</th>
                        <td>${Username.value}</td>
                        <td>${Email.value}</td>
                        <td>${phone.value}</td>
                        <td>${website.value}</td>
                        <td>
                        <button id="edit" onclick="" type="button" class="btn btn-success">Edit</button>
                        <button onclick="(parentElement.parentElement.remove())" id="remove" type="button" class="btn btn-danger">Remove</button>
                        </td>
                        </tr> 
                        `)

                    }
                    else if(localStorage.getItem("person9")===null){

                        localStorage.setItem("person1",`
                        <tr>
                        <th scope="row">${Name.value}</th>
                        <td>${Username.value}</td>
                        <td>${Email.value}</td>
                        <td>${phone.value}</td>
                        <td>${website.value}</td>
                        <td>
                        <button id="edit" onclick="" type="button" class="btn btn-success">Edit</button>
                        <button onclick="(parentElement.parentElement.remove())" id="remove" type="button" class="btn btn-danger">Remove</button>
                        </td>
                        </tr> 
                        `)

                    }
                    else if(localStorage.getItem("person10")===null){

                        localStorage.setItem("person1",`
                        <tr>
                        <th scope="row">${Name.value}</th>
                        <td>${Username.value}</td>
                        <td>${Email.value}</td>
                        <td>${phone.value}</td>
                        <td>${website.value}</td>
                        <td>
                        <button id="edit" onclick="" type="button" class="btn btn-success">Edit</button>
                        <button onclick="(parentElement.parentElement.remove())" id="remove" type="button" class="btn btn-danger">Remove</button>
                        </td>
                        </tr> 
                        `)

                    }
 



                Name.value='';
                Username.value='';
                Email.value='';
                phone.value='';
                website.value='';
            }
            
             
           
        
      
        
    }
        
       

})


  
    


close_all.addEventListener("click",close_al)

function close_al() {
    table.innerHTML =`
            <tr class="table-dark">
            <th scope="row">Tony Stark</th>
            <td>Iron-Man</td>
            <td>WARRIORRULES68@rhodey.net</td>
            <td>M-48-49-50</td>
            <td>Avengers.com</td>
            <td>
                <button onclick="" id="edit" type="button" class="btn btn-success">Edit</button>
                <button onclick="(parentElement.parentElement.remove())" id="remove" type="button" class="btn btn-danger">Remove</button>
            </td>
            </tr> 
            `
    getPersons.isRun=false;
    storage.isRun=false;
}



add_inputs.addEventListener("click",add_input);

function add_input() {
    inputs_div.style.display="block";
   
}



close_inputs.addEventListener("click",close_input);

function close_input() {
    inputs_div.style.display="none";
}






function storage() {
  
    if (storage.isRun) {
        return false;
    }
    else{
        
    if (localStorage.getItem("person")!==null) {
        table.innerHTML += localStorage.getItem("person");
    }
    if (localStorage.getItem("person1")!==null) {
        table.innerHTML += localStorage.getItem("person1");
    }
    if (localStorage.getItem("person2")!==null) {
        table.innerHTML += localStorage.getItem("person");
    }
    if (localStorage.getItem("person3")!==null) {
        table.innerHTML += localStorage.getItem("person1");
    }
    if (localStorage.getItem("person4")!==null) {
        table.innerHTML += localStorage.getItem("person");
    }
    if (localStorage.getItem("person5")!==null) {
        table.innerHTML += localStorage.getItem("person1");
    }
    if (localStorage.getItem("person6")!==null) {
        table.innerHTML += localStorage.getItem("person");
    }
    if (localStorage.getItem("person7")!==null) {
        table.innerHTML += localStorage.getItem("person1");
    }
    if (localStorage.getItem("person8")!==null) {
        table.innerHTML += localStorage.getItem("person1");
    }
    if (localStorage.getItem("person9")!==null) {
        table.innerHTML += localStorage.getItem("person");
    }
    if (localStorage.getItem("person10")!==null) {
        table.innerHTML += localStorage.getItem("person1");
    }
    
    storage.isRun=true;
    }

}



table.addEventListener("click",eventt=>{

    if (eventt.target.id == "remove") {
      
       localStorage.removeItem(localStorage.key('eventt.parentElement.parentElement'));
    }

})