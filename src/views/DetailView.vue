<script setup lang="ts">
import { ref, reactive, onMounted, computed } from 'vue'
import { db } from '@/firebase'
import { doc, updateDoc, collection, getDocs, addDoc, deleteDoc } from 'firebase/firestore'
import { formatDate } from '@/utils/formatDate'

// 日付を受け取る
const props = defineProps<{ date: string }>()
const entryDate = props.date // 受け取った日付を entryDate として扱う

// 献立のデータ型を宣言するインターフェイス
interface Menu {
  id?: string
  name: string
  ingredients: Ingredient[]
}
// 材料のデータ型を宣言するインターフェイス
interface Ingredient {
  id?: string
  name: string
  completed: boolean
}

// データ状態管理
const menus = ref<Menu[]>([])
const isModalOpen = ref(false)
const isEditing = ref(false)
const currentMenu = reactive<Menu>({
  id: '',
  name: '',
  ingredients: [],
})

const removedIngredients = ref<Ingredient[]>([]) // 削除された材料を追跡

// Firebaseからデータを取得
const fetchMenusForDate = async () => {
  const menusRef = collection(db, `dates/${entryDate}/menus`)
  const querySnapshot = await getDocs(menusRef)
  menus.value = querySnapshot.docs.map((doc) => ({
    id: doc.id,
    name: doc.data().name || '', // データからnameを取得。ない場合は空文字を代入
    ingredients: [],
  })) as Menu[]

  // 各献立の材料を取得
  for (const menu of menus.value) {
    const ingredientsRef = collection(db, `dates/${entryDate}/menus/${menu.id}/ingredients`)
    const ingredientSnapshot = await getDocs(ingredientsRef)
    menu.ingredients = ingredientSnapshot.docs.map((ingredientDoc) => ({
      id: ingredientDoc.id,
      ...(ingredientDoc.data() as Ingredient),
    })) as Ingredient[]
  }
}

// モーダルを開く
const openModal = (menu?: Menu) => {
  if (menu) {
    isEditing.value = true
    currentMenu.id = menu.id
    currentMenu.name = menu.name
    currentMenu.ingredients = JSON.parse(JSON.stringify(menu.ingredients)) // 深いコピー
  } else {
    isEditing.value = false
    currentMenu.id = ''
    currentMenu.name = ''
    currentMenu.ingredients = []
  }
  isModalOpen.value = true
}

// 献立をFirebaseから削除
const deleteMenu = async (menuId: string) => {
  const menuDoc = doc(db, `dates/${entryDate}/menus/${menuId}`)
  await deleteDoc(menuDoc)
  fetchMenusForDate() // 削除後にデータを再取得
}

// モーダルを閉じる
const closeModal = () => {
  isModalOpen.value = false
}

// 献立をFirebaseに追加または編集
const saveMenu = async () => {
  if (isEditing.value && currentMenu.id) {
    // 編集モード
    const menuDoc = doc(db, `dates/${entryDate}/menus/${currentMenu.id}`)
    await updateDoc(menuDoc, { name: currentMenu.name })

    // 材料を更新
    for (const ingredient of currentMenu.ingredients) {
      if (!ingredient.name) continue // 材料名が空ならスキップ

      const ingredientDoc = ingredient.id
        ? doc(db, `dates/${entryDate}/menus/${currentMenu.id}/ingredients/${ingredient.id}`)
        : await addDoc(
            collection(db, `dates/${entryDate}/menus/${currentMenu.id}/ingredients`),
            ingredient,
          )
      if (!ingredient.id) {
        ingredient.id = ingredientDoc.id
      } else {
        await updateDoc(ingredientDoc, { name: ingredient.name, completed: ingredient.completed })
      }
    }

    // 削除対象の材料を削除
    for (const ingredient of removedIngredients.value) {
      if (ingredient.id) {
        const ingredientDoc = doc(
          db,
          `dates/${entryDate}/menus/${currentMenu.id}/ingredients/${ingredient.id}`,
        )
        await deleteDoc(ingredientDoc)
      }
    }
  } else {
    // 新規追加モード
    const newMenuDoc = await addDoc(collection(db, `dates/${entryDate}/menus`), {
      name: currentMenu.name,
    })
    currentMenu.id = newMenuDoc.id

    // 材料を追加
    for (const ingredient of currentMenu.ingredients) {
      if (!ingredient.name) continue // 材料名が空なら追加しない
      const ingredientDoc = await addDoc(
        collection(db, `dates/${entryDate}/menus/${currentMenu.id}/ingredients`),
        ingredient,
      )
      ingredient.id = ingredientDoc.id
    }
  }
  fetchMenusForDate() // データを再取得
  closeModal()
}

// 材料のチェック状態を切り替え
const toggleIngredientCompleted = async (
  menuId: string,
  ingredientId: string,
  checked: boolean,
) => {
  const ingredientDoc = doc(db, `dates/${entryDate}/menus/${menuId}/ingredients/${ingredientId}`)
  await updateDoc(ingredientDoc, { completed: checked })
}

// チェックボックスの変更イベントを処理
const handleCheckboxChange = (menuId: string, ingredientId: string, event: Event) => {
  const target = event.target as HTMLInputElement
  if (target && target.checked !== undefined) {
    toggleIngredientCompleted(menuId, ingredientId, target.checked)
  }
}

// 材料を追加
const addIngredientInput = () => {
  if (currentMenu.name) {
    currentMenu.ingredients.push({ name: '', completed: false })
  }
}

// 材料を削除
const removeIngredient = (index: number) => {
  const removedIngredient = currentMenu.ingredients.splice(index, 1)[0]
  if (removedIngredient.id) {
    removedIngredients.value.push(removedIngredient) // 削除対象リストに追加
  }
}

