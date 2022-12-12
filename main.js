function checkData(){
    var enterUser = document.getElementById('username').value;
    var enterPass = document.getElementById('pwd').value;
    var enterCMS = document.getElementById('cms').value;

    // getting data from local storage

    var getUser = localStorage.getItem('username');
    var getPass = localStorage.getItem('userpwd');
    var getCms = localStorage.getItem('usercms');

    if(enterUser == getUser && enterPass == getPass && enterCMS == getCms){
        if(enterCMS == 'Level3'){
            alert("Login Successfully! Name is "+enterUser+ " Your access level is Level 3(Administrator)");
            window.location = "admin.html";
            return false;
        }
        else if(enterCMS == 'Level1'){
            alert("Login Successfully! Name is "+enterUser+ " Your access level is Level 1(User)");
            window.location = "signout.html";
            return false;
        }
        else if(enterCMS == 'Level2'){
            alert("Login Successfully! Name is "+enterUser+ " Your access level is Level 2(Encoder)");
            window.location = "encoder.html";
            return false;
        }
    }
    else{
        alert("Invalid Information");
        window.location = "signin.html";
    }
}


function addData(){
    var username = document.getElementById('username').value;
    var pass = document.getElementById('pwd').value;
    var email = document.getElementById('email').value;
    var mobilenumber = document.getElementById('telnum').value;
    var gender = document.getElementById('gender').value;
    var cms = document.getElementById('cms').value;
    
    // storing data

    localStorage.username = username;
    localStorage.userpwd = pass;
    localStorage.usercms = cms;
    alert("Registered Successfully!");
}


