//Blog Posts
var blogposts = [{
        postTitle: "So it begins...",
        postDate: "01/20/19",
        postImage: "../images/",
        postSummary: "In which I finally get off my ass and write.",
        postTags: [" #firstpost", " #announcement", " #writing", " #art", " #anerrantpeach"]
    }, {
        postTitle: "An Errant Peach",
        postDate: "01/21/19",
        postImage: "../images/",
        postSummary: "Getting to know you.",
        postTags: [" #announcement", " #writing", " #art", " #anerrantpeach"]
    }
]

var posts = [{
        textpost: "During third grade recess I hosted, with dramatic panache, Edgar Allan Poe readings. When I was 12 years old I wanted to be a medical examiner. That dream ended when I realized I would actually be dealing with dead bodies and not haring off after detectives solving the crimes for them. But I still love the macabre, the dark, the drama, the mystery. <br><br> My best friend from 5th grade’s mom still asks me every time I see her when I’m going to write the next great American novel. I guess every young kid who loves reading gets that question. But I always want to the answer to be soon. <br><br> My brain doesn’t always immediately know what to do with ideas. This project is going to be a bit like that. Unlike research projects or art shows, the end goal isn’t quite clear. <br><br> I know I want to write about the gothic. I know I want to write about antebellum Georgia. But I also want to write about lesbians. I want to write in a world where black people aren’t going through some of the worst atrocities my country has ever perpetuated. Continues to perpetuate. <br><br> But I want that Southern charm. <br><br> So fuck history. I’m going to write about lesbian ladies, some of color, and they are not going to be slaves. Get ready for some drama."
    }
]

//Styling Variables
var blogpost = {
    color: "#915f6d",
    backgroundColor: "#f7f6ed",
    margin: "auto",
    marginBottom: "3em",
    width: "60%",
    fontSize: "1.5em",
    padding: "2em",
    boxShadow: "0px 2px 10px #4c4a54"
}

var h3 = {
    color: "#f7f6ed",
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

var a = {
    textDecoration: "none",
    color: "#4c4a54"
}

//Functions
$(document).ready(function() {
    //Post articles to home
    function buildPostLog() {

        for (i = 0; i < blogposts.length; i++) {
            var blogPostTitle = blogposts[i].postTitle;
            var blogPostDate = blogposts[i].postDate;
            var blogPostImage = blogposts[i].postImage;
            var blogPostSummary = blogposts[i].postSummary;
            var blogPostTags = blogposts[i].postTags;

            $("#blogposts").prepend("<h3>" + blogPostTitle + "</h3><div class='blogpost'><p>"
            + blogPostSummary + "</p><br><a href='#' class='postid' id='post" + i + "'>Read More</a><br><h5>" + blogPostDate + "</h5></div>");
            $(".blogpost").css(blogpost);
            $("h3").css(h3);
            $("a").css(a);
            $("h5").css(h5);
        };
    };

    buildPostLog();


    function buildPosts() {
        $(".postid").click(function() {
            $("#post").css("visibility", "visible");

            var clickId = this.id
            console.log (clickId);

            if (clickId === "post0") {
                $("#postTitle").append(blogposts[0].postTitle);
                $("#postText").append(posts[0].textpost + "<br><br>");
                $("#postText").append("<br><br><a href='#' id='close'>Close<a/>");
                $("#postDate").append(blogposts[0].postDate);
                
                $("#close").click(function() {
                    $("#post").css("visibility", "hidden");
                    $("#post").empty();
                    location.reload();
                });
            } else if (clickId === "post1") {
                $("#postTitle").append(blogposts[0].postTitle);
                $("#postText").append(posts[0].textpost + "<br><br>");
                $("#postText").append("<br><br><a href='#' id='close'>Close<a/>");
                $("#postDate").append(blogposts[0].postDate);
                $("#close").click(function() {
                    $("#post").css("visibility", "hidden");
                    $("#post").empty();
                    location.reload();
                });
            } else {
              
            };
        });
    };

    buildPosts();
});