function predictSpam() {
    const userText = document.getElementById("message").value.trim();
    if (userText === "") return;

    fetch("/predict", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: userText })
    })
    .then(res => res.json())
    .then(data => {
        const isSpam = data.prediction === 1;
        const prob = (data.probability * 100).toFixed(2);

        document.getElementById("result-label").innerText =
            isSpam ? "SPAM DETECTED" : "NOT SPAM";

        document.getElementById("preview-text").innerText = userText;
        document.getElementById("confidence-value").innerText = prob + "%";

        const bar = document.getElementById("confidence-bar");
        bar.style.width = prob + "%";

        const card = document.getElementById("result-card");
        card.classList.remove("hidden");
        bar.classList.remove("ham");
        if (!isSpam) bar.classList.add("ham");
        showResult();
    });
}
function showResult() {
  document.getElementById("result-card").classList.remove("hidden");
}

function hideResult() {
  document.getElementById("result-card").classList.add("hidden");
}
function switchTab(index) {
    const buttons = document.querySelectorAll(".tab-button");
    const contents = document.querySelectorAll(".tab-content");
    buttons.forEach((btn) => btn.classList.remove("active"));
    contents.forEach((content) => content.classList.remove("active"));
    buttons[index].classList.add("active");
    contents[index].classList.add("active");
      }

function insertExample(text) {
    document.getElementById("message").value = text;
    hideResult();
}
function clearText() {
    document.getElementById("message").value = "";
    hideResult();
}