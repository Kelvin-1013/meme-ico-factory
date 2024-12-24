import { Card } from "@/components/ui/card";

const Documentation = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-4xl font-bold">Documentation</h1>
      <div className="grid grid-cols-1 gap-6">
        <Card className="p-6">
          <h3 className="text-2xl font-bold mb-4">Getting Started</h3>
          <div className="space-y-4">
            <div>
              <h4 className="text-xl font-semibold mb-2">Create Token</h4>
              <p className="text-muted-foreground">Learn how to create and launch your own token</p>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-2">Launch Presale</h4>
              <p className="text-muted-foreground">Step-by-step guide to launching a presale</p>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-2">Staking Guide</h4>
              <p className="text-muted-foreground">Understanding staking mechanics and rewards</p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Documentation;