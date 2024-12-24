import { Card } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";

const Dashboard = () => {
  // Example data - in a real app, this would come from your backend
  const salesData = [
    { date: "2024-01", amount: 4000 },
    { date: "2024-02", amount: 3000 },
    { date: "2024-03", amount: 2000 },
    { date: "2024-04", amount: 2780 },
    { date: "2024-05", amount: 1890 },
    { date: "2024-06", amount: 2390 },
  ];

  const distributionData = [
    { name: "Public Sale", value: 40 },
    { name: "Team", value: 20 },
    { name: "Marketing", value: 15 },
    { name: "Development", value: 25 },
  ];

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

  return (
    <div className="space-y-6">
      <h1 className="text-4xl font-bold font-space">ICO Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="p-6 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
          <h2 className="text-2xl font-bold mb-4">Token Sales</h2>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={salesData}>
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="amount" stroke="#8884d8" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </Card>

        <Card className="p-6 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
          <h2 className="text-2xl font-bold mb-4">Token Distribution</h2>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={distributionData}
                  cx="50%"
                  cy="50%"
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                >
                  {distributionData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="p-6 border-2 border-black hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-shadow">
          <h3 className="font-bold text-lg mb-2">Total Raised</h3>
          <p className="text-3xl font-mono">$125,000</p>
        </Card>
        <Card className="p-6 border-2 border-black hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-shadow">
          <h3 className="font-bold text-lg mb-2">Participants</h3>
          <p className="text-3xl font-mono">1,234</p>
        </Card>
        <Card className="p-6 border-2 border-black hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-shadow">
          <h3 className="font-bold text-lg mb-2">Days Left</h3>
          <p className="text-3xl font-mono">15</p>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;