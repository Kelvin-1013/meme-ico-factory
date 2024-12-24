import { Card } from "@/components/ui/card";

const Staking = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-4xl font-bold">Staking</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="p-6">
          <h3 className="text-2xl font-bold mb-4">Active Pools</h3>
          <p className="text-muted-foreground">View and participate in active staking pools</p>
        </Card>
        <Card className="p-6">
          <h3 className="text-2xl font-bold mb-4">Your Stakes</h3>
          <p className="text-muted-foreground">Manage your staked tokens and rewards</p>
        </Card>
      </div>
    </div>
  );
};

export default Staking;