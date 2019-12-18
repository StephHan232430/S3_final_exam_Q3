# 期末考Q3

學期3 A30:老爸的私房錢 - Sequelize

## 功能列表

- 使用者可以email和自訂密碼註冊登入，也可藉由facebook快速註冊、登入
- 首頁依支出時間由新至舊列出支出項目並加總總金額
- 於首頁下方點擊綠色『 新增支出 』按鈕，彈出新增頁面
- 點擊各record右方 <div class="d-inline bg-warning p-1 rounded"><i class="far fa-edit"></i></div> 按鈕，彈出編輯頁面，編輯完成點選『儲存變更』按鈕或放棄編輯點選『取消編輯』按鈕後，導回首頁
- 點擊各record右方 <div class="d-inline text-white bg-danger py-1 px-2 rounded"><i class="fas fa-trash-alt"></i></div> 按鈕，彈出警語頁面，使用者可再度確認是否刪除該項目
- 點擊navbar左上角 <div class="d-inline text-white bg-dark py-1 px-2 rounded"><i class="fas fa-money-check-alt"></i> 家庭記帳本</div> 可清除所有篩選條件返回首頁
- 可結合月份和類別篩選支出項目，並顯示篩選後之項目總金額
- 限制支出日期不得為未來日期

## 環境建置
1. MySQL v8.0.18
2. Node.js

## 專案安裝流程
1. 開啟terminal，將此專案clone至本機

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

4. 於terminal輸入指令匯入種子資料

```
npm run seeder
```

5. 待terminal出現下列訊息，表示種子資料已新增至資料庫，按下 <kbd>command</kbd> + <kbd>c</kbd> 結束執行

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

<head> 
    <script defer src="https://use.fontawesome.com/releases/v5.0.13/js/all.js"></script> 
    <script defer src="https://use.fontawesome.com/releases/v5.0.13/js/v4-shims.js"></script> 
</head> 
<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.3/css/all.css">

<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
<script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>