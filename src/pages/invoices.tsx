import React, { useState } from "react";
import DashboardLayout from "@/components/layout/Dashboard";

export default function Invoices() {
  const [title, setTitle] = useState("Invoices");

  return (
    <DashboardLayout title={title}>
      <div>Invoices</div>
    </DashboardLayout>
  );
}
