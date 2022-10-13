function Respond()
{
    var username=document.getElementById("Username").value;
    var password=document.getElementById("Password").value;
    if (username=="Sanjana" && password=="1234")
    {
        alert("Login successful");
        return false;
    }
    else
    {
        alert("Login failed");
    }
}