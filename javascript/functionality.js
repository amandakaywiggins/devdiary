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

diaryData.collection("diary").add({
    title: "Test",
    text: "This is a test",
    tags: "test"
}).then(funtion(docRef) {
    console.log("Entry Added");
}).catch(function(error) {
    console.log("Error");
});

$("#addEntry").on("click", function() {

  var entryTitle = $("#title-input").val().trim();
  var entryText = $("#text-input").val().trim();
  var entryTags = $("#tags-input").val().trim();

  diaryData.collection("diary").add({
    title: entryTitle,
    text: netryText,
    tags: entryTags
  }).then(function(docRef) {
    console.log("Entry Added");
  }).catch(function(error) {
    console.log("Error");
  });

  $("#title-input").val("");
  $("#text-input").val("");
  $("#tags-input").val("");

  return false;
});
