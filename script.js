const button = document.getElementById("magic-button");
const message = document.getElementById("message");

const phrases = [
  "✨ You are amazing!",
  "🚀 Code like a pro!",
  "🔥 This is just the beginning!",
  "🌈 Keep shining!",
  "🎯 You're on the right path!"
];

button.addEventListener("click", () => {
  const random = Math.floor(Math.random() * phrases.length);
  message.textContent = phrases[random];
});
