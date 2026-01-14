import Header from "../layout/Header";
import MetricCard from "../analytics/MerticCard";
import ChartSection from "../analytics/ChartSection";
import {DollarSign,FolderKanban,Users,CheckCircle2,} from 'lucide-react';

const AnalyticsDashboard = () => {
  const metrics = [
    {
      title: 'Total Revenue',
      value: '$245,890',
      change: '+12.5%',
      trend: 'up',
      icon: DollarSign,
      color: 'bg-green-500'
    },
    {
      title: 'Active Projects',
      value: '24',
      change: '+8.2%',
      trend: 'up',
      icon: FolderKanban,
      color: 'bg-blue-500'
    },
    {
      title: 'Team Members',
      value: '48',
      change: '-2.4%',
      trend: 'down',
      icon: Users,
      color: 'bg-purple-500'
    },
    {
      title: 'Completed Tasks',
      value: '1,284',
      change: '+15.3%',
      trend: 'up',
      icon: CheckCircle2,
      color: 'bg-orange-500'
    }
  ];

  const chartData = [
    { month: 'Jan', revenue: 42000 },
    { month: 'Feb', revenue: 38000 },
    { month: 'Mar', revenue: 45000 },
    { month: 'Apr', revenue: 52000 },
    { month: 'May', revenue: 48000 },
    { month: 'Jun', revenue: 55000 },
    { month: 'Jul', revenue: 62000 },
    { month: 'Aug', revenue: 58000 },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {metrics.map((metric, index) => (
            <MetricCard key={index} {...metric} />
          ))}
        </div>

        {/* Chart Section */}
        <ChartSection chartData={chartData} />
      </main>
    </div>
  );
};

export default AnalyticsDashboard;