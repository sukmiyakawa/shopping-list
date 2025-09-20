<script setup>
import { useThingList } from "../composables/useThingList.js";

const {
  itemRef,
  quantityRef,
  editRef,
  thingListRef,
  addList,
  showList,
  editList,
  deleteList,
  changeCheck,
  resetList,
} = useThingList();
</script>

<template>
  <main>
    <div class="box_input">
      <div class="enterItem">
        <p>買うものは？</p>
        <input
          type="text"
          class="item_input"
          placeholder="(例：トマト)"
          v-model="itemRef"
        />
      </div>
      <div class="enterItem">
        <p>個数は？</p>
        <input
          type="text"
          class="quantity_input"
          placeholder="(例：1)"
          v-model="quantityRef"
        />
      </div>
      <button class="addBtn" @click="editList" v-if="editRef">変更</button>
      <button class="addBtn" @click="addList" v-else>追加</button>
    </div>

    <div class="box_display">
      <ul class="box_list">
        <li class="box_item" v-for="thing in thingListRef" :key="thing.id">
          <div class="item" :class="{ fin: thing.checked }">
            <p class="item_name">{{ thing.task_item }}</p>
            <p class="item_quantity">&times;&ensp;{{ thing.task_quantity }}</p>
          </div>
          <div class="btn">
            <button
              class="listBtn listBtn--finBtn"
              @click="changeCheck(thing.id)"
              :checked="thing.checked"
            >
              完了
            </button>
            <button
              class="listBtn listBtn--showBtn"
              @click="showList(thing.id)"
            >
              編集
            </button>
            <button
              class="listBtn listBtn--delBtn"
              @click="deleteList(thing.id)"
            >
              削除
            </button>
          </div>
        </li>
      </ul>
      <button class="listBtn listBtn--resetBtn" @click="resetList()">
        リセット
      </button>
    </div>
  </main>
</template>

<style scoped>
main {
  margin-top: 50px;
  padding: 5px;
}
.box_input {
  display: flex;
  justify-content: space-between;
  align-items: end;
  margin-bottom: 30px;
}
input,
button {
  border-radius: 5px;
  padding: 5px;
}
.enterItem p,
.item p {
  font-size: 1.4rem;
  font-weight: 400;
}
.enterItem p {
  margin: 0 0 5px 5px;
}
input {
  background-color: #fff;
}
.quantity_input {
  width: 60px;
}
.addBtn {
  width: 50px;
  text-align: center;
  background-color: #87ceeb;
}
.box_item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  gap: 10px;
}
.box_list {
  display: flex;
  flex-direction: column;
  gap: 15px;
}
ul li div {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.item {
  width: 100%;
}
.item_name {
  width: 70%;
}
.item_quantity {
  width: 60px;
}
.btn {
  gap: 10px;
}
.listBtn {
  width: 30px;
  text-align: center;
}
.listBtn--finBtn {
  background-color: #ffd700;
  width: 50px;
}
.listBtn--showBtn {
  background-color: #7fffd4;
}
.listBtn--delBtn {
  background-color: #ab3030;
  color: #fff;
}
.listBtn--resetBtn {
  background-color: #ab3030;
  color: #fff;
  width: 50px;
  display: block;
  margin: 15px auto 0;
}
.fin {
  text-decoration-line: line-through;
  background-color: #808080;
}
@media screen and (min-width: 768px) {
  main {
    padding: 20px;
  }
  .box_item {
    width: 320px;
  }
  .box_list {
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
  }
  .box_item:nth-of-type(even) {
    border-left: 2px solid #808080;
    padding-left: 10px;
  }
  .item_input {
    width: 500px;
  }
  @media screen and (min-width: 1440px) {
    .box_item {
      width: 470px;
    }
    .box_item:nth-of-type(even) {
      border-left: 2px solid #808080;
      padding-left: 10px;
    }
    .item_input {
      width: 800px;
    }
  }
}
</style>
