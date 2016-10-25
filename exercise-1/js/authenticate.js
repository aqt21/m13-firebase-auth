// JavaScript authentication file
$(function() {
    

    // Initialize Firebase
    var config = {
        apiKey: "AIzaSyCRvfxVCRZYFV6xYpLMJBOoHR07uPccvwU",
        authDomain: "slick-7eb6b.firebaseapp.com",
        databaseURL: "https://slick-7eb6b.firebaseio.com",
        storageBucket: "slick-7eb6b.appspot.com",
        messagingSenderId: "396439289062"
    };
    firebase.initializeApp(config);

    var auth = firebase.auth();
    // Sign Up: Function to create account on firebase, then redirect to index.html
   

    var signUp = function() {
        // Get email, password, and display name
        firebase.auth().createUserWithEmailAndPassword($("#email").val(), $("#password").val()).then(function(user) {
            // Create user, then set the user's display name
            user.updateProfile({
                // Set display name
                displayName: $("#displayname").val()
            }).then(function(){
                window.location = "index.html";
            })
        });
    };

    // SignIn: Function to authenticate on Firebase, then redirect to index.html
    var signIn = function() {
        // Get email and password
        
        // Authenticate using email and password, then redirect
        auth.signInWithEmailandPassword($("#email").val(), $("#password").val()).then(function(user) {
            window.location = "index.html";
        }).catch(function(error) {
            alert(error);
        });

    };

    // Sign out: Function to log a user out of firebase
    var signOut = function() {
        // Sign out, then redirect



    };

    // Assign event lister to form submission
    $("form").on("submit", function(event){
        event.preventDefault();
        if(this.id === "sign-up"){
            signUp();
        } else {
            signIn();
        }
    });


    // Assign click event to logout button



    // Authentication Change: see if a user is already signed in, and redirect

            // Rediriect to index.html if there is a user and the pathname isn't '/'

            // Redirect to sign-in if there is NOT a user and the pathname IS '/'

});
