const TELEGRAM_TOKEN = "16:52:01.749 Running build in Washington, D.C., USA (East) – iad1
16:52:01.750 Build machine configuration: 4 cores, 8 GB
16:52:01.858 Cloning github.com/marandshalom/marshalom (Branch: main, Commit: af2d306)
16:52:01.859 Previous build caches not available.
16:52:02.015 Cloning completed: 157.000ms
16:52:02.368 Running "vercel build"
16:52:02.380 Vercel CLI 55.0.0
16:52:02.633 Error: Function Runtimes must have a valid version, for example `now-php@1.0.0`.";
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
