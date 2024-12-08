// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getFirestore, collection, getDocs } from 'firebase/firestore'
import { getAnalytics } from 'firebase/analytics'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Firebaseの設定
const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_APP_ID,
  measurementId: import.meta.env.VITE_MEASUREMENT_ID,
}
// Firebaseの初期化
const app = initializeApp(firebaseConfig)

const analytics = getAnalytics(app)

// Firestoreのインスタンスを作成
const db = getFirestore(app)

// Firestoreからコレクションを取得
// 他のコンポーネントで使用できるようにexportする
// 使用例
// <script setup lang="ts">
// import { ref, onMounted } from 'vue';
// import { fetchCollection } from '@/services/firebase';

// const items = ref<any[]>([]);

// onMounted(async () => {
//   // 'some-collection'をFirestoreから取得
//   items.value = await fetchCollection('some-collection');
// });
// </script>

// <template>
//   <div>
//     <ul>
//       <li v-for="item in items" :key="item.id">{{ item.name }}</li>
//     </ul>
//   </div>
// </template>
export const fetchCollection = async (collectionName: string) => {
  const querySnapshot = await getDocs(collection(db, collectionName))
  const data: any[] = []
  querySnapshot.forEach((doc) => {
    data.push(doc.data())
  })
  return data
}

export { analytics, db }
