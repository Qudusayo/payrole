import DashboardLayout from "@/components/layout/Dashboard";
import React, { useState } from "react";

export default function Contracts() {
  const [title, setTitle] = useState("Contracts");

  return (
    <DashboardLayout title={title}>
      <div>Contracts</div>
    </DashboardLayout>
  );
}
