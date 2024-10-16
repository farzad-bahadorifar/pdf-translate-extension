chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    const { text } = request;
    if (text) {
        translateText(text);
    }
});

function translateText(text) {
    const url = `https://translation.googleapis.com/language/translate/v2?key=YOUR_API_KEY&q=${encodeURIComponent(text)}&target=fa`;
    fetch(url)
        .then(response => response.json())
        .then(data => {
            const translatedText = data.data.translations[0].translatedText;
            document.getElementById('translation').innerText = translatedText;
        })
        .catch(err => console.error(err));
}
