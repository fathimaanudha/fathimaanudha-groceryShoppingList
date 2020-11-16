

function ajax(){
    
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        if(this.readyState==4&&this.status==200){
            var response = JSON.parse(this.responseText);
            // console.log(response);
           var Jlist = response.list;             
                    

            
             var row="";
            var table = document.getElementById('myTable');
            for(var i = 0; i < Jlist.length; i++){
             
                row += `<tr>`;   
                row += `<td><input type="checkbox"></td>`;
                row += `<td> ${Jlist[i].SL_NO}</td>`;
                row +=`<td> ${Jlist[i].NAME}</td>`;
                row += `<td> ${Jlist[i].QUANTITY}</td>`;
                row += `<td> ${Jlist[i].UNIT}</td>`;
                row +=`<td> ${Jlist[i].DEPARTMENT}</td>`;
                row += `<td> ${Jlist[i].NOTES}</td>`;
            
                row += ` </tr>`;                  
                  
            }
          table.innerHTML = row;
          
        
 

            

        }
       
        
    }
   
   
    

xhttp.open("GET","grocery.json",true);
xhttp.send();
}
function sortList() {

    var dept = document.getElementById("category-list").value;
    

    if(dept == "All") {ajax();}

    else{

        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function(){
            if(this.readyState==4&&this.status==200){
                var response = JSON.parse(this.responseText);
                // console.log(response);
               var Jlist = response.list;             
                        
    
                
                 var row="";
                var table = document.getElementById('myTable');
                for(var i = 0; i < Jlist.length; i++){
                    if (Jlist[i].DEPARTMENT==dept){
                 
                        row += `<tr>`;   
                        row += `<td><input type="checkbox"></td>`;
                        row += `<td> ${Jlist[i].SL_NO}</td>`;
                        row +=`<td> ${Jlist[i].NAME}</td>`;
                        row += `<td> ${Jlist[i].QUANTITY}</td>`;
                        row += `<td> ${Jlist[i].UNIT}</td>`;
                        row +=`<td> ${Jlist[i].DEPARTMENT}</td>`;
                        row += `<td> ${Jlist[i].NOTES}</td>`;
                    
                        row += ` </tr>`;                  
                      
                }
                else continue;
            }table.innerHTML = row;
        }
          

        }
            

        
            xhttp.open("GET","grocery.json",true);
            xhttp.send();
        }
}   






        




