# 🧬 分子演化偵探 v5.0 (Molecular Evolution Detective)

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Gemini AI](https://img.shields.io/badge/AI-Powered%20by%20Gemini-8E44AD)

> **胺基酸序列模擬比對分析系統**：結合生物資訊學數據分析與生成式 AI 助教，帶領學生從胺基酸序列探索演化的奧秘。

---

## 📖 專案簡介 (Project Overview)

**分子演化偵探** 是一個專為高中生物課程設計的網頁應用程式。本專案將複雜的生物資訊學概念（如序列比對、親緣關係樹）轉化為直觀的互動圖表。

系統內建一位 **AI 阿凡達助教**（基於 Google Gemini 模型），能即時批改學生的推理答案，提供引導式回饋，並將學習歷程同步記錄至雲端。

### ✨ 核心功能
* **🐋 序列比對視覺化**：即時計算不同物種（鯨魚、小鼠、鮪魚等）的 Cytochrome c 胺基酸序列相似度。
* **📊 自動繪製熱圖**：利用 Plotly.js 自動生成親緣關係矩陣熱圖 (Heatmap)。
* **🤖 AI 智慧批改**：串接 **Google Gemini 1.5 Flash**，針對學生的論證提供即時、幽默且具教育意義的文字回饋。
* **☁️ 雲端學習歷程**：學生的作答與 AI 回饋會透過 Google Apps Script (GAS) 自動存入 Google Sheets 供教師追蹤。
* **🛡️ 安全架構**：採用 Netlify Functions 隱藏 API Key，防止學生端外洩。

---

## 🛠️ 技術架構 (Tech Stack)

| 類別 | 技術/工具 | 用途 |
| :--- | :--- | :--- |
| **Frontend** | HTML5, CSS3, Vanilla JS | 網頁介面與邏輯互動 |
| **Visualization** | Plotly.js | 繪製動態熱圖與數據圖表 |
| **AI Model** | Google Gemini API (1.5 Flash) | 自然語言理解與學生答案評量 |
| **Backend API** | Netlify Functions (Node.js) | Serverless 中介層 (隱藏 API Key) |
| **Database** | Google Sheets + Google Apps Script | 學習數據存儲與後端接口 |

---

## 🚀 安裝與部署 (Deployment Guide)

本專案採用 **前後端分離** 的部署策略：

### 步驟 1：Google Apps Script (後端資料庫)
1. 建立一個新的 Google Sheet。
2. 開啟 `擴充功能` > `Apps Script`。
3. 貼上 `doPost` 相關程式碼，並填入 `SHEET_ID`。
4. **部署為網頁應用程式**：
   - 執行身分：`我 (Me)`
   - 存取權限：`所有人 (Anyone)`
5. 取得 GAS 發布網址 (Web App URL)。

### 步驟 2：Netlify (前端與 AI 串接)
1. 將本專案 Fork 到您的 GitHub。
2. 在 `index.html` 中，將 `GAS_WEB_APP_URL` 修改為步驟 1 取得的網址。
3. 登入 **Netlify** 並匯入此 GitHub Repository。
4. 設定環境變數 (**Environment Variables**)：
   - Key: `GEMINI_API_KEY`
   - Value: `您的 Google Gemini API Key`
5. 部署專案。

## 📂 檔案結構說明

```text
/
├── index.html                 # 主網頁 (含前端邏輯 & Plotly 繪圖)
├── netlify/
│   └── functions/
│       └── askGemini.js       # Netlify Function (負責呼叫 Gemini API)
├── README.md                  # 專案說明檔
└── (Google Apps Script)       # 獨立運作於 Google 雲端，不在此 Repo 中


## 📝 授權 (License)
本專案採用 MIT License。 歡迎教育工作者自由修改使用於教學現場。

## 👨‍🏫 作者
Developer: [您的名字/GitHub ID]

Role: High School Biology Teacher

Contact: [您的 Email 或連結]
