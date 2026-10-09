import { AppRoutes } from './routing/AppRoutes'
import { ExpenseStoreProvider } from './pages/ExpensesPages'

export default function App() {
  return <ExpenseStoreProvider><AppRoutes /></ExpenseStoreProvider>
}
