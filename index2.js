const firebaseConfig = {
    apiKey: "AIzaSyBCcHqzQOdcUq17a9ecaCeNz_k6mtOQwyQ",
    authDomain: "fujitsuhackathon-2498f.firebaseapp.com",
    projectId: "fujitsuhackathon-2498f",
    storageBucket: "fujitsuhackathon-2498f.appspot.com",
    messagingSenderId: "24195856437",
    appId: "1:24195856437:web:5684860ae356a1231b997c",
    measurementId: "G-5BRYYBXDWW",
  };
  
  firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();

function getParam()
{
    var url   = location.href
    parameters    = url.split("?")
    params   = parameters[1].split("&")
    var paramsArray = []
    for ( it = 0; it < params.length; it++ ) {
        neet = params[it].split("=")
        paramsArray.push(decodeURIComponent(neet[1]));
        }
    return paramsArray
}

// -------------------------------------------------------------------
jQuery(function()
{
    let data = getParam();
    console.log(data);
    const Name =data[0];
            $(document).ready(function () {
                $("#button1").on("click", () => {
                  let database=[];
                  const atmosphere = $("#atmosphere").val();
                  const corresponds = $("#corresponds").val();
                  const comprehensibility = $("#comprehensibility").val();
                  const effect = $("#effect").val();
                  const comment =$("#comment").val();
                  db.collection("doctor").get().then((querySnapshot) => {
                    querySnapshot.forEach((doc) => {
                        const data =doc.data();
                        if(data.Name==Name){database.push([data.Name,data.Sex,data.Age,data.expert,data.Place,data.Hospital,data.Email,data.Doctor_Age,data.illness,data.Web,data.other]);} 
                    });  
                    db.collection("evaluation").add({
                          Name: database[0][0],
                          Sex: database[0][1],
                          Age: database[0][2],
                          expert: database[0][3],
                          Place: database[0][4],
                          Hospital: database[0][5],
                          Email: database[0][6],
                          Doctor_Age: database[0][7],
                          illness: database[0][8],
                          web: database[0][9],
                          other: database[0][10],
                          atmosphere: atmosphere,
                          corresponds: corresponds,
                          comprehensibility: comprehensibility,
                          effect: effect,
                          comment:comment,
                      })
                      .then(function(docRef) {
                          console.log("Document written with ID: ", docRef.id);
                          location.reload();
                      })
                      .catch(function(error) {
                          console.error("Error adding document: ", error);
                      });	
                });	
                    
                  });
                  db.collection("evaluation")
                  .get()
                  .then((querySnapshot) => {
                    querySnapshot.forEach((doc) => {
                      const data = doc.data();
                      console.log(data);
                    });
                  });
              });
})

