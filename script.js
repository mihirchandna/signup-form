function check()
{
    var confirm=document.getElementById("con-password");
    var og=document.getElementById("password")
    if(confirm.value!=og.value)
    {
        og.setCustomValidity('* Passwords do not match')
    }
}