document.getElementById('spellForm').addEventListener('submit', async function(event) {
    event.preventDefault(); // Prevents the page from refreshing

    let word = document.getElementById("input").value.trim();

    // Ensure the input isn't empty
    if (!word) {
        document.getElementById("result").innerHTML = "<p style='color:red;'>Please enter a word.</p>";
        return;
    }

    // Send request to backend
    let response = await fetch("http://localhost:3000/check-word", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ word: word })
    });

    let result = await response.json();

    // Display the word and the confirmation message
    document.getElementById("result").innerHTML = `
        <p><strong>You entered:</strong> ${word}</p>
        <p style="color: ${result.exists ? 'green' : 'red'};">${result.message}</p>
    `;
});
