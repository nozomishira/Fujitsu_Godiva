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
        paramsArray.push(decodeURIComponent(neet[2]));
        }
    return paramsArray
}

// -------------------------------------------------------------------
jQuery(function()
{
    const data = getParam();
    console.log(data);
    let database=[];
      const Name = data[0];
      const hospital = data[1];
      db.collection("doctor").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            const data =doc.data();
            if(data.Name===Name &&data.Hospital===hospital){database.push([data.Name,data.Sex,data.Age,data.expert,data.Email,data.Place,data.Doctor_Age,data.illness,data.Hospital,data.web,data.other]);} 
        });
            
        if(database.length==0){$("#output").append("該当する医者がいません");}else{
            $("#output").append(`<li>${database[0][0]}${database[0][1]}${database[0][2]}${database[0][3]}${database[0][4]}${database[0][5]}${database[0][6]}${database[0][7]}${database[0][8]}${database[0][9]}${database[0][10]}</li>`);
      jQuery ("#button6").click (function ()
      {
        window.location.href = "index7.html?"+"="+database[0][0]+"="+database[0][1]+"="+database[0][2]+"="+database[0][3]+"="+database[0][4]+"="+database[0][5]+"="+database[0][6]+"="+database[0][7]+"="+database[0][8]+"="+database[0][9]+"="+database[0][10] ;})	
      jQuery ("#button5").click (function ()
      {
      
      window.location.href = "index2.html?"+"="+database[0][0] ;})

        }
})
/*jQuery ("#button6").click (function ()
      {
        window.location.href = "index7.html?"+"="+database[0][0]+"="+database[0][1]+"="+database[0][2]+"="+database[0][3]+"=" ;})*/
    });



