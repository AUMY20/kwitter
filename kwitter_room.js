user_name = localStorage.getItem("user_name");
document.getElementById("welcome_user").innerHTML = "WELCOME " + user_name ;
//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration
const firebaseConfig = {
      apiKey: "AIzaSyA7KJ0iA0ctvweE81oWirMwJ0_xcVOIkBI",
      authDomain: "kwitter-e1c8a.firebaseapp.com",
      databaseURL: "https://kwitter-e1c8a-default-rtdb.firebaseio.com",
      projectId: "kwitter-e1c8a",
      storageBucket: "kwitter-e1c8a.appspot.com",
      messagingSenderId: "232259568495",
      appId: "1:232259568495:web:3bb7316860d183dabe5e9a"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    
    function add_room()
    {
      room_name = document.getElementById("room_name").value ;
          firebase.database().ref("/").child(room_name).update({purpose:"addind room_name"});
          localStorage.setItem("room_name",room_name);
          window.location = "kwitter_page.html"
    }
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log(Room_names);
      row = "<div class ='room_name' id="+Room_names+" onclick='redirectroom(this.id)'>#"+Room_names+"</div>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function redirectroom(room)
{
localStorage.setItem("room",room);
window.location = "kwitter_page.html";
}

function logout()
{
  localStorage.removeItem("user_name");
  localStorage.removeItem("room name");
  window.location = "index.html";
}
