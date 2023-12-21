'use client'
import {FishMongerStatus} from "@/types/devices";
import React from "react";
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";

const FishMongerTestingCard: React.FC<{ fishMongerStatusList: FishMongerStatus[] }> = ({fishMongerStatusList}) => {

  const areAllOnline = fishMongerStatusList.every((monger) => monger.isOnline);
  const statusColor = areAllOnline ? 'text-green-500' : 'text-red-500';
  const statusDot = "•";

  const [currentMonger, setCurrentMonger] = React.useState("")

  return (
    <Card className={"w-80"}>
      <CardHeader>
        <div className={"flex justify-between"}>
          <CardTitle className={"text-lg"}>鱼贩</CardTitle>
          <span className={` ${statusColor}`}>{statusDot}</span>
        </div>
        <CardDescription>场地道具鱼贩测试</CardDescription>
      </CardHeader>
      <CardContent>

      </CardContent>
    </Card>
  )
}

export default FishMongerTestingCard;
