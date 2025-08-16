# Node.js Tutorial - Clippy Discord Bot

บอท Discord อัจฉริยะที่ขับเคลื่อนโดย Gemini API สามารถตอบโต้และสนทนากับผู้ใช้ในเซิร์ฟเวอร์ของคุณได้อย่างเป็นธรรมชาติ

## ✨ คุณสมบัติ

- **การตอบโต้ด้วย AI:** ใช้พลังของ Google's Gemini API เพื่อสร้างคำตอบที่ชาญฉลาดและตรงประเด็น
- **การสนทนาต่อเนื่อง:** บอทสามารถจดจำข้อความก่อนหน้าได้ 10 ข้อความเพื่อการสนทนาที่ลื่นไหล
- **ทำงานในช่องที่กำหนด:** สามารถกำหนดให้บอททำงานเฉพาะในช่องที่ระบุไว้ได้
- **ตอบกลับเมื่อถูกกล่าวถึง:** บอทจะตอบกลับเมื่อมีการกล่าวถึง (mention) โดยตรง

## 🚀 การติดตั้งและใช้งาน

### ข้อกำหนดเบื้องต้น

- [Node.js](https://nodejs.org/) (เวอร์ชัน 16.x หรือสูงกว่า)
- บัญชี [Discord](https://discord.com/) และสร้างแอปพลิเคชันบอท
- [Google AI Studio](https://aistudio.google.com/) API Key

### ขั้นตอนการติดตั้ง

1.  **Clone a Repository:**

    ```bash
    git clone https://github.com/your-username/nodejs-tutorial.git
    cd nodejs-tutorial
    ```

2.  **ติดตั้ง Dependencies:**

    ```bash
    npm install
    ```

3.  **ตั้งค่า Environment Variables:**
    สร้างไฟล์ `.env` ในไดเรกทอรีหลักของโปรเจคและเพิ่มข้อมูลต่อไปนี้:

    ```env
    TOKEN=YOUR_DISCORD_BOT_TOKEN
    GEMINI_API_KEY=YOUR_GEMINI_API_KEY
    ```

    - `TOKEN`: คือ Token ของ Discord Bot ของคุณ
    - `GEMINI_API_KEY`: คือ API Key จาก Google AI Studio

4.  **กำหนดช่องที่ต้องการให้บอททำงาน:**
    ในไฟล์ [`index.js`](index.js:18) แก้ไข `CHANNELS` array เพื่อใส่ ID ของช่องที่คุณต้องการให้บอททำงาน

    ```javascript
    const CHANNELS = ["YOUR_CHANNEL_ID_1", "YOUR_CHANNEL_ID_2"];
    ```

5.  **รันบอท:**

    ```bash
    node index.js
    ```

    เมื่อรันสำเร็จ คุณจะเห็นข้อความ "Clippy is online." ใน console และบอทของคุณจะพร้อมใช้งานบน Discord

## 🛠️ เทคโนโลยีที่ใช้

- [Node.js](https://nodejs.org/) - JavaScript runtime environment
- [discord.js](https://discord.js.org/) - ไลบรารีสำหรับโต้ตอบกับ Discord API
- [@google/genai](https://www.npmjs.com/package/@google/genai) - ไลบรารีสำหรับเชื่อมต่อกับ Google Gemini API
- [dotenv](https://www.npmjs.com/package/dotenv) - สำหรับจัดการ environment variables

## 📄 License

โปรเจคนี้ไม่มี License