var firebaseConfig = {
    apiKey: "AIzaSyAdXFlqOUZyEMhxQcHWzg-w7IiS5JOhZ-k",
    authDomain: "getintouch-794f7.firebaseapp.com",
    projectId: "getintouch-794f7",
    storageBucket: "getintouch-794f7.appspot.com",
    messagingSenderId: "606395970102",
    appId: "1:606395970102:web:3fcd5ba74e371b1a3dde97"
  };
  
  firebase.initializeApp(firebaseConfig);
  var firestore = firebase.firestore();
  
  const submitBtn = document.querySelector('#submit');
  
  let userName = document.querySelector('#userName');
  let userEmail = document.querySelector('#userEmail')
  let userQuestion = document.querySelector('#userQuestion');
  
  const db = firestore.collection("getintouchData");
  
  submitBtn.addEventListener('click', function(){
    let userNameInput = userName.value;
    let userEmailInput = userEmail.value;
    let userQuestionInput = userQuestion.value;
  
    db.doc().set({
      name: userNameInput,
      email: userEmailInput,
      question: userQuestionInput,
  
    })
    .then(function(){
      console.log("data saved");
    })
    .catch(function(error){
      console.log(error);
    });
    document.querySelector('.alert').style.display = 'block' ;
    setTimeout(function(){
    document.querySelector('.alert').style.display = 'none' ;
    },3000)

  });
  
