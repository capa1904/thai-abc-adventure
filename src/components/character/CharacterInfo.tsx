import React from "react";
import { Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface CharacterInfoProps {
  isRare?: boolean;
  rareInfo?: string;
}

export const CharacterInfo: React.FC<CharacterInfoProps> = ({ isRare, rareInfo }) => {
  if (!isRare || !rareInfo) return null;

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
            className="hover:bg-thai-primary/20"
          >
            <Info className="h-4 w-4" />
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p className="max-w-xs text-sm">{rareInfo}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};