// Initialize Firebase
var config = {
  apiKey: "AIzaSyARWVD8RA9etmmLvsQYE9o3EqE_i36D1Yg",
  authDomain: "devdiary-43fd6.firebaseapp.com",
  projectId: "devdiary-43fd6",
};

firebase.initializeApp(config);
var diaryData = firebase.firestore();
const firestore = firebase.firestore();
const settings = {timestampsInSnapshots: true};
firestore.settings(settings);

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

diaryData.collection("diary").get().then((querySnapshot) => {
  querySnapshot.forEach((doc) => {
    console.log("${doc.id} => ${doc.data()}");
  });
});
