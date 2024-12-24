import { ConnectWalletButton } from "@/components/ConnectWalletButton";
import { CountdownTimer } from "@/components/CountdownTimer";
import { ProgressBar } from "@/components/ProgressBar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Rocket } from "lucide-react";

const Index = () => {
  // Example ICO end date (30 days from now)
  const icoEndDate = new Date();
  icoEndDate.setDate(icoEndDate.getDate() + 30);

  return (
    <div className="min-h-screen gradient-bg">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white font-space mb-4">
            $MEME Token ICO
          </h1>
          <p className="text-xl text-white/80 mb-8">
            Join the next generation of meme coins on Solana
          </p>
          <ConnectWalletButton />
        </div>

        {/* ICO Details Card */}
        <Card className="glass max-w-2xl mx-auto p-8">
          <div className="space-y-8">
            {/* Countdown */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-4 font-space">
                ICO Ends In
              </h2>
              <CountdownTimer endDate={icoEndDate} />
            </div>

            {/* Progress */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-4 font-space">
                Progress
              </h2>
              <ProgressBar current={150} total={1000} />
            </div>

            {/* Buy Form */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-4 font-space">
                Buy Tokens
              </h2>
              <div className="space-y-4">
                <Input
                  type="number"
                  placeholder="Amount in SOL"
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                />
                <Button className="w-full" size="lg">
                  <Rocket className="mr-2 h-4 w-4" />
                  Buy Now
                </Button>
              </div>
            </div>

            {/* Token Info */}
            <div className="grid grid-cols-2 gap-4 text-white">
              <div>
                <p className="text-white/60">Price</p>
                <p className="font-bold">1 SOL = 10,000 $MEME</p>
              </div>
              <div>
                <p className="text-white/60">Min Purchase</p>
                <p className="font-bold">0.1 SOL</p>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Index;