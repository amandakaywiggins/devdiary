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

function buildEntires() {
    diaryData.collection("diary").get().then(function(querySnapshot) {
      querySnapshot.forEach(function(doc) {
        console.log(doc.id, "=>", doc.data());

        var tags = doc.data().tags;
        var tagsFormatted = tags.replace(/,/g, " ");

        $("#blogposts").append("<div class='blogpost'><h1>" + doc.data().title + "</h1><div><p>" + doc.data().text + "</p><br><br><h5>" +
        tagsFormatted + "</h5><br><br><h5>" + doc.data().date + "</div>");
      });
    });
};

$(document).ready(function() {
  $("#addEntry").on("click", function(e) {
      var entryTitle = $("#title-input").val().trim();
      var entryText = $("#text-input").val().replace(/\n/g, '<br>');
      var entryTags = $("#tags-input").val().trim();
      var entryDate = $("#date-input").val().trim();

      var newEntry = {
        title: entryTitle,
        text: entryText,
        tags: entryTags,
        date: entryDate
      }

      console.log(newEntry);

      diaryData.collection("diary").add(newEntry).then(function(docRef) {
        console.log("Entry Added");
      }).catch(function(error) {
        console.log("Error");
      });

      $("#title-input").val("");
      $("#text-input").val("");
      $("#tags-input").val("");
      $("#date-input").val("");
      e.preventDefault();
  });

  buildEntires();
});
