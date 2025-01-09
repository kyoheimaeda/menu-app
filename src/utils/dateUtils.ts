// 今週の月曜日から日曜日までの日付を取得
export const getThisWeekDateRange = () => {
  const now = new Date()
  const dayOfWeek = now.getDay()
  const diff = now.getDate() - dayOfWeek + (dayOfWeek == 0 ? -6 : 1) // 月曜日の日付を計算

  const startOfWeek = new Date(now.setDate(diff))
  const endOfWeek = new Date(now.setDate(diff + 6))

  // 日付範囲を返す
  return {
    start: startOfWeek.toISOString().split('T')[0], // YYYY-MM-DD
    end: endOfWeek.toISOString().split('T')[0], // YYYY-MM-DD
  }
}
