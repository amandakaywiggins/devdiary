var blogposts = [{
        postTitle: "So it begins...",
        postDate: "1/21/19",
        postImage: "../images/",
        postSummary: "This will be the first post."
    }
]

var blogpost = {
    color: "#915f6d",
    backgroundColor: "#f7f6ed",
    margin: "auto",
    width: "60%",
    fontSize: "1.5em",
    padding: "2em",
    boxShadow: "0px 2px 10px #4c4a54"
}

var h3 = {
    color: "#b6fadc",
    backgroundColor: "#915f6d",
    margin: "auto",
    marginTop: "3em",
    width: "60%",
    fontSize: "2em",
    padding: "0.5em",
    boxShadow: "0px 2px 10px #4c4a54"
}

var h5 = {
    textAlign: "right"
}

$(document).ready(function() {

    function buildPost() {

        for (i = 0; i < blogposts.length; i++) {
            var blogPostTitle = blogposts[i].postTitle;
            var blogPostDate = blogposts[i].postDate;
            var blogPostImage = blogposts[i].postImage;
            var blogPostSummary = blogposts[i].postSummary;

            $("#blogposts").prepend("<h3>" + blogPostTitle + "</h3><div class='blogpost'><p>"
            + blogPostSummary + "</p><br><h5>" + blogPostDate + "</h5></div>");
            $(".blogpost").css(blogpost);
            $("h3").css(h3);
            $("h5").css(h5);
        };
    };

    buildPost();

});