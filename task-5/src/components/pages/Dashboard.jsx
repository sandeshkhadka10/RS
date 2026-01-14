import React from "react";
import Button from "../ui/Button";
import Badge from "../ui/Badge";
import Card from "../ui/Card";

const Dashboard = () => {
  return (
    <div className="max-w-md mx-auto mt-10">
      <Card title="Project Details">
        <div className="flex items-center justify-between mb-4">
          <p className="text-sm">Project Status</p>
          <Badge status="active">Active</Badge>
        </div>

        <p className="text-sm mb-6">
          This project is currently in progress and performing well.
        </p>

        <div className="flex gap-3">
          <Button>Edit</Button>
          <Button variant="danger">Delete</Button>
        </div>
      </Card>
    </div>
  );
};

export default Dashboard;
