import dotenv from "dotenv";
import { Client } from "discord.js";
import { GoogleGenAI } from "@google/genai";

dotenv.config();

const client = new Client({
  intents: [["Guilds", "GuildMembers", "GuildMessages", "MessageContent"]],
});

const genAI = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

client.on("ready", () => {
  console.log("Test Backned is online.");
});

const CHANNELS = ["1406347970902888640"];

client.on("messageCreate", async (message) => {
  if (message.author.bot) return;

  if (
    CHANNELS.includes(message.channel.id) ||
    message.mentions.has(client.user)
  ) {
    try {
      await message.channel.sendTyping();

      const userMessage = message.content.replace(/<@!?\d+>/, "").trim();

      const sendTypingInterval = setInterval(() => {
        message.channel.sendTyping();
      }, 5000);

      let prevMessages = await message.channel.messages.fetch({ limit: 10 });
      prevMessages.reverse();

      const history = prevMessages
        .map((msg) => {
          if (msg.author.bot && msg.author.id !== client.user.id) return null;
          return {
            role: msg.author.id === client.user.id ? "model" : "user",
            parts: [{ text: msg.content }],
          };
        })
        .filter((msg) => msg !== null);

      const contents = [
        ...history,
        { role: "user", parts: [{ text: userMessage }] },
      ];

      const result = await genAI.models.generateContent({
        model: "gemini-2.5-flash",
        contents: contents,
        systemInstruction:
          "You are Clippy, An Intelligence Assisstant, Always response in Thai.",
      });
      clearInterval(sendTypingInterval); //Stop Time interval when finish the process

      const responseMessage = result.candidates[0].content.parts[0].text;
      const chunkSizeLimit = 2000;

      for (let i = 0; i < responseMessage.length; i += chunkSizeLimit) {
        const chunk = responseMessage.substring(i, i + chunkSizeLimit);
        await message.reply(chunk);
      }
    } catch (err) {
      console.error("Gemini API Error:", err);
      message.reply(
        "Sorry, I'm having trouble connecting to the AI service. Please check the console for more details."
      );
    }
  }
});

client.login(process.env.TOKEN);

