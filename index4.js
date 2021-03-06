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
        paramsArray.push(neet[0])
        paramsArray.push(neet[1])
        paramsArray.push(neet[2])
        paramsArray.push(decodeURIComponent(neet[3]))
        paramsArray.push(decodeURIComponent(neet[4]))
        paramsArray.push(neet[5])
        paramsArray.push(neet[6])
        paramsArray.push(neet[7])
        paramsArray.push(decodeURIComponent(neet[8]))
        }
    return paramsArray
}

// -------------------------------------------------------------------
jQuery(function()
{
    const data1 = getParam();
    console.log(data1);
        let output=[];
        let database=[];
        let expert = data1[1];
        let important = data1[2];
        let Name = data1[3];
        let hospital = data1[4]; 
        let sex = data1[5];
        let age =  data1[6] ? Number(data1[6]) : undefined;
        let Place = data1[7];
        let comment = data1[8];
        
        const evaluations = [];
        
        console.log(expert);
        console.log(important);
        console.log(Name);
        console.log(hospital);
        console.log(sex);
        console.log(age);
        console.log(Place);
        console.log(comment);
        
        db.collection("evaluation").get().then((querySnapshot) => {
            const evaluations = querySnapshot.docs.map((doc) => doc.data());
            console.log(evaluations);
            if(important==1){
                const filteredEvaluations = evaluations
                .map(x => ({
                    ...x,
                    score: (x.atmosphere * 2) + x.corresponds + x.comprehensibility + x.effect
                }))
                .map((x, i, arr) => {
                    const scores = arr.filter(y => y.Name === x.Name).map(x => x.score);
                    const avgScore= scores.reduce((a, b) => a + b, 0) / scores.length;
                    return ({
                        ...x,
                        avgScore,
                    });
                })
                .filter(x => x.expert === expert)
                .filter(x => sex ? x.Sex === sex : true)
                // .filter(x => age ? ((10*age<= Number(x.Age))&&(Number(x.Age)< 10* (age+1))) : true)
                .filter(x => age ? (( 10 * age <= x.Age ) &&( x.Age < 10 * ( age + 1 ) )) : true)
                .filter(x => Name ? x.Name === Name : true)
                .filter(x => hospital ? x.Hospital === hospital : true)
                .filter(x => Place ? x.Place === Place : true)
                .filter(x => comment ? x.comment === comment : true)
                .filter(
                    (x, i, self) =>
                      self.findIndex(y => x.Name === y.Name) === i
                )
                .sort((a, b) => a.avgScore > b.avgScore ? 1 : -1);

                console.log(filteredEvaluations);

                //let check=0;
               /* for(let i=0;i<(filteredEvaluations.length);i++){
                    let score=0;
                    let count =0;
                    for(let j of filteredEvaluations){
                        if(filteredEvaluations[i].Name===j.Name){
                            score+=j.score;
                            count+=1;
                            ;}
                        ;}
                    if(check==0){
                    output.push({Name:filteredEvaluations[i].Name,id:i,score:(score/count)});
                    check+=1;}
                    ;}
            console.log(filteredEvaluations);
            console.log(output);
            output.sort(function (a, b) {
                        if (a.score < b.score) {
                          return 1;
                         } else {
                          return -1;
                         }
                       })*/
           for(let l of filteredEvaluations){
              $("#output").append(`<li>${l.Name}${l.Sex}${l.Age}${l.expert}${l.Email}${l.Place}${l.Doctor_Age}${l.illness}${l.Hospital}${l.web}${l.other}
              <button id="button5" type="button" >評価</button><button id="button6" type="button" >詳細</button></li>`);
                  
                 /* 値をindex7.html，index2.htmlに渡す部分
                 jQuery ("#button6").click (function ()
                        {
                            window.location.href = "index7.html?"+"="+database[ids[0]][0]+"="+database[ids[0]][1]+"="+database[ids[0]][2]+"="+database[ids[0]][3]+"="+database[ids[0]][4]+"="+database[ids[0]][5]+"="+database[ids[0]][6]+"="+database[ids[0]][7]+"="+database[ids[0]][8]+"="+database[ids[0]][9]+"="+database[ids[0]][10] ;})	
                          jQuery ("#button5").click (function ()
                          {
                         
                          window.location.href = "index2.html?"+"="+database[ids[0]][0] ;})*/}
              

                ;}
            if(important==2){
                const filteredEvaluations = evaluations
                .map(x => ({
                    ...x,
                    score: (x.atmosphere * 2) + x.corresponds + x.comprehensibility + x.effect
                }))
                .map((x, i, arr) => {
                    const scores = arr.filter(y => y.Name === x.Name).map(x => x.score);
                    const avgScore= scores.reduce((a, b) => a + b, 0) / scores.length;
                    return ({
                        ...x,
                        avgScore,
                    });
                })
                .filter(x => x.expert === expert)
                .filter(x => sex ? x.Sex === sex : true)
                // .filter(x => age ? ((10*age<= Number(x.Age))&&(Number(x.Age)< 10* (age+1))) : true)
                .filter(x => age ? (( 10 * age <= x.Age ) &&( x.Age < 10 * ( age + 1 ) )) : true)
                .filter(x => Name ? x.Name === Name : true)
                .filter(x => hospital ? x.Hospital === hospital : true)
                .filter(x => Place ? x.Place === Place : true)
                .filter(x => comment ? x.comment === comment : true)
                .filter(
                    (x, i, self) =>
                      self.findIndex(y => x.Name === y.Name) === i
                )
                .sort((a, b) => a.avgScore > b.avgScore ? 1 : -1);

                console.log(filteredEvaluations);

                //let check=0;
               /* for(let i=0;i<(filteredEvaluations.length);i++){
                    let score=0;
                    let count =0;
                    for(let j of filteredEvaluations){
                        if(filteredEvaluations[i].Name===j.Name){
                            score+=j.score;
                            count+=1;
                            ;}
                        ;}
                    if(check==0){
                    output.push({Name:filteredEvaluations[i].Name,id:i,score:(score/count)});
                    check+=1;}
                    ;}
            console.log(filteredEvaluations);
            console.log(output);
            output.sort(function (a, b) {
                        if (a.score < b.score) {
                          return 1;
                         } else {
                          return -1;
                         }
                       })*/
           for(let l of filteredEvaluations){
              $("#output").append(`<li>${l.Name}${l.Sex}${l.Age}${l.expert}${l.Email}${l.Place}${l.Doctor_Age}${l.illness}${l.Hospital}${l.web}${l.other}
              <button id="button5" type="button" >評価</button><button id="button6" type="button" >詳細</button></li>`);
                  
                 /* 値をindex7.html，index2.htmlに渡す部分
                 jQuery ("#button6").click (function ()
                        {
                            window.location.href = "index7.html?"+"="+database[ids[0]][0]+"="+database[ids[0]][1]+"="+database[ids[0]][2]+"="+database[ids[0]][3]+"="+database[ids[0]][4]+"="+database[ids[0]][5]+"="+database[ids[0]][6]+"="+database[ids[0]][7]+"="+database[ids[0]][8]+"="+database[ids[0]][9]+"="+database[ids[0]][10] ;})	
                          jQuery ("#button5").click (function ()
                          {
                         
                          window.location.href = "index2.html?"+"="+database[ids[0]][0] ;})*/}
                          ;}
                
            if(important==3){
                const filteredEvaluations = evaluations
                .map(x => ({
                    ...x,
                    score: (x.atmosphere * 2) + x.corresponds + x.comprehensibility + x.effect
                }))
                .map((x, i, arr) => {
                    const scores = arr.filter(y => y.Name === x.Name).map(x => x.score);
                    const avgScore= scores.reduce((a, b) => a + b, 0) / scores.length;
                    return ({
                        ...x,
                        avgScore,
                    });
                })
                .filter(x => x.expert === expert)
                .filter(x => sex ? x.Sex === sex : true)
                // .filter(x => age ? ((10*age<= Number(x.Age))&&(Number(x.Age)< 10* (age+1))) : true)
                .filter(x => age ? (( 10 * age <= x.Age ) &&( x.Age < 10 * ( age + 1 ) )) : true)
                .filter(x => Name ? x.Name === Name : true)
                .filter(x => hospital ? x.Hospital === hospital : true)
                .filter(x => Place ? x.Place === Place : true)
                .filter(x => comment ? x.comment === comment : true)
                .filter(
                    (x, i, self) =>
                      self.findIndex(y => x.Name === y.Name) === i
                )
                .sort((a, b) => a.avgScore > b.avgScore ? 1 : -1);

                console.log(filteredEvaluations);

                //let check=0;
               /* for(let i=0;i<(filteredEvaluations.length);i++){
                    let score=0;
                    let count =0;
                    for(let j of filteredEvaluations){
                        if(filteredEvaluations[i].Name===j.Name){
                            score+=j.score;
                            count+=1;
                            ;}
                        ;}
                    if(check==0){
                    output.push({Name:filteredEvaluations[i].Name,id:i,score:(score/count)});
                    check+=1;}
                    ;}
            console.log(filteredEvaluations);
            console.log(output);
            output.sort(function (a, b) {
                        if (a.score < b.score) {
                          return 1;
                         } else {
                          return -1;
                         }
                       })*/
           for(let l of filteredEvaluations){
              $("#output").append(`<li>${l.Name}${l.Sex}${l.Age}${l.expert}${l.Email}${l.Place}${l.Doctor_Age}${l.illness}${l.Hospital}${l.web}${l.other}
              <button id="button5" type="button" >評価</button><button id="button6" type="button" >詳細</button></li>`);
                  
                 /* 値をindex7.html，index2.htmlに渡す部分
                 jQuery ("#button6").click (function ()
                        {
                            window.location.href = "index7.html?"+"="+database[ids[0]][0]+"="+database[ids[0]][1]+"="+database[ids[0]][2]+"="+database[ids[0]][3]+"="+database[ids[0]][4]+"="+database[ids[0]][5]+"="+database[ids[0]][6]+"="+database[ids[0]][7]+"="+database[ids[0]][8]+"="+database[ids[0]][9]+"="+database[ids[0]][10] ;})	
                          jQuery ("#button5").click (function ()
                          {
                         
                          window.location.href = "index2.html?"+"="+database[ids[0]][0] ;})*/}
                          ;}
            
             if(important==4){
                const filteredEvaluations = evaluations
                .map(x => ({
                    ...x,
                    score: (x.atmosphere * 2) + x.corresponds + x.comprehensibility + x.effect
                }))
                .map((x, i, arr) => {
                    const scores = arr.filter(y => y.Name === x.Name).map(x => x.score);
                    const avgScore= scores.reduce((a, b) => a + b, 0) / scores.length;
                    return ({
                        ...x,
                        avgScore,
                    });
                })
                .filter(x => x.expert === expert)
                .filter(x => sex ? x.Sex === sex : true)
                // .filter(x => age ? ((10*age<= Number(x.Age))&&(Number(x.Age)< 10* (age+1))) : true)
                .filter(x => age ? (( 10 * age <= x.Age ) &&( x.Age < 10 * ( age + 1 ) )) : true)
                .filter(x => Name ? x.Name === Name : true)
                .filter(x => hospital ? x.Hospital === hospital : true)
                .filter(x => Place ? x.Place === Place : true)
                .filter(x => comment ? x.comment === comment : true)
                .filter(
                    (x, i, self) =>
                      self.findIndex(y => x.Name === y.Name) === i
                )
                .sort((a, b) => a.avgScore > b.avgScore ? 1 : -1);

                console.log(filteredEvaluations);

                //let check=0;
               /* for(let i=0;i<(filteredEvaluations.length);i++){
                    let score=0;
                    let count =0;
                    for(let j of filteredEvaluations){
                        if(filteredEvaluations[i].Name===j.Name){
                            score+=j.score;
                            count+=1;
                            ;}
                        ;}
                    if(check==0){
                    output.push({Name:filteredEvaluations[i].Name,id:i,score:(score/count)});
                    check+=1;}
                    ;}
            console.log(filteredEvaluations);
            console.log(output);
            output.sort(function (a, b) {
                        if (a.score < b.score) {
                          return 1;
                         } else {
                          return -1;
                         }
                       })*/
           for(let l of filteredEvaluations){
              $("#output").append(`<li>${l.Name}${l.Sex}${l.Age}${l.expert}${l.Email}${l.Place}${l.Doctor_Age}${l.illness}${l.Hospital}${l.web}${l.other}
              <button id="button5" type="button" >評価</button><button id="button6" type="button" >詳細</button></li>`);
                  
                 /* 値をindex7.html，index2.htmlに渡す部分
                 jQuery ("#button6").click (function ()
                        {
                            window.location.href = "index7.html?"+"="+database[ids[0]][0]+"="+database[ids[0]][1]+"="+database[ids[0]][2]+"="+database[ids[0]][3]+"="+database[ids[0]][4]+"="+database[ids[0]][5]+"="+database[ids[0]][6]+"="+database[ids[0]][7]+"="+database[ids[0]][8]+"="+database[ids[0]][9]+"="+database[ids[0]][10] ;})	
                          jQuery ("#button5").click (function ()
                          {
                         
                          window.location.href = "index2.html?"+"="+database[ids[0]][0] ;})*/}
                          ;}

            
        });
})

