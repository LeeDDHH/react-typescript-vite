import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

// App コンポーネント
import App from '../components/App/App'

test('App コンポーネントのレンダー', async () => {
  // コンポーネントをレンダーして...
  render(<App />)

  // Count ボタンを取得
  const button = screen.getByRole('button')

  // ボタンをクリックしたら...
  await userEvent.click(button)
  // ボタンのラベルが更新されているかチェックする
  expect(button).toHaveTextContent('count is 1')
})
