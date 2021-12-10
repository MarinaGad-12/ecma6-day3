
        async function getRock(){
            const url="rockbands.json"
            try{
                let response=await fetch(url, { method: 'GET' })
                let data = await response.json()
                for (let key in data) {

                    $("#dropDown").append("<option>"+key+"</option");
                   
                }
                $("#dropDown").on("change",function(e){
                    let result =data[e.target.value];
                    for(let i=0;i<result.length;i++){
                        $("#dropDown2").append("<option value='"+result[i].value+"'>"+result[i].name+"</option");
                       
                    }
                })
                $("#dropDown2").change(function(){
                    
                    window.location = $("#dropDown2").val();
                })

            }catch(err){
                console.log(err)
            }
           
        }
    
        getRock().then();
    