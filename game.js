let relationshipPoint = 0;
let npcMood = "normal";
let npcTyping = false;
let devMode = false;

// Pesan awal
window.onload = () => {
  npcMessage("Halo, aku NPC pacarmu ❤️");
};

// Kirim pesan pemain
function sendMessage() {
  let input = document.getElementById("playerInput");
  let text = input.value.trim();
  if (text === "") return;

  addMessage("player", text);
  input.value = "";

  setTimeout(() => npcReply(text), 1000);
}

// Tambah pesan ke chat
function addMessage(sender, text) {
  let chat = document.getElementById("chatWindow");
  let msg = document.createElement("div");
  msg.classList.add("msg", sender);
  msg.innerText = text;
  chat.appendChild(msg);
  chat.scrollTop = chat.scrollHeight;
}

// NPC kirim pesan
function npcMessage(text) {
  addMessage("npc", text);
}

// AI sederhana untuk balasan NPC
function npcReply(playerText) {
  let reply = "";

  if (npcMood === "angry") {
    reply = "Aku lagi kesel sama kamu 😠";
  } else if (npcMood === "happy") {
    reply = "Hehe aku seneng banget sama kamu 😊";
  } else {
    if (playerText.toLowerCase().includes("hai")) reply = "Hai juga sayang 💕";
    else if (playerText.toLowerCase().includes("kangen")) {
      reply = "Aku juga kangen banget 😭";
      relationshipPoint += 5;
    }
    else if (playerText.toLowerCase().includes("maaf")) {
      reply = "Aku maafin deh, jangan diulang ya 😌";
      npcMood = "happy";
    }
    else reply = "Hmm... menarik juga yang kamu bilang~";
  }

  npcMessage(reply);
}

// 🔑 Developer Mode
function checkDev() {
  let pass = document.getElementById("devPass").value;
  if (pass === "DRAKS@1122") {
    devMode = true;
    document.getElementById("devTools").style.display = "block";
    document.getElementById("devLog").innerText = "[Developer Mode AKTIF]";
    alert("Developer Mode Unlocked!");
  } else {
    alert("Password salah!");
  }
}

// Fungsi Dev Mode
function addRP() {
  if (!devMode) return;
  relationshipPoint += 100;
  document.getElementById("devLog").innerText = "[RP: " + relationshipPoint + "]";
}

function unlockAll() {
  if (!devMode) return;
  document.getElementById("devLog").innerText = "[Semua ending terbuka!]";
}

function skipEvent() {
  if (!devMode) return;
  document.getElementById("devLog").innerText = "[Event dilewati!]";
}

function npcHappy() {
  if (!devMode) return;
  npcMood = "happy";
  document.getElementById("devLog").innerText = "[NPC mood: happy]";
}
