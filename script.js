document.getElementById('spellForm').addEventListener('submit', async function(event) {
    event.preventDefault(); // Prevents the page from refreshing

 let backendURL = "https://spellchecker-xuxd.onrender.com"; // Update with your Render URL

document.getElementById('spellForm').addEventListener('submit', async function(event) {
    event.preventDefault();

    let word = document.getElementById("input").value.trim();
    if (!word) {
        document.getElementById("result").innerHTML = "<p style='color:red;'>Please enter a word.</p>";
        return;
    }

    let response = await fetch(`${backendURL}/check-word`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ word: word })
    });

    let result = await response.json();
    document.getElementById("result").innerHTML = `
        <p><strong>You entered:</strong> ${word}</p>
        <p style="color: ${result.exists ? 'green' : 'red'};">${result.message}</p>
    `;
});
