document.getElementById("feedbackForm").addEventListener("submit",(event)=>{
    event.preventDefault();

    const first = document.getElementById("firstName").value;
    const last = document.getElementById("lastName").value;
    const rating = document.getElementById("ratingInput").value;
    const notes = document.getElementById("feedbackInput").value;

    if (first.trim == "" || last.trim == "" || rating == "" || notes == "") {
        alert("Please fill out every field.")
    } else {
        alert("Feedback submitted.")
        document.getElementById("displayFeedback").innerHTML = `
        <h2>Feedback Received</h2>
        <p><strong>Name: </strong>${first} ${last}</p>
        <p><strong>Rating: </strong> ${rating}</p>
        <p><strong>Comments: </strong> ${notes}</p>`
    };
})