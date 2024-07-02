const firebaseConfig = {
  apiKey: "AIzaSyAI2DUSgJRHgkTevceaOvzj7eEE4e-sRWQ",
  authDomain: "arclinic-eaff1.firebaseapp.com",
  databaseURL: "https://arclinic-eaff1-default-rtdb.firebaseio.com/",
  projectId: "arclinic-eaff1",
  storageBucket: "arclinic-eaff1.appspot.com",
  messagingSenderId: "557530392490",
  appId: "1:557530392490:web:5a552a81a8f1e6e1eeedd3"
};

// Initialize Firebase

firebase.initializeApp(firebaseConfig);

// reference

const ArClinicAppointmentDB = firebase.database().ref('ArClinicAppointment');

document.getElementById('appointment').addEventListener('submit', submitForm);


function submitForm(e){
    e.preventDefault();

    var name = getElementVal('name');
    var number = getElementVal('number');
    var email = getElementVal('email');
    var date = getElementVal('date');

    saveMessages(name, number, email, date);

    //alert
    
    document.querySelector(".alert").style.display = "block";

    //remove alert

    setTimeout(() => {
        document.querySelector(".alert").style.display = "none"
    }, 5000);

    //reset form

    document.getElementById('appointment').reset();
}

const saveMessages = (name, number, email, date) => {
    var newAppointment = ArClinicAppointmentDB.push();

    newAppointment.set({
        name : name,
        number : number,
        email : email,
        date : date,
    })
}

const getElementVal = (id) => {
    return document.getElementById(id).value;
}
