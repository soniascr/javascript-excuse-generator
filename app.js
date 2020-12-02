var who = ['My dog', 'My grandma', 'Her friend', 'My brother', 'My cat', 'My son', 'His turtle', 'Her horse'];
var action = ['ate', 'broke', 'burned', 'crushed', 'kicked', 'threw', 'yelled', 'stole'];
var what = ['my homework', 'my umbrella', 'the keys', 'my bike', 'my car', 'my computer', 'the phone', 'my sandwich'];
var when = ['today', 'this morning', 'before class', 'yesterday', 'five minutes ago', 'last week', 'yesterday evening', 'earlier today'];

function randomExcuse(who,action,what,when)
{

return  who[Math.floor(Math.random()*who.length)] + " " +
        action[Math.floor(Math.random()*action.length)]+ " " +
        what[Math.floor(Math.random()*what.length)]+ " " +
        when[Math.floor(Math.random()*when.length)]+".";
  
}



console.log(randomExcuse(who,action,what,when));
