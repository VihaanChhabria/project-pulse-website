import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop'
import { useHashScroll } from './hooks/useHashScroll'
import LandingPage from './pages/LandingPage'
import NewsArchivePage from './pages/NewsArchivePage'
import BlogPostPage from './pages/BlogPostPage'

function AppRoutes() {
  useHashScroll()

  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/news" element={<NewsArchivePage />} />
        <Route path="/news/over-100-screenings" element={<BlogPostPage />} />
      </Routes>
    </>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  )
}
