const TELEGRAM_TOKEN = "8939570857:AAEgOw_G8LAPAZAIIbi4NueilJnbJkyUOd4";
const OWNER_CHAT_ID = "1577576513";

export default async function handler(req, res) {
  if (req.method === "GET") {
    return res.status(200).send("Marshalom Bot is running! 🤖");
  }
  
  try {
    const update = req.body;
    if (!update || !update.message) return res.status(200).send("OK");
    
    const { message } = update;
    const chatId = message.chat.id;
    
    if (message.text === "/start") {
      await fetch(`https://api.telegram.org/bot${TELEGRAM_TOKEN}/sendMessage`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ 
          chat_id: chatId, 
          text: "✨ እንኳን ደህና መጡ! ✨\n📢 ቻናላችንን ይቀላቀሉ: https://t.me/cctvcamera2018"
        })
      });
      return res.status(200).send("OK");
    }
    
    return res.status(200).send("OK");
  } catch(err) {
    return res.status(200).send("OK");
  }
}