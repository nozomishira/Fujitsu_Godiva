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
  $("#button1").on("click", () => {
    console.clear();
    let expert = $("#expert").val();
    db.collection("evaluation").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            const data =doc.data();
            if(data.expert == expert){
            console.log(data);}else{;}
        });
    });	

});

    
    
    

  
          

