//YOUR FIREBASE LINKS
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

    room_name = localStorage.getItem("room");
    user_name = localStorage.getItem("user_name");

      function send()
      {
            msg = document.getElementById("message").value;
            console.log(msg + "," + room_name);
            firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
            });
            document.getElementById("message").value = "";
            
      }

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
player = message_data['name'];
message = message_data['message'];
like = message_data['like'];

nametag ="<h4>"+player+" <img src='tick.png' class='user_tick'></h4>"; 
messagetag = "<h4 class='message_h4'>"+message+"</h4>";
liketag = "<button class='btn btn-success' id='"+firebase_message_id+"' onclick='updatelike(this.id)' value='"+like+"'><span class='glyphicon glyphicon-thumbs-up'>like:"+like+"</span></button>";
row = nametag + messagetag + liketag;
document.getElementById("output").innerHTML = row;
//End code
      } });  }); }
      
getData();

function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room name");
      window.location = "index.html";
}
likenum = 0 ;

function updatelike(likeid)
{
   likenum =Number(document.getElementById(likeid).value) + 1;
   console.log(likenum);
   firebase.database().ref(room_name).child(likeid).update({
         like:likenum
   });      

}