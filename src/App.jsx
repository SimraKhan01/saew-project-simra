import { Routes, Route } from "react-router-dom"
import Sidebar from "./components/Sidebar"

function App() {
  return (
    <div className="min-h-screen bg-white text-[#8b0000]">
      <Sidebar />

      <main className="px-3 pb-6 pt-20 sm:px-5 sm:pb-8 sm:pt-24 md:px-10 md:pt-28">
        <div className="rounded-xl border border-[#f2bcbc] bg-white p-4 shadow-[0_8px_24px_rgba(179,0,0,0.08)] sm:rounded-2xl sm:p-6">
          <Routes>
            <Route
              path="/"
              element={
                <h2 className="text-xl font-semibold tracking-wide text-[#b30000] sm:text-2xl md:text-4xl">
                  Welcome to Star Auto Engineering Works
                </h2>
              }
            />
            <Route path="/about" element={<h2 className="text-xl font-semibold text-[#b30000] sm:text-2xl md:text-4xl">About Us</h2>} />
            <Route path="/services" element={<h2 className="text-xl font-semibold text-[#b30000] sm:text-2xl md:text-4xl">Services</h2>} />
            <Route path="/branches" element={<h2 className="text-xl font-semibold text-[#b30000] sm:text-2xl md:text-4xl">Branches</h2>} />
            <Route path="/contact" element={<h2 className="text-xl font-semibold text-[#b30000] sm:text-2xl md:text-4xl">Contact Us</h2>} />
          </Routes>
        </div>
      </main>
    </div>
  )
}

export default App
