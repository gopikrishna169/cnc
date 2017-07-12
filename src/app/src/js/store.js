
            $(document).ready(function(){
                window.indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;
                var request, db; 
                var a=0;
                if(!window.indexedDB)
                {
                    console.log("Your Browser does not support IndexedDB");
                }
                else
                {
                    request = window.indexedDB.open("electronics", 2);
                    request.onerror = function(event){
                        console.log("Error opening DB", event);
                    }
                    request.onupgradeneeded   = function(event){
                        console.log("Upgrading");
                        db = event.target.result;
                        var objectStore = db.createObjectStore("item", { keyPath : "id" });
                    };
                    request.onsuccess  = function(event){
                        console.log("Success opening DB");
                        db = event.target.result;
                    } 
                }
                 
                $("#add-item").click(function(){
                    
                    
                    var type = $('div#id > form#1 > div#2 > select#type').val();
                    var name = $('div#id > form#1 > div#2 > input#name').val();
                    var cost = $('div#id > form#1 > div#2 > input#cost').val();
                    var costtype = $('div#id > form#1 > div#2 > select#costtype').val();
                    var id = a++;
                    var transaction = db.transaction(["item"],"readwrite");
                    transaction.oncomplete = function(event) {
                        console.log("Success :)");
                       // $("#result").html("Add : Success");
                    };
                    
                    transaction.onerror = function(event) {
                       console.log("Error :(");
                      //  $("#result").html("Add : Error");
                    };  
                    var objectStore = transaction.objectStore("item");
                    
                    objectStore.add({name: name,type: type, cost: cost, costtype: costtype,id: id});
                });
                
               // $("#removeBtn").click(function(){
                  //  var rollNo = $("#rollno").val();                    
                  //  db.transaction(["students"],"readwrite").objectStore("students").delete(rollNo);
              //  });
               // $("#getBtn").click(function(){
//var rollNo = $("#rollno").val();
                  //  var request = db.transaction(["students"],"readwrite").objectStore("students").get(rollNo);
                   // request.onsuccess = function(event){
                      //  $("#result").html("Name : "+request.result.name);    
                    //};
               // });
                
               // $("#updateBtn").click(function(){
                 //   var rollNo = $("#rollno").val();
                 //   var name = $("#name").val();
                  //  var transaction = db.transaction(["students"],"readwrite");
                  //  var objectStore = transaction.objectStore("students");
                  //  var request = objectStore.get(rollNo);
                   // request.onsuccess = function(event){
                   //     $("#result").html("Updating : "+request.result.name + " to " + name);
                   //     request.result.name = name;
                    //    objectStore.put(request.result);
                   // };
               // });
                 var items = [];
               function getAllItems(callback) {
    var trans = db.transaction(item, IDBTransaction.READ_ONLY);
    var store = trans.objectStore(item);
  
 
    trans.oncomplete = function(evt) {  
        callback(items);
        
    };
 
    var cursorRequest = store.openCursor();
 
    cursorRequest.onerror = function(error) {
        console.log(error);
    };
 
    cursorRequest.onsuccess = function(evt) {                    
        var cursor = evt.target.result;
        if (cursor) {
            items.push(cursor.value);
            
            cursor.continue();
        }
    };
}
           });
  