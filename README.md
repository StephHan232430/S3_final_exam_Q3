# 期末考Q3

學期3 A30:老爸的私房錢 - Sequelize

## 功能列表

- 使用者可以 email 和自訂密碼註冊登入，也可藉由 facebook 快速註冊、登入
- 首頁依支出時間由新至舊列出支出項目並加總總金額
- 於首頁下方點擊綠色『 新增支出 』按鈕，彈出新增頁面
- 點擊各 record 右方黃色『 編輯 』按鈕，彈出編輯頁面，編輯完成點選『 儲存變更 』按鈕或放棄編輯點選『 取消編輯 』按鈕後，導回首頁
- 點擊各 record 右方紅色『 刪除 』按鈕，彈出警語頁面，使用者可再度確認是否刪除該項目
- 點擊 navbar 左上角『 家庭記帳本 』icon 可清除所有篩選條件返回首頁
- 可結合月份和類別篩選支出項目，並顯示篩選後之項目總金額
- 限制支出日期不得設定為未來日期

## 環境建置
1. MySQL v8.0.18
2. Node.js

## 專案安裝流程
1. 開啟 terminal，將此專案 clone 至本機

```
git clone https://github.com/StephHan232430/S3_final_exam_Q3.git
```

2. 進入專案資料夾

```
cd S3_final_exam_Q3
```

3. 安裝專案所需套件

```
npm install
```

4. 於 terminal 輸入指令匯入種子資料

```
npm run seeder
```

5. 待 terminal 出現下列訊息，表示種子資料已新增至資料庫，按下 <kbd>command</kbd> + <kbd>c</kbd> 結束執行

```
seeded!
```

6. 執行專案
```
npm run dev
```

7. 開啟網頁瀏覽器，於網址列輸入
```
http://localhost:3000
```

## 測試帳號

| Name  | Email               | Password         |
| :---: | :-----------------: | :--------------: |
| Tony  | tony@stark.com      | iamironman       |
| Steve | captain@hotmail.com | icandothisallday |

## 使用工具

- [bcryptjs v2.4.3](https://www.npmjs.com/package/bcryptjs)
- [body-parser v1.19.0](https://www.npmjs.com/package/body-parser)
- [connect-flash v0.1.1](https://www.npmjs.com/package/connect-flash)
- [dotenv v8.2.0](https://www.npmjs.com/package/dotenv)
- [express v4.17.1](https://expressjs.com/zh-tw/)
- [express-Handlebars v3.1.0](https://github.com/ericf/express-handlebars)
- [express-session v1.17.0](https://www.npmjs.com/package/express-session)
- [method-override v3.0.0](https://www.npmjs.com/package/method-override)
- [MySQL v8.0.18](https://dev.mysql.com/downloads/mysql/)
- [mysql2 v2.0.2](https://www.npmjs.com/package/mysql2)
- [Node.js v12.13.0](https://nodejs.org/en/)
- [passport v0.4.0](https://www.npmjs.com/package/passport)
- [passport-facebook v3.0.0](https://www.npmjs.com/package/passport-facebook)
- [passport-local v1.0.0](https://www.npmjs.com/package/passport-local)
- [sequelize v5.21.2](https://www.npmjs.com/package/sequelize)
- [sequelize-cli v5.5.1](https://www.npmjs.com/package/sequelize-cli)
- [Visual Studio Code v1.39.2](https://code.visualstudio.com/)