"use client";

import DropdownMenu from "@/components/DropdownMenu";
import { useState, Suspense } from "react";
import TabMenu from "@/components/TabMenu";

export default function Home() {
  const [selectedItem, setSelectedItem] = useState({
    text: "English",
    value: "en",
  });

  const items = [
    { text: "German", value: "de" },
    { text: "English", value: "en" },
  ];

  return (
    <main className="main">
      <DropdownMenu
        selectedItem={selectedItem}
        setSelectedItem={setSelectedItem}
        items={items}
      />
      <TabMenu selectedItem={selectedItem} />
    </main>
  );
}
