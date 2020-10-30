document.addEventListener("DOMContentLoaded", function() {

    // var wineTemplateHtml = document.getElementById("wine-index-template").innerHTML;
    // var wineTemplateFunction = Handlebars.compile(wineTemplateHtml);

    // var wineEditTemplateHtml = document.getElementById("wine-edit-template").innerHTML;
    // var wineEditTemplateFunction = Handlebars.compile(wineEditTemplateHtml);
    // var wineEditForm = document.getElementById("wine-edit");
    // var wineEditModal =  document.getElementById("edit-wine-modal").id;


  
    // var wineCard = document.querySelector("#collection");
    // var getCards = document.getElementsByClassName("card");

    // var removeButtons = document.getElementsByClassName('delete-wine');
    // var editButtons = document.getElementsByClassName('edit-wine');

    // var baseUrl = "http://myapi-profstream.herokuapp.com/api/46dbf6/wines/";




    // // grab wines from API    
    //  axios
    //   .get("http://myapi-profstream.herokuapp.com/api/46dbf6/wines/")
    //   .then(function(response){
    //       let data = response.data;
    //       for(wine of data) {
    //           var wineHtml = wineTemplateFunction({
    //               id: wine.id,
    //               name: wine.name,
    //               year: wine.year,
    //               grapes: wine.grapes,
    //               country: wine.country,
    //               region: wine.region,
    //               description: wine.description,
    //               price: wine.price,            
    //               picture: wine.picture               
    //           });
  
    //           wineCard
    //           .innerHTML += wineHtml;  

              
    //       }
          
          
    //         // add random earthtone to card background
             
    //         randomHex = () => {
    //             var bg_hex = ["#D4CEF2","#AECCAD","#739973","#998373","#F2C29D",];
    //             return(bg_hex[Math.floor(Math.random() * bg_hex.length)]);
    //         }

    //         for (var i = 0; i < getCards.length; i++) {
    //             getCards[i].style.backgroundColor=`${randomHex()}`;     
    //         }     

    //         //remove wine from api if delete button selected
            
    //         for (var i = 0; i < removeButtons.length; i++) {
    //             removeButtons[i].addEventListener('click',function(){
    //                 alert("Are you sure? This can't be undone!");
    //                 var baseUrl = "http://myapi-profstream.herokuapp.com/api/46dbf6/wines/";
    //                 var wineId = this.id;

    //                 axios
    //                 .delete(`${baseUrl}${wineId}`, { data: { id: this.id } })
    //                 .then(response => {
    //                     removeWine = document.getElementById(this.id).parentElement
    //                     console.log(removeWine);
    //                     removeWine.parentNode.remove(removeWine);
    //                 })
    //                 .catch(error => {
    //                     console.log(error)
    //                     alert('There was an error deleting this wine.')
    //                 });
                 
    //             }); 

    //         }  

    //          //Edit Wine 
    //         for (var i = 0; i < editButtons.length; i++) {
    //             editButtons[i].addEventListener('click',function(){
                    
    //                 var baseUrl = "http://myapi-profstream.herokuapp.com/api/46dbf6/wines/";
    //                 var wineId = this.id;

    //                 // append wine id to element id 
    //                 wineEditModal = `${wineEditModal}-${wineId}`
    //                 console.log(wineEditModal);

    //                 // update modal id to id with wine id appended
    //                 document
    //                 .getElementById("edit-wine-modal")
    //                 .setAttribute('id', `${wineEditModal}`);
                    

    //                 // Grab wine that should be edited
    //                 axios
    //                 .get(`${baseUrl}${wineId}`)
    //                 .then(function(response){
    //                     let wineEdit = response.data;

    //                         var wineEditHtml = wineEditTemplateFunction({
    //                             id: wineEdit.id,
    //                             name: wineEdit.name,
    //                             year: wineEdit.year,
    //                             grapes: wineEdit.grapes,
    //                             country: wineEdit.country,
    //                             region: wineEdit.region,
    //                             description: wineEdit.description,
    //                             price: wineEdit.price,            
    //                             picture: wineEdit.picture               
    //                         });
                
    //                         wineEditForm
    //                         .innerHTML += wineEditHtml;  
                           
    //                 })
    //                 .catch(error => {
    //                     console.log(error)
    //                     alert(error)
    //                 });

    //             });  

    //         }
    // });
    

    //   // add new wine; updated api; update cards
    //   document
    //   .getElementById("add-wine")
    //   .addEventListener("submit", function(e){

    //       e.preventDefault();
  
    //       console.log("Form was submitted!");
    //         var name = document.getElementById("name").value
    //         var year = document.getElementById("year").value
    //         var grapes = document.getElementById("grapes").value
    //         var country = document.getElementById("country").value
    //         var region = document.getElementById("region").value
    //         var price = document.getElementById("price").value
    //         var picture = document.getElementById("picture").value
    //         var description = document.getElementById("description").value
  
    //       console.log(`name: ${name} year: ${year} grapes: ${grapes}  country: ${country} region: ${region} price: ${price} picture: ${picture}  description: ${description}`);
  
    //       axios
    //       .post("http://myapi-profstream.herokuapp.com/api/46dbf6/wines", {
    //           name,
    //           year,
    //           grapes,
    //           country,
    //           region,
    //           price,
    //           picture,
    //           description
    //       })
    //       .then(function(repsonse) {
    //           var newWine = repsonse.data
  
    //           document
    //           .getElementById("add-wine")
    //           .reset();
  
    //           // close modal with jquery
    //           $("#add-wine-modal").modal("hide");
  
    //           //add new user record to the table using handlebars
  
    //           wineCard
    //           .innerHTML += wineTemplateFunction({
    //               id: newWine.id,
    //               name: newWine.name,
    //               year: newWine.year,
    //               grapes: newWine.grapes,
    //               country: newWine.country,
    //               region: newWine.region,
    //               price: newWine.price,
    //               picture: newWine.picture,
    //               description: newWine.description
    //           });

  
    //       })
    //       .catch(function(err) {
    //           console.log(err);
    //       });
  
   
          
    //   });

    // // update wine via api; update cards with response
    // document
    // .getElementById("wine-edit")
    // .addEventListener("submit", function(e){
    //     e.preventDefault();

    //     console.log("Form was updated!");
    //     var editId = document.getElementById("editId").value
    //     var editName = document.getElementById("editName").value
    //     var editYear = document.getElementById("editYear").value
    //     var editGrapes = document.getElementById("editGrapes").value
    //     var editCountry = document.getElementById("editCountry").value
    //     var editRegion = document.getElementById("editRegion").value
    //     var editPrice = document.getElementById("editPrice").value
    //     var editPicture = document.getElementById("editPicture").value
    //     var editDescription = document.getElementById("editDescription").value

    //     console.log(`name: ${editName} year: ${editYear} grapes: ${editGrapes}  country: ${editCountry} region: ${editRegion} price: ${editPrice} picture: ${editPicture}  description: ${editDescription}`);

    //     axios
    //     .put(`${baseUrl}${editId}?name=${editName}&year=${editYear}&grapes=${editGrapes}&country=${editCountry}&region=${editRegion}&price=${editPrice}&picture=${editPicture}&description=${editDescription}`, {
    //         editName,
    //         editYear,
    //         editGrapes,
    //         editCountry,
    //         editRegion,
    //         editPrice,
    //         editPicture,
    //         editDescription
    //     })
    //     .then(function(repsonse) {
    //         var updatedWine = repsonse.data

    //         console.log(updatedWine);

    //         // close modal with jquery
    //         $(`#edit-wine-modal-${editId}`).modal("hide");

    //         // updated wine in dom not working

    //         var updateCard =  document
    //         .querySelector(`[data-wine="${editId}"]`)

    //         updateCard
    //         .innerHTML -= wineTemplateFunction(updatedWine);


    //     })
    //     .catch(function(err) {
    //         console.log(err);
    //     });


        
    // });  

      

        
  
  });
