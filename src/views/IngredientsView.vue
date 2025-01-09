<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { doc, collection, getDocs, updateDoc } from 'firebase/firestore'
import { db } from '@/firebase'

interface Ingredient {
  id?: string
  name: string
  completed: boolean
  menuId?: string // どの献立に属しているかを識別
  date?: string // どの日付に属しているかを識別
}
const ingredients = ref<Ingredient[]>([]) // すべての材料を格納

// 今週のすべての材料を取得
const fetchAllIngredientsForWeek = async () => {
  const today = new Date()
  const startOfWeek = new Date(today.setDate(today.getDate() - today.getDay())) // 今週の開始日
  const datesOfWeek = Array.from({ length: 7 }, (_, i) => {
    const date = new Date(startOfWeek)
    date.setDate(startOfWeek.getDate() + i)
    return date.toISOString().split('T')[0] // YYYY-MM-DD 形式の文字列
  })

  const allIngredients: Ingredient[] = []

  for (const date of datesOfWeek) {
    const menusRef = collection(db, `dates/${date}/menus`)
    const querySnapshot = await getDocs(menusRef)

    for (const doc of querySnapshot.docs) {
      const ingredientsRef = collection(db, `dates/${date}/menus/${doc.id}/ingredients`)
      const ingredientSnapshot = await getDocs(ingredientsRef)

      const ingredientsData = ingredientSnapshot.docs.map((ingredientDoc) => ({
        id: ingredientDoc.id,
        ...(ingredientDoc.data() as Ingredient),
        menuId: doc.id, // 献立IDを追加
        date, // 日付を追加
      }))
      allIngredients.push(...ingredientsData) // まとめて追加
    }
  }

  ingredients.value = allIngredients // 取得したデータを Vue のリアクティブ変数に代入
}

// 材料のチェック状態を切り替え
const toggleIngredientCompleted = async (ingredient: Ingredient) => {
  if (!ingredient.id || !ingredient.menuId || !ingredient.date) return

  const ingredientDoc = doc(
    db,
    `dates/${ingredient.date}/menus/${ingredient.menuId}/ingredients/${ingredient.id}`,
  )
  await updateDoc(ingredientDoc, { completed: !ingredient.completed }) // Firebaseを更新
  ingredient.completed = !ingredient.completed // ローカル状態を更新
}

// コンポーネントマウント時にデータを取得
onMounted(fetchAllIngredientsForWeek)
</script>

<template>
  <div>
    <h1>今週の材料</h1>
    <ul>
      <li v-for="ingredient in ingredients" :key="ingredient.id">
        <label :class="{ completed: ingredient.completed }">
          <input
            type="checkbox"
            :checked="ingredient.completed"
            @change="toggleIngredientCompleted(ingredient)"
          />
          {{ ingredient.name }}
        </label>
      </li>
    </ul>
  </div>
</template>
