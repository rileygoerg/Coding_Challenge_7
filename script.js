// U14123683
document.getElementById("feedbackForm").addEventListener("submit",(event)=>{
    event.preventDefault(); // Prevents auto reload

    const first = document.getElementById("firstName").value; // taking input value for first name
    const last = document.getElementById("lastName").value;   // last name 
    const rating = document.getElementById("ratingInput").value; // rating 
    const notes = document.getElementById("feedbackInput").value; // feedback

    if (first.trim == "" || last.trim == "" || rating == "" || notes == "") { // if any inputs are blank,
        alert("Please fill out every field.") // an alert will pop up
    } else { // if all inputs are filled out,
        alert("Feedback submitted.") 
        document.getElementById("displayFeedback").innerHTML = // all inputs will be displayed in the div tag
        `<h2>Feedback Received</h2>
        <p><strong>Name: </strong>${first} ${last}</p>
        <p><strong>Rating: </strong> ${rating}/5</p>
        <p><strong>Comments: </strong> ${notes}</p>`
    };
})