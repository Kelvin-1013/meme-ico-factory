import { Button } from "@/components/ui/button";
import { Wallet } from "lucide-react";

export const ConnectWalletButton = () => {
  return (
    <Button className="w-full sm:w-auto" size="lg">
      <Wallet className="mr-2 h-4 w-4" />
      Connect Wallet
    </Button>
  );
};