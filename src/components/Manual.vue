<script setup></script>

<template>
  <div class="manual">
    <h2>Manual</h2>
    <div class="manual_wrapper">
      <h3>リスト登録</h3>
      <div class="manual_contents">
        <video
          src="../assets/movie/resistration.mp4"
          controls
          autoplay
          muted
        ></video>
        <ul>
          <li>入力欄に品名・個数を入力します</li>
          <li>追加ボタンを押下しリストを登録します</li>
        </ul>
      </div>
    </div>
    <div class="manual_wrapper">
      <h3>タスク完了登録</h3>
      <div class="manual_contents">
        <video src="../assets/movie/finish.mp4" controls autoplay muted></video>
        <ul>
          <li>タスクが完了した場合、完了ボタンを押下します</li>
          <li>リストがグレーアウトします</li>
        </ul>
      </div>
    </div>
    <div class="manual_wrapper">
      <h3>タスク編集登録</h3>
      <div class="manual_contents">
        <video src="../assets/movie/edit.mp4" controls autoplay muted></video>
        <ul>
          <li>タスクを編集したい場合、編集ボタンを押下します</li>
          <li>リストが入力欄に反映されます</li>
          <li>入力欄を編集します</li>
          <li>リストが更新されます</li>
        </ul>
      </div>
    </div>
    <div class="manual_wrapper">
      <h3>タスク削除・リセット</h3>
      <div class="manual_contents">
        <video src="../assets/movie/delete.mp4" controls autoplay muted></video>
        <ul>
          <li>
            タスクを削除したい場合は削除ボタンを、リセットしたい場合はリセットボタンを押下します
          </li>
          <li>リストが削除・リセットされます</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped>
.manual {
  margin: 150px 0 30px;
  padding: 50px;
  display: flex;
  flex-direction: column;
  gap: 30px;
}
.manual_wrapper,
.manual_contents {
  display: flex;
  flex-direction: column;
  gap: 15px;
}
.manual_wrapper {
  gap: 30px;
}
h2 {
  font-family: "Pacifico";
  font-size: 3.2rem;
  font-weight: 700;
  color: brown;
  text-align: center;
}
h3 {
  font-family: "Noto Sans Jp";
  font-size: 2rem;
  font-weight: 400;
  text-align: center;
}
.manual_contents ul {
  width: 250px;
  margin: 0 auto;
  font-family: "Noto Sans Jp";
  font-size: 1.6rem;
  font-weight: 400;
  list-style: lower-roman;
}
@media screen and (min-width: 768px) {
  .manual_contents ul {
    width: 370px;
  }
}
</style>
