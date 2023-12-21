import React from "react";
import {FishPondStatus} from "@/types/devices";
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";

const FishPondTestingCard: React.FC<FishPondStatus> = ({isOnline, pondState}) => {

  const statusColor = isOnline ? 'text-green-500' : 'text-red-500';
  const statusDot = "•";

  return (
    <Card className={"w-80"}>
      <CardHeader>
        <div className={"flex justify-between"}>
          <CardTitle className={"text-lg"}>鱼池</CardTitle>
          <span className={` ${statusColor}`}>{statusDot}</span>
        </div>
        <CardDescription>场地道具鱼池测试</CardDescription>
      </CardHeader>

      <CardContent>

      </CardContent>
    </Card>
  )
}

export default FishPondTestingCard;
