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

var diaryData = firebase.database();

$("#addEntry").on("click", function() {

  var entryTitle = $("#title-input").val().trim();
  var entryDate = $("#date-input").val().trim();
  var entryText = $("#text-input").val().trim();
  var entryTags = $("#tags-input").val().trim();

  var newEntry = {

    title: entryTitle,
    date: entryDate,
    text: netryText,
    tags: entryTags
  };

  entryData.ref().push(newEntry);

  console.log(newEntry.title);
  console.log(newEntry.date);
  console.log(newEntry.text);
  console.log(newEntry.tags);

  alert("Entry successfully added");
};
