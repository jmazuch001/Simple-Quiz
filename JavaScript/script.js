function submitAnswers (){
    var total = 5;
    var score = 0;

    // Get user input
    var q1 = document.forms["quizForm"]["q1"].value;
    var q2 = document.forms["quizForm"]["q2"].value;
    var q3 = document.forms["quizForm"]["q3"].value;
    var q4 = document.forms["quizForm"]["q4"].value;
    var q5 = document.forms["quizForm"]["q5"].value;

    // Validation
    for(i = 1; i <= total; i++){
        if(eval('q'+i) == null || eval('q'+i) == ''){
            alert('You missed question '+ i);
            return false;
        }
    }

    // set correct answers
    var answers = ["b","d","b","a","b"];

    // Check answers

    // if(q1 == answers[0]){
    //     score++;
    // }
    // // Do this block for each question
    // if(q2 == answers[1]){
    //     score++;
    // }
    // if(q3 == answers[2]){
    //     score++;
    // }
    // if(q4 == answers[3]){
    //     score++;
    // }
    // if(q5 == answers[4]){
    //     score++;
    // }
// Code block: 25 - 40, make into a loop (below this line)

    for(i = 1; i <= total; i++){
        if(eval('q'+i) == answers[i - 1]){
            score++;
            // You decrement 1, so you can't start at [0], but put [i - 1], because the for loop is starting at 1 in the parameters
        }

    }

    // Display results
    var results = document.getElementById('results');
    results.innerHTML = '<h3>You scored <span>'+score+'</span> out of <span>'+total+'</span></h3>'

    alert('You scored '+score+' out of ' + total);

    return false;

    // Setting the var results = something that will fetch an element by an id, such as an h3 tag and a span will generate a 
    // span atop the page displaying the reusults of your quiz
}


/////////////////////////////////////////////////////////////
// Root Code for the for loop
// for(i = 1; i <= total; i++){
//     if(q1 == null || q1 == ''){
//         alert('You missed question 1');
//         return false;
//     }
// Used the eval function in the for loop instead for q1, q2, etc.