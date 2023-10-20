/* eslint-env browser */
let form;
let empId;
let empName;
let empExtn;
let email;
let dept;

// Helper function 
const $ = function (id) {
    return document.getElementById(id);
};
 
// On load event. defer keyword in <script> in html helps
window.addEventListener("load", (e) => {

        // Event Listener attached to Form. It fires on Form submission    
        $('form').addEventListener("submit", function(e){
       
            e.preventDefault();    //stop form from submitting
     
            // Get DOM Elements  
            form = $('form').value;
            empId = $('empId').value;
            empName = $('empName').value;
            empExtn = $('empExtn').value;   
            email = $('email').value;
            dept = $('dept').value;
  
            console.log(`ID: ${empId}` + "\n" +
                 `Name: ${empName}` + "\n" + 
                 `Extn: ${empExtn}` + "\n" + 
                 `Email: ${email}` + "\n" + 
                 `Dept: ${dept}`);     
        });
});    
  


      
