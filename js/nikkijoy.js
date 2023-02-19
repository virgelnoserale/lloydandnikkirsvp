const firebaseConfig = {
  apiKey: "AIzaSyAGYiamX6Ipdp3JCpYIisJefTxtRKSiW9U",
  authDomain: "nikkijoyproject.firebaseapp.com",
  databaseURL: "https://nikkijoyproject-default-rtdb.firebaseio.com",
  projectId: "nikkijoyproject",
  storageBucket: "nikkijoyproject.appspot.com",
  messagingSenderId: "581078413644",
  appId: "1:581078413644:web:7b7168886c7374321d5fe9"
};

//init
  firebase.initializeApp(firebaseConfig);
// ref your database

var nikkijoyprojDB = firebase.database().ref("nikkijoyproj");

document.getElementById('contactForm').addEventListener('submit', submitForm);

function submitForm(e) {
    e.preventDefault();




    var name =getElementVal('name');
    var contactNo = getElementVal('contactNo');

    saveMessages(name, contactNo);

     //   enable alert
     document.querySelector(".alert").style.display = "block";

     
    //   remove the alert
    setTimeout(() => {
      document.querySelector(".alert").style.display = "none";
    }, 3000);
  
    //   reset the form
    document.getElementById("contactForm").reset();
  }

  const saveMessages = (name, contactNo) => {
    var newContactForm = nikkijoyprojDB.push();

  

  newContactForm.set({
    name: name,
    contactNo: contactNo,
  });
};






  const getElementVal = (id) => {
    return document.getElementById(id).value;
};