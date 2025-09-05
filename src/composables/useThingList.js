import { ref } from "vue";

export function useThingList() {
  const itemRef = ref("");
  const quantityRef = ref("");
  const editRef = ref(false);
  const thingListRef = ref([]);
  let editId = -1;

  // LocalStorage 初期化
  const ls = localStorage.thingList;
  thingListRef.value = ls ? JSON.parse(ls) : [];

  const addList = () => {
    const id = new Date().getTime();
    thingListRef.value.push({
      id,
      task_item: itemRef.value,
      task_quantity: quantityRef.value,
      checked: false,
    });
    save();
    resetForm();
  };

  const showList = (id) => {
    const thing = thingListRef.value.find((t) => t.id === id);
    itemRef.value = thing.task_item;
    quantityRef.value = thing.task_quantity;
    editRef.value = true;
    editId = id;
  };

  const editList = () => {
    const thing = thingListRef.value.find((t) => t.id === editId);
    const idx = thingListRef.value.findIndex((t) => t.id === editId);
    thing.task_item = itemRef.value;
    thing.task_quantity = quantityRef.value;
    thingListRef.value.splice(idx, 1, thing);
    save();
    editId = -1;
    editRef.value = false;
    resetForm();
  };

  const deleteList = (id) => {
    const idx = thingListRef.value.findIndex((t) => t.id === id);
    thingListRef.value.splice(idx, 1);
    save();
  };

  const changeCheck = (id) => {
    const idx = thingListRef.value.findIndex((t) => t.id === id);
    thingListRef.value[idx].checked = !thingListRef.value[idx].checked;
    save();
  };

  const resetList = () => {
    thingListRef.value = [];
    save();
  };

  const save = () => {
    localStorage.thingList = JSON.stringify(thingListRef.value);
  };

  const resetForm = () => {
    itemRef.value = "";
    quantityRef.value = "";
  };

  return {
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
  };
}
