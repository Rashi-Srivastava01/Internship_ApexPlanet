const quotes = [
  "Believe in yourself! You are capable of amazing things ✨",
  "Push yourself, because no one else is going to do it for you 💪",
  "Success doesn’t come from what you do occasionally, it comes from what you do consistently.",
  "Don’t stop when you are tired. Stop when you are done.",
  "Difficulties in life don’t come to destroy you, but to help you realize your hidden potential.",
  "Dream it. Wish it. Do it. 🚀",
  "Stay positive, work hard, make it happen."
];

function showQuote() {
  const randomQuote = Math.floor(Math.random() * quotes.length);
  alert(quotes[randomQuote]);
}


