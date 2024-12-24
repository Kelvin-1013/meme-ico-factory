import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Card } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { useState } from "react";

interface Asset {
  id: string;
  rank: string;
  symbol: string;
  name: string;
  priceUsd: string;
  marketCapUsd: string;
  changePercent24Hr: string;
}

const Assets = () => {
  const [selectedAsset, setSelectedAsset] = useState<Asset | null>(null);

  const { data: assets } = useQuery({
    queryKey: ["assets"],
    queryFn: async () => {
      const response = await axios.get("https://api.coincap.io/v2/assets?limit=50");
      return response.data.data;
    },
  });

  const { data: history } = useQuery({
    queryKey: ["assetHistory", selectedAsset?.id],
    queryFn: async () => {
      if (!selectedAsset) return null;
      const response = await axios.get(
        `https://api.coincap.io/v2/assets/${selectedAsset.id}/history?interval=d1`
      );
      return response.data.data.map((item: any) => ({
        date: new Date(item.time).toLocaleDateString(),
        price: parseFloat(item.priceUsd),
      }));
    },
    enabled: !!selectedAsset,
  });

  return (
    <div className="space-y-6">
      <h1 className="text-4xl font-bold font-space">Top 50 Crypto Assets</h1>
      
      {selectedAsset && (
        <Card className="p-6 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
          <h2 className="text-2xl font-bold mb-4">{selectedAsset.name} ({selectedAsset.symbol})</h2>
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={history}>
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="price" stroke="#8884d8" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </Card>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {assets?.map((asset: Asset) => (
          <Card
            key={asset.id}
            className="p-4 cursor-pointer border-2 border-black hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-shadow"
            onClick={() => setSelectedAsset(asset)}
          >
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-bold">{asset.name}</h3>
                <p className="text-sm text-muted-foreground">{asset.symbol}</p>
              </div>
              <span className="text-sm">Rank #{asset.rank}</span>
            </div>
            <div className="mt-4 space-y-2">
              <p className="text-xl font-mono">${parseFloat(asset.priceUsd).toFixed(2)}</p>
              <p className={`text-sm ${parseFloat(asset.changePercent24Hr) > 0 ? 'text-green-600' : 'text-red-600'}`}>
                {parseFloat(asset.changePercent24Hr).toFixed(2)}%
              </p>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Assets;