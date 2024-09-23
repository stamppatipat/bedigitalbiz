"use client"; // ต้องใส่เพื่อให้ทำงานใน Client-side ของ Next.js

import React, { useState, useEffect } from 'react';

export default function Mode() {
  const [darkMode, setDarkMode] = useState<boolean>(false);

  // ฟังก์ชันเปลี่ยนโหมดสี
  const toggleColorMode = (): void => {
    setDarkMode(!darkMode);
  };

  // ใช้ useEffect เพื่อเปลี่ยนคลาสของ body ตามโหมดสี
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('bg-darkmode', 'text-white');
      document.body.classList.remove('bg-white', 'text-black');
    } else {
      document.body.classList.add('bg-white', 'text-black');
      document.body.classList.remove('bg-darkmode', 'text-white');
    }
  }, [darkMode]);

  return (
    <div className="flex justify-center items-center">
      <button
        onClick={toggleColorMode}
        className="px-6 py-3 bg-blue-500 text-red font-semibold rounded-md hover:bg-blue-700 transition duration-300"
      >
        {/* {darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'} */}
      </button>

      
    </div>
  );
}
