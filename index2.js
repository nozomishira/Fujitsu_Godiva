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
      let count=0;
      const Name = $("#Name").val();
      const atmosphere = $("#atmosphere").val();
      const corresponds = $("#corresponds").val();
      db.collection("doctor").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            const data =doc.data();
            database.push([data.Name,data.Sex,data.Age,data.expert]);
        });
        for(let item of database){
          if(item[0]==Name){
            db.collection("evaluation").add({
              Name: item[0],
              Sex: item[1],
              Age: item[2],
              expert: item[3],
              atmosphere: atmosphere,
              corresponds: corresponds,
          })
          .then(function(docRef) {
              console.log("Document written with ID: ", docRef.id);
              location.reload();
          })
          .catch(function(error) {
              console.error("Error adding document: ", error);
          });	
          count=count+1;}else{;}
        } 
        if (count==0){window.alert("医者が見つかりませんでした");}

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


  