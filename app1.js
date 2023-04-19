
async function login(){
    let login1=await fetch('http://localhost:3000/login',{
        method:"POST",
        body:JSON.stringify({
            uname:document.getElementById(uname),
            pass:document.getElementById(pass)
        }),
        header:{
            "content-type":"application/json"
        }
    })
    let response= await login1.json()
    console.log(response.token)
    localStorage.setItem("token", response.token)
}
async function profile(){
    let profile1=await fetch('http://localhost:3000/profile',{
        method:"POST",
        header:{
            "content-type":"application/json",
            "authorization":"Bearer "+localStorage.getItem("token")
        }
    });
    let response=await profile1.json();
    console.log(response.token)
}