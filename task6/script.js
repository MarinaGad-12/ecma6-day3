async function testPromise() {

    const url = "https://jsonplaceholder.typicode.com/users"
    try {
        let response = await fetch(url, { method: 'GET' })
        let data = await response.json()
        var tableData=document.getElementById("data");
        for(let i=0;i<data.length;i++){
            let Row=document.createElement("tr");
            tableData.append(Row);
            
            let Id=document.createElement("td");
            Row.append(Id);
            Id.textContent=data[i].id;
           
            let Name=document.createElement("td");
            Row.append(Name);
            Name.textContent=data[i].name;
           
             let Username=document.createElement("td");
            Row.append(Username);
            Username.textContent=data[i].username;
          
            let Email=document.createElement("td");
            Row.append(Email);
            Email.textContent=data[i].email;
           
          let Address=document.createElement("td");
            Row.append(Address);
            Address.textContent=data[i].address.city;
        
        }

    } catch (err) {
        console.log(err)
    }
}
testPromise().then();