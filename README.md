# PracticeExpressAPI
「[サルでも分かるExpressでのjsonAPIサーバーの作り方](https://qiita.com/ngmr_mo/items/73cc7160d002a4989416)」を見ながら作成

# 使用方法
1. `express-api`ディレクトリへ移動する。
   ```
   cd PracticeExpressAPI/express-api
   ```
2. `.env`を作成する。（`.env.example`をそのままコピーしても動かせます）
   ```
   cp .env.example .env
   ```
3. DBを起動する。
   ```
   docker compose up
   ```
4. 別ターミナルを開いて、APIサーバを起動する。
   ```
   yarn dev
   ```
5. `Postman`を使用して、APIを実行する。

   ![image](https://user-images.githubusercontent.com/62467180/184149622-784be0c6-bff2-4113-a213-51233b0f06d0.png)

   | API | エンドポイント（`{:id}`についてはGETで調べて設定する） |
   | -- | -- |
   | `GET user` | `localhost:3000/api/v1/user` |
   | `GET user/:id` | `localhost:3000/api/v1/user/{:id}` |
   | `POST user` | `localhost:3000/api/v1/user` |
   | `PUT user/:id` | `localhost:3000/api/v1/user/{:id}` |
   | `GET article` | `localhost:3000/api/v1/article` |
   | `GET article/:id` | `localhost:3000/api/v1/article/{:id}` |
   | `POST article` | `localhost:3000/api/v1/article` |
   | `DELETE article/:id` | `localhost:3000/api/v1/article/{:id}` |
