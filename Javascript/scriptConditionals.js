function ageCheck() {
    var userAlcAge = document.getElementById('textBox1').value;
    if (userAlcAge >= 18)
    {
        document.getElementById('answerAlcohol').innerText = "You can buy anything you like, but don't go too hard on the alcohol. You can always get some water.";
    }
    else
    {
        document.getElementById('answerAlcohol').innerText = "Hmm, it seems you can't buy any alcoholic, but there is always some soft drinks and water!"
    }
}
function lifeCheck() {
    let userLifeAge = document.getElementById('textBox2').value;
    switch (userLifeAge)
    {
        case '0':
            document.getElementById('answerLife').innerHTML = "Bro was just born";
            break;
        case '1':
            document.getElementById('answerLife').innerHTML = "Bro is learning how to walk";
            break;
        case '1' <= userLifeAge <= '3':
            document.getElementById('answerLife').innerHTML = "Bro is learning the alphabet";
            break;
        case '4':
            document.getElementById('answerLife').innerHTML = "Bro started kinder";
            break;
        case 5 <= userLifeAge <= 12:
            document.getElementById('answerLife').innerHTML = "Bro is in school";
            break;
        case '13' <= userLifeAge <= '18':
            document.getElementById('answerLife').innerHTML = "Bro is in highschool";
            break;
    }
}