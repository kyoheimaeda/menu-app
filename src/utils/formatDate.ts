// 日付のフォーマット
export const formatDate = (dateString: string): string => {
  const date = new Date(dateString)
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    weekday: 'short',
  }

  // 日本語のロケールを指定してフォーマット
  return new Intl.DateTimeFormat('ja-JP', options).format(date)
}
