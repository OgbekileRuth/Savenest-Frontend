// app/dashboard/page.tsx

"use client";
import { useSidebar } from '@/context/SidebarContext';
import AppHeader from '@/layout/AppHeader';
import AppSidebar from '@/layout/AppSidebar';
import Backdrop from '@/layout/Backdrop';
import { ReceiptText } from "lucide-react"

import { useState } from "react";

type Category = "Salary" | "Profit" | "Gift" | "Investment";

export default function Income() {
  const [openCategory, setOpenCategory] = useState<Category | null>(null);

  const toggleCategory = (category: Category) => {
    setOpenCategory(openCategory === category ? null : category);
  };

  return (
    <div className="w-full max-w-2xl mt-6 mx-auto bg-white border border-blue-400 rounded-xl p-6 shadow">
      <h2 className="text-xl font-bold text-blue-600 mb-6">Income</h2>

      {/* Progress bar */}
      <div className="flex items-center justify-between mb-6">
        <div className="w-4 h-4 rounded-full bg-blue-600"></div>
        <div className="flex-1 h-[2px] bg-gray-300"></div>
        <div className="w-4 h-4 rounded-full bg-gray-300"></div>
        <div className="flex-1 h-[2px] bg-gray-300"></div>
        <div className="w-4 h-4 rounded-full bg-gray-300"></div>
      </div>

      {/* Categories dropdowns */}
      {(["Salary", "Profit", "Gift", "Investment"] as Category[]).map(
        (category) => (
          <div key={category} className="border-b border-gray-200 py-2">
            {/* Category header */}
            <button
              onClick={() => toggleCategory(category)}
              className="flex items-center justify-between w-full text-left font-semibold text-gray-700 hover:text-blue-600"
            >
              <div className="flex items-center gap-2">
                <div
                  className={`w-4 h-4 rounded-full ${
                    openCategory === category ? "bg-blue-600" : "bg-blue-400"
                  }`}
                ></div>
                {category}
              </div>
            </button>

            {/* Dropdown content */}
            {openCategory === category && (
              <div className="mt-3 pl-6 text-sm text-gray-600 space-y-4">
                <div>
                  <p className="font-medium">Payment Method</p>
                  <div className="flex items-center gap-2 mt-1">
                    <div className="w-3 h-3 rounded-full bg-blue-600"></div>
                    <span>Cash</span>
                  </div>
                </div>

                <div>
                  <p className="font-medium">Date</p>
                  <div className="flex items-center gap-2 mt-1">
                    <div className="w-3 h-3 rounded-full bg-blue-600"></div>
                    <input
                      type="text"
                      placeholder="Monday"
                      className="border rounded px-2 py-1 text-sm"
                    />
                    <input
                      type="text"
                      placeholder="DD/MM/YYYY"
                      className="border rounded px-2 py-1 text-sm"
                    />
                  </div>
                </div>
              </div>
            )}
          </div>
        )
      )}
    </div>
  );
}