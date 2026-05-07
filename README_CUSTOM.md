# Planar Table Custom Website v2

這是一版重新客製化的 Planar Table 靜態官網，可直接部署到 GitHub Pages、Netlify、Vercel Static 或任何靜態主機。

## 已改動重點

- 重做首頁、產品、市場、團隊、藍圖五頁內容結構。
- 導覽列補齊五頁，解決原本 market / roadmap 頁面存在但主導覽沒有入口的問題。
- 重新設計品牌語彙：第 N 維度、異界桌、裂隙星圖、骰面金、預言青、島嶼玉。
- 全部示意圖改為本地自製 SVG，不依賴外部圖庫或通用遊戲海報。
- 加入 reveal 動畫、數字計數、客群 tabs、桌面卡片微視差。
- 保留純 HTML/CSS/JS 架構，方便之後接 Demo、候補名單或 Next.js 遊戲本體。

## 檔案

- `index.html`：首頁
- `product.html`：產品特色與介面
- `market.html`：市場與商業模式
- `team.html`：團隊介紹
- `roadmap.html`：發展藍圖與 GTM
- `assets/css/base.css`：主要品牌樣式
- `assets/css/pages.css`：各頁專用樣式
- `assets/js/main.js`：導覽、動畫、計數器、微視差
- `assets/js/market.js`：市場頁客群 tabs
- `assets/images/*.svg`：自製品牌插圖與 UI mockups

## 使用方式

直接開啟 `index.html` 即可預覽；部署時上傳整個資料夾。
