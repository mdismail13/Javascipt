/***

if you get more then 80 then inside your friend score. 
    If your friend get more than 80. then go for a lunch. 
    if your friend get below 80 but greater than or equal 60 then tell your friend, good luck next time. 
    if your friend get less than 60 but more than or equal to 40 then, keep your friend's message unseen.
    if your friend get less than 40, block your friend
if you get less than 80 go to home and sleep and act sad

Note: 
use nested if-else-if-else
*/

const myMark = 85;
const friendMark = 103;
let str;

if (myMark >= 80) {
    if(friendMark >= 80 && friendMark <= 100) {
        str = "Invite your friend for a lunch";
    }
    else if (friendMark >= 60 && friendMark < 80) {
        str = "Better luck next time";
    }
    else if (friendMark >= 40 && friendMark < 60){
        str = "Keep your friend messages unseen"
    }
    else if(friendMark >= 0 && friendMark < 40){
        str = "Block your friend"
    }
    else {
        str = "Tell your friend, this is not an invalid number!"
    }
} else {
    str = "Go home, sleep and act sad"
}

console.log(str);

str = myMark >= 80 ? friendMark >= 80 && friendMark <= 100 ? "Invite your friend for a lunch": friendMark >= 60 && friendMark < 80 ? "Better luck next time" : friendMark >= 40 && friendMark < 60 ? "Keep your friend messages unseen" : friendMark >= 0 && friendMark < 40 ? "Block your friend" : "Tell your friend, this is not an invalid number!" : "Go home, sleep and act sad";

console.log(str);