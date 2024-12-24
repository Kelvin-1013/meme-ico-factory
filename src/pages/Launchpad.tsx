import { Card } from "@/components/ui/card";

const Launchpad = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-4xl font-bold">Launchpad</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card className="p-6">
          <h3 className="text-2xl font-bold mb-4">Create Token</h3>
          <p className="text-muted-foreground">Launch your own token with our easy-to-use token creator</p>
        </Card>
        <Card className="p-6">
          <h3 className="text-2xl font-bold mb-4">Create Presale</h3>
          <p className="text-muted-foreground">Set up a presale for your token with customizable parameters</p>
        </Card>
        <Card className="p-6">
          <h3 className="text-2xl font-bold mb-4">Create Fair Launch</h3>
          <p className="text-muted-foreground">Launch your token with a fair distribution model</p>
        </Card>
      </div>
    </div>
  );
};

export default Launchpad;