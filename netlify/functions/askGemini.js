// 檔名：netlify/functions/askGemini.js

export const handler = async (event) => {
  // 1. 處理 CORS (允許您的網頁跨域呼叫)
  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Allow-Methods": "POST, OPTIONS"
  };

  // 處理預檢請求 (Preflight)
  if (event.httpMethod === "OPTIONS") {
    return { statusCode: 200, headers, body: "OK" };
  }

  // 只允許 POST
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  try {
    // 2. 從 Netlify 後台讀取環境變數 (您的 API Key 藏在這裡！)
    const API_KEY = process.env.GEMINI_API_KEY;
    
    if (!API_KEY) {
      return { statusCode: 500, headers, body: JSON.stringify({ error: "API Key 未設定" }) };
    }

    const requestBody = JSON.parse(event.body);
    const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-exp:generateContent?key=${API_KEY}`;

    // 3. 幫前端呼叫 Google Gemini
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(requestBody)
    });

    const data = await response.json();

    // 4. 將結果回傳給前端
    return {
      statusCode: 200,
      headers,
      body: JSON.stringify(data)
    };

  } catch (error) {
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ error: error.message })
    };
  }
};
