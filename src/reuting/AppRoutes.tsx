import { Navigate, Route, Routes } from 'react-router-dom'
import { AppShell } from '../layouts/AppShell'
import { AnalyticsPage } from '../pages/AnalyticsPage'
import { CategoriesPage } from '../pages/CategoriesPage'
import { DashboardPage } from '../pages/DashboardPage'
import {
  AddExpensePage,
  ExpensesPage,
  PersonalExpensesPage,
  PersonalListAnalysisPage,
  PersonalListHistoryPage,
  PersonalListOverviewPage,
  PersonalListPurchasesPage,
  TransportExpensesPage,
} from '../pages/ExpensesPages'
import { SettingsPage } from '../pages/SettingsPage'

export function AppRoutes() {
  return (
    <Routes>
      <Route element={<AppShell />}>
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/expenses" element={<ExpensesPage />} />
        <Route path="/expenses/personal" element={<PersonalExpensesPage />} />
        <Route path="/expenses/personal/transport" element={<TransportExpensesPage />} />
        <Route path="/expenses/personal/transport/trips" element={<TransportExpensesPage />} />
        <Route path="/expenses/personal/transport/analysis" element={<TransportExpensesPage />} />
        <Route path="/expenses/personal/transport/history" element={<TransportExpensesPage />} />
        <Route path="/expenses/personal/:listId" element={<PersonalListOverviewPage />} />
        <Route path="/expenses/personal/:listId/purchases" element={<PersonalListPurchasesPage />} />
        <Route path="/expenses/personal/:listId/analysis" element={<PersonalListAnalysisPage />} />
        <Route path="/expenses/personal/:listId/history" element={<PersonalListHistoryPage />} />
        <Route path="/expenses/add" element={<AddExpensePage />} />
        <Route path="/analytics" element={<AnalyticsPage />} />
        <Route path="/categories" element={<CategoriesPage />} />
        <Route path="/settings" element={<SettingsPage />} />
        <Route path="*" element={<Navigate to="/dashboard" replace />} />
      </Route>
    </Routes>
  )
}
