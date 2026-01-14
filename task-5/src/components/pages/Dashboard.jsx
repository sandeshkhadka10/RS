import Button from "./components/Button";
import StatusBadge from "./components/StatusBadge";
import Card from "./components/Card";

const Dashboard = () => {
  return (
    <Card title="Project Details">
      <StatusBadge status="active" />
      <div className="mt-4 flex gap-2">
        <Button label="Edit" />
        <Button label="Delete" variant="danger" />
      </div>
    </Card>
  );
};

export default Dashboard;
