import { Progress } from "@/components/ui/progress";

interface ProgressBarProps {
  current: number;
  total: number;
}

export const ProgressBar = ({ current, total }: ProgressBarProps) => {
  const percentage = (current / total) * 100;

  return (
    <div className="w-full space-y-2">
      <Progress value={percentage} className="h-2" />
      <div className="flex justify-between text-sm">
        <span>{current} SOL raised</span>
        <span>{total} SOL goal</span>
      </div>
    </div>
  );
};