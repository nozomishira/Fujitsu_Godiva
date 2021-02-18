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


$(document).ready(function () {
  $("#button1").on("click", () => {
    let database=[];
    const Name = $("#Name").val();
    const atmosphere = $("#atmosphere").val();
    const corresponds = $("#corresponds").val();
    const comprehensibility = $("#comprehensibility").val();
    const effect = $("#effect").val();
    db.collection("doctor").get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
          const data =doc.data();
          if(data.Name==Name){database.push([data.Name,data.Sex,data.Age,data.expert,data.Place,data.Hospital]);} 
      });
          
      if(database.length==0){window.alert("医者が見つかりませんでした");}else{
      db.collection("evaluation").add({
            Name: database[0][0],
            Sex: database[0][1],
            Age: database[0][2],
            expert: database[0][3],
            Place: database[0][4],
            Hospital: database[0][5],
            atmosphere: atmosphere,
            corresponds: corresponds,
            comprehensibility: comprehensibility,
            effect: effect,
        })
        .then(function(docRef) {
            console.log("Document written with ID: ", docRef.id);
            location.reload();
        })
        .catch(function(error) {
            console.error("Error adding document: ", error);
        });	}
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


