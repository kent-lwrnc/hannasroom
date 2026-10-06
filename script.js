const letter = document.getElementById("letter");
const messageBox = document.getElementById("messageBox");
const messageText = document.getElementById("messageText");
const closeBtn = document.getElementById("closeBtn");

const birthdayMessage =
  "Happy happy happy birthdayyy Hann!!! I hope you'll enjoy your day today and every other days that will come to you. May all of your wishes—both big and small—come true, and may they make you the happiest girl in the world. May you have the biggest sigh of relief after all your hard work pays off, and may you enjoy your well earned rest afterwards with no worries of tomorrow. You deserve the world Han, you've already given too much of yourself and I hope on this very special day, it will finally be your turn to receive all that life has to offer. Keep on dreaming big, never lose your passion, and never give up. If you are tired, always remember that you are loved by many, we love you just for being who you are, and you can always find rest on us. I hope this little surprise of mine made you smile and took away some tiredness from your body, mind, and soul.\nI know you miss your home while you're away for college, so I made this little virtual room for you! You can visit this anytime you miss home.\nClick the sleeping cats when you are tired\nClick the sitting cats when you need comfort\nClick the standing cats when you want to hear happy little messages\n\nHappy birthday again Han, I hope you'll have a wonderful day today <3";

letter.addEventListener("click", () => {
  messageText.textContent = birthdayMessage;
  messageBox.classList.remove("hidden");
});

closeBtn.addEventListener("click", () => {
  messageBox.classList.add("hidden");
});

const catMessages = {
  cat1: "You are the most interesting person I have ever met. I feel sorry for those who will never get to know even a fraction of your true identity. Keep being you and I will keep learning you.",
  cat3: "You always make me soo proud. If you don't believe in yourself, I will believe in you. So go, do things that you want to, I will support you wholeheartedly.",
  cat4: '\"MeOow meeOW mEoW. meoww MEeoow meoOW meEEooOw Meow\".\nI think he said "I love you. Keep wearing your beautiful smile". \nI don\'t speak cat but that\'s what I would say to you.',

  cat5: "I know you're far from home, but I am always on you side. I'm always just waiting for you with open arms, ready to comfort and support you when you feel down. I love you <3",
  cat9: "You can always visit this room when you have nowhere to go in the real world. I will always accept you and be there for you when you need me. You don't have to face things alone with me.",

  cat7: "Shh...rest a little would you. You've done enough for today. You don't have to worry about anything else. Just calm down and relax for a while. Do what makes you happy. You deserve it.",
  cat8: "It's okay to slow down. Even cats know rest isn't lazy, it's necessary. Don't think of it as a waste of time. You need to take care of yourself too. So take a break and recharge. You deserve it.",
};

document.querySelectorAll(".cat").forEach((cat) => {
  cat.addEventListener("click", () => {
    messageText.textContent = catMessages[cat.id];
    messageBox.classList.remove("hidden");
  });
});
