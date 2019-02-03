// Initialize Firebase
var config = {
  apiKey: "AIzaSyARWVD8RA9etmmLvsQYE9o3EqE_i36D1Yg",
  authDomain: "devdiary-43fd6.firebaseapp.com",
  projectId: "devdiary-43fd6",
};

var diaryData = firebase.firestore();

$("#addEntry").on("click", function() {

  var entryTitle = $("#title-input").val().trim();
  var entryText = $("#text-input").val().trim();
  var entryTags = $("#tags-input").val().trim();

  diaryData.collection(diary).add({
    title: entryTitle,
    text: netryText,
    tags: entryTags
  }).then(function(docRef) {
    console.log("Entry Added");
  }).catch(function(error) {
    console.log("Error");
  });

  console.log(newEntry.title);
  console.log(newEntry.text);
  console.log(newEntry.tags);

  $("#title-input").val("");
  $("#text-input").val("");
  $("#tags-input").val("");

  return false;
});
