//js for Assignment 1
var form = document.getElementById("form");     //here i create the variable and assing it the value of id element from the html document

form.addEventListener("submit", (e) => {           
    e.preventDefault()                               //prevents the form from autosubmitting(basically whenever we input values into the fields and submit without this mtd it will auto submit and a '?' will pop up in the url link)

    var user_nam = document.getElementById('user_name').value   //hence this will essentially extract the value and then store in the variable as i have assigned it, before it is display on the console in the next line
    var user_mail = document.getElementById('user_email').value
    var user_sub = document.getElementById('user_regarding_subject').value
    var user_msg = document.getElementById('user_message').value

    console.log(user_nam)
    console.log(user_mail)
    console.log(user_sub)
    console.log(user_msg)
})                
//important to add to stimulate what respective action to take in each respective events


//hence essentially this event listener takes action in the event that the form submits(is submitted)
//thereafter the 'event' obj gets passed whenever the form is submitted which can be then used later
//in addition to that i can also pass some methods(func) to the passed in obj, in this case 'prevent default' which essentially prevents the form from auto submitting
//last but not least i will then grab the values in which the user has passed in and then display it in the console respectively

