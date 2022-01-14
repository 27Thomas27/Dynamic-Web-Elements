//create a function for update
score=0;
function updateScore()
{
       // you need to add 1 to the score
       score=score+1;
    document.getElementById("score").innerHTML="score" +score ;
}

function SaveScore()
{
    localStorage.setItem("score: ",score)
}
function NextPage(){
    window.location = "activity2.html";
}