// コンポーネントマウント時にデータ取得
onMounted(fetchMenusForDate)
</script>

<template>
  <section class="detailView">
    <h2 class="detailViewTitle">{{ formatDate(entryDate) }}</h2>
    <div class="detailViewInner">
      <button class="addMenu" @click="openModal()">
        <mdicon name="plus" />
      </button>

      <ul class="menuList">
        <li class="menuItem" v-for="menu in menus" :key="menu.id">
          <h3 class="menuItemTitle">{{ menu.name }}</h3>
          <ul class="menuItemIngredients">
            <li
              v-for="ingredient in menu.ingredients"
              :key="ingredient.id"
              :class="{ completed: ingredient.completed }"
            >
              <label>
                <input
                  type="checkbox"
                  :checked="ingredient.completed"
                  @change="handleCheckboxChange(menu.id as string, ingredient.id as string, $event)"
                />
                {{ ingredient.name }}
              </label>
            </li>
          </ul>
          <div class="menuItemActions">
            <button @click="deleteMenu(menu.id as string)">
              <mdicon name="trash-can-outline" />
            </button>
            <button @click="openModal(menu)">
              <mdicon name="text-box-edit-outline" />
            </button>
          </div>
          <!-- 削除ボタン追加 -->
        </li>
      </ul>
    </div>

    <div v-if="isModalOpen" class="modal">
      <div class="modalContent">
        <div class="modalContentInner">
          <h3>{{ isEditing ? '献立を編集' : '献立を追加' }}</h3>

          <dl>
            <dt>献立名</dt>
            <dd><input v-model="currentMenu.name" placeholder="献立名を入力" /></dd>
          </dl>

          <dl>
            <dt>材料</dt>
            <dd>
              <ul>
                <li v-for="(ingredient, index) in currentMenu.ingredients" :key="index">
                  <input v-model="ingredient.name" placeholder="材料を入力" />
                  <button @click="removeIngredient(index)">
                    <mdicon name="trash-can-outline" />
                  </button>
                </li>
              </ul>
            </dd>
          </dl>

          <button class="modalIngredientAdd" @click="addIngredientInput" v-if="currentMenu.name">
            <mdicon name="plus" />
          </button>
        </div>

        <!-- 献立名が空の場合は非表示 -->
        <div class="modalActions">
          <button @click="closeModal">
            <mdicon name="close" />
          </button>
          <button @click="saveMenu">
            <mdicon name="check" />
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.detailViewTitle {
  font-size: 1.6rem;
  font-weight: 600;
  text-align: center;
  margin-bottom: 2rem;
}

.detailViewInner {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
}

.addMenu,
.menuItem {
  width: 100%;
  display: flex;
  flex-shrink: 0;
  justify-content: center;
  align-items: center;
  list-style: none;
  border: 1px solid var(--color-gray-300);
  border-radius: 0.8rem;
  font-weight: bold;
  overflow: hidden;
}

.addMenu {
  padding: 4rem 0;
}

.menuList {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
}

.menuItem {
  display: grid;
  grid-template-columns: 1fr;
}

.menuItemTitle {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.6rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  padding: 1em 0;
  background: #1976d2;
  color: var(--color-white);
}

.menuItemIngredients {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2.4rem;
  padding: 3.2rem 2.4rem;
}

.menuItemIngredients li {
  list-style: none;
}

.menuItemIngredients li label {
  display: flex;
  align-items: center;
  gap: 1em;
}

.menuItemIngredients li label input {
  position: relative;
  width: 2.4rem;
  height: 2.4rem;
  /* appearance: none; */
  background: #ffffff;
  border: solid 1px var(--color-gray-300);
  box-shadow: 0 0 0 0 transparent;
}

.menuItemActions {
  display: grid;
  grid-template-columns: 1fr 1fr;
}

.menuItemActions button {
  padding: 2rem 0;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid var(--color-gray-300);
  border-bottom: 0;
  border-left: 0;
}

.menuItemActions button:first-child {
  color: #d32f2f;
}

.menuItemActions button:last-child {
  border-right: 0;
}

.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modalContent {
  position: relative;
  width: 90vw;
  max-height: 80svh;
  overflow-x: hidden;
  overflow-y: scroll;
  background: var(--color-white);
  border-radius: 0.8rem;
}

.modalContentInner {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2.4rem;
  background: #fff;
  padding: 2.4rem;
}

.modalContent h3 {
  font-size: 1.6rem;
  font-weight: 600;
}

.modalContent dl {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
}

.modalContent dl dd ul {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2.4rem;
}

.modalContent ul li {
  width: 100%;
  list-style: none;
  display: flex;
  align-items: center;
  gap: 2rem;
}

.modalContent ul li button {
  flex-shrink: 0;
  color: #d32f2f;
}

.modalContent input {
  width: 100%;
  padding: 1em;
  font-size: 1.4rem;
  border-radius: 0.8rem;
  border: 1px solid var(--color-gray-300);
}

.modalIngredientAdd {
  display: flex;
  margin: auto;
  align-items: center;
  justify-content: center;
  width: 4rem;
  height: 4rem;
  border: 1px solid var(--color-gray-300);
  border-radius: 100vw;
}

.modalActions {
  position: sticky;
  bottom: 0;
  width: 100%;
  display: grid;
  background: var(--color-white);
  grid-template-columns: 1fr 1fr;
}

.modalActions button {
  padding: 2rem 0;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid var(--color-gray-300);
  border-bottom: 0;
  border-left: 0;
}

.modalActions button:first-child {
  color: #d32f2f;
}

.modalActions button:last-child {
  color: #388e3c;
  border-right: 0;
}
</style>
