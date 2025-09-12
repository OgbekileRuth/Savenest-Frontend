// app/dashboard/page.tsx

"use client";
import React from "react";
import { useSidebar } from "@/context/SidebarContext";
import AppHeader from "@/layout/AppHeader";
import AppSidebar from "@/layout/AppSidebar";
import Backdrop from "@/layout/Backdrop";
import { ReceiptText } from "lucide-react"
import { useState } from "react";


// Lucide icons
import { Wallet, TrendingUp, Gift, PiggyBank, Calendar } from "lucide-react";

type Category = "Salary" | "Profit" | "Gift" | "Investment";

// Map each category to an icon
const categoryIcons: Record<Category, React.ReactNode> = {
  "Salary": <Wallet className="w-5 h-5 text-white" />,
  "Profit": <TrendingUp className="w-5 h-5 text-white" />,
  "Gift": <Gift className="w-5 h-5 text-white" />,
  "Investment": <PiggyBank className="w-5 h-5 text-white" />,
};



export default function DashboardPage() {
  const { isExpanded, isHovered, isMobileOpen } = useSidebar();
  const [openCategory, setOpenCategory] = useState<Category | null>(null);

  const toggleCategory = (category: Category) => {
    setOpenCategory(openCategory === category ? null : category);
  };

  // dynamic margin for sidebar
  const mainContentMargin = isMobileOpen
    ? "ml-0"
    : isExpanded || isHovered
    ? "lg:ml-[290px]"
    : "lg:ml-[90px]";

  return (
    <div className="flex w-full min-h-screen bg-gray-50">
      {/* Sidebar */}
      <AppSidebar />

      {/* Backdrop for mobile */}
      <Backdrop />

      {/* Main content area */}
      <div className={`flex-1 transition-all duration-300 ${mainContentMargin}`}>
        {/* Header */}
        <AppHeader />

        {/* Page content */}
        <main className="p-6">
          <div className="w-full max-w-4xl mt-6 mx-auto bg-white border border-blue-400 rounded-2xl p-8 shadow-lg">
            <h2 className="text-2xl font-bold text-blue-600 mb-8">Income</h2>

            {/* Progress bar */}
            <div className="flex items-center justify-between mb-8">
              <div className="w-5 h-5 rounded-full bg-blue-600"></div>
              <div className="flex-1 h-[2px] bg-gray-300"></div>
              <div className="w-5 h-5 rounded-full bg-gray-300"></div>
              <div className="flex-1 h-[2px] bg-gray-300"></div>
              <div className="w-5 h-5 rounded-full bg-gray-300"></div>
            </div>

            {/* Categories dropdowns */}
            {(["Salary", "Profit", "Gift", "Investment"] as Category[]).map(
              (category) => (
                <div key={category} className="border-b border-gray-200 py-3">
                  {/* Category header */}
                  <button
                    onClick={() => toggleCategory(category)}
                    className="flex items-center justify-between w-full text-left font-bold text-gray-700 hover:text-blue-600"
                  >
                    <div className="flex items-center gap-3">
                      {/* Icon inside blue circle */}
                      <div className="w-8 h-8 flex items-center justify-center rounded-full bg-blue-600">
                        {categoryIcons[category]}
                      </div>
                      <span>{category}</span>
                    </div>
                  </button>

                  {/* Dropdown content */}
                  {openCategory === category && (
                    <div className="mt-4 pl-8 text-lg text-gray-600 hover:text-blue-600 space-y-6">
                      <div>
                        <div>
                        <p className="font-bold">Payment Method</p>
                        <div className="flex items-center gap-2 mt-2">
                          <div className="w-8 h-8 flex items-center justify-center rounded-full bg-blue-600">
                            <Wallet className="w-5 h-5 text-white" />
                          </div>
                          <span>Cash</span>
                        </div>
                      </div>
                      </div>
                      <div>
                       <div className="flex items-center gap-3 font-bold mt-2">
                          {/* Blue circle with calendar icon */}
                          <div className="w-8 h-8 flex items-center justify-center rounded-full bg-blue-600">
                            <Calendar className="w-5 h-5 text-white" />
                          </div>

                          <input
                            type="text"
                            placeholder="Monday"
                            className="border rounded px-2 py-1 text-lg"
                          />
                          <input
                            type="text"
                            placeholder="DD/MM/YYYY"
                            className="border rounded px-2 py-1 text-lg"
                          />
                        </div>  
                      </div>
                    </div>
                  )}
                </div>
              )
            )}
          </div>
        </main>
      </div>
    </div>
  );
}
