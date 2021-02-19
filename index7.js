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
        paramsArray.push(neet[2]);
        paramsArray.push(neet[3]);
        paramsArray.push(neet[4]);
        paramsArray.push(neet[5]);
        paramsArray.push(neet[6]);
        paramsArray.push(neet[7]);
        paramsArray.push(neet[8]);
        paramsArray.push(neet[9]);
        paramsArray.push(neet[10]);
        paramsArray.push(neet[11]);
        }
    return paramsArray
}

// -------------------------------------------------------------------

jQuery(function()
{
    let database=[];
    let data = getParam();
    $("#output2").append(`<li>${data[0]}${data[1]}${data[2]}${data[3]}${data[4]}${data[5]}${data[6]}${data[7]}${data[8]}${data[9]}${data[10]}</li>`);
    console.log(data);
    const Name =data[0];
            $(document).ready(function () {
                  db.collection("evaluation").get().then((querySnapshot) => {
                    querySnapshot.forEach((doc) => {
                        const data =doc.data();
                        if(data.Name==Name){if(data.comment){database.push(data.comment);};} 
                    }); 
                    for(let item of database){$("#output").append(`<li>${item}</li>`);}
                    
})
//$("#output").append(`<li>${database[0].Name}</li>`);
})})