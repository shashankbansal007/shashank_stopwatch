function display(val)
{
    document.getElementById('id1').value+=val; //+= so we can append the number if we use only= then it will change the number and wont append it

}
function solve()
{
    let x=document.getElementById("id1").value;
    let y=eval(x);
    document.getElementById('id1').value=y;
}
function clr()
{
    document.getElementById('id1').value = "";
}