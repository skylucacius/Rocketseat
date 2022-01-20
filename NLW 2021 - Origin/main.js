function changeSocialMediaLinks() {
    const url = "https://api.github.com/users/skylucacius"
    fetch(url).then(response => response.json()).then(data => {
       //   document.getElementById("username").innerHTML = data.login
       username.innerHTML = data.login
       description.innerHTML = data.bio
       userImage.src = data.avatar_url
       githubProfile.href = data.html_url
    })
   }
   changeSocialMediaLinks()
