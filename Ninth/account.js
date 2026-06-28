function getCookie(name){

    const cookies = document.cookie.split(";");

    for(let cookie of cookies){

        cookie = cookie.trim();

        if(cookie.startsWith(name + "=")){

            return decodeURIComponent(cookie.substring(name.length + 1));

        }

    }

    return "";

}

function deleteCookie(name){

    document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/`;

}

if(!getCookie("email") || !getCookie("password")){

    window.location.href = "signup.html";

}

document.getElementById("email").textContent = getCookie("email");
document.getElementById("firstName").textContent = getCookie("firstName");
document.getElementById("lastName").textContent = getCookie("lastName");
document.getElementById("birthYear").textContent = getCookie("birthYear");
document.getElementById("gender").textContent = getCookie("gender");
document.getElementById("phone").textContent = getCookie("phone");
document.getElementById("skype").textContent = getCookie("skype");

document.getElementById("editBtn").onclick = function(){

    window.location.href = "profile.html";

}

document.getElementById("exitBtn").onclick = function(){

    deleteCookie("email");
    deleteCookie("password");
    deleteCookie("firstName");
    deleteCookie("lastName");
    deleteCookie("birthYear");
    deleteCookie("gender");
    deleteCookie("phone");
    deleteCookie("skype");

    window.location.href = "signup.html";

}