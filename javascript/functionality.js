// Initialize Firebase
var config = {
  apiKey: "AIzaSyARWVD8RA9etmmLvsQYE9o3EqE_i36D1Yg",
  authDomain: "devdiary-43fd6.firebaseapp.com",
  databaseURL: "https://devdiary-43fd6.firebaseio.com",
  projectId: "devdiary-43fd6",
  storageBucket: "devdiary-43fd6.appspot.com",
  messagingSenderId: "89880990619"
};

firebase.initializeApp(config);
var diaryData = firebase.firestore();

$("#addEntry").on("click", function() {
    event.preventDefault();

    var entryTitle = $("#title-input").val().trim();
    var entryText = $("#text-input").val().trim();
    var entryTags = $("#tags-input").val().trim();

    var newEntry = {
      title: entryTitle,
      text: entryText,
      tags: entryTags
    }

    console.log(newEntry);

    dataDiary.collection("diary").add(newEntry).then(function(docRef) {
      console.log("Entry Added");
    }).catch(function(error) {
      console.log("Error");
    });

    $("#title-input").val("");
    $("#text-input").val("");
    $("#tags-input").val("");
});
