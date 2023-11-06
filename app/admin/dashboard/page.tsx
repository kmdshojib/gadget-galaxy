import Container from "@/app/Components/Common/Container";
import React from "react";
import AdminClient from "./adminClient";

const AdminDashBoard = () => {
  return (
    <div>
      <Container>
        <h1 >Admin Dashboard</h1>
        <AdminClient />
      </Container>
    </div>
  );
};

export default AdminDashBoard;
