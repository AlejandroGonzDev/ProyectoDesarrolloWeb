

function check(){

client_name = document.getElementById("exampleInputName1").value;
client_email = document.getElementById("exampleInputEmail1").value;
client_phone = document.getElementById("exampletelefone1").value;
client_country = document.getElementById("pais_select").value; 



   if (client_name != "" && client_email != "" && client_phone != "" && client_country != "") {

   

   }else {

           console.log("Registro completado, biendevenido "+client_name)
           
        }
           

 
}

