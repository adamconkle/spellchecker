document.getElementById('spellForm').addEventListener('submit', async function(event) {
    event.preventDefault();

    let word = document.getElementById("input").value;
    
    let response = await fetch("http://localhost:3000/check-word", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ word: word })
    });

    let result = await response.json();
    document.getElementById("check").innerText = result.message;
});
