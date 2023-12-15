'use client'
import React from "react";
import {FishMongerStatus} from "@/types/devices";
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {Separator} from "@/components/ui/separator";

const FishMongerStatusCard: React.FC<{ fishMongerStatusList: FishMongerStatus[] }> = ({fishMongerStatusList}) => {

  const areAllOnline = fishMongerStatusList.every((monger) => monger.isOnline);
  const statusColor = areAllOnline ? 'text-green-500' : 'text-red-500';
  const statusDot = "•";

  return (
    <Card className={"w-64"}>
      <CardHeader>
        <div className={"flex justify-between"}>
          <CardTitle className={"text-lg"}>鱼贩</CardTitle>
          <span className={` ${statusColor}`}>{statusDot}</span>
        </div>
        <CardDescription>场地道具鱼贩状态</CardDescription>
      </CardHeader>
      <CardContent>
        <Separator className={"mb-4"}/>
        <ul>
          {
            fishMongerStatusList.map((fishMongerStatus) => (
              <li key={fishMongerStatus.mongerIdentifier}>
                <div className={"mt-1 grid gap-6"}>
                  <div className={"flex items-center justify-between space-x-4"}>
                    <p className={'text-sm font-bold leading-none'}>鱼贩{fishMongerStatus.mongerIdentifier}</p>
                    <p className={`text-sm ${fishMongerStatus.isOnline ? "hidden" : ""}`}>未连接</p>
                    <p
                      className={`text-sm ${typeof fishMongerStatus.mongerState !== "undefined" && fishMongerStatus.mongerState === "SCANNING" && fishMongerStatus.isOnline ? "" : "hidden"}`}>等待中</p>
                    <p
                      className={`text-sm ${typeof fishMongerStatus.mongerState !== "undefined" && fishMongerStatus.mongerState === "COOLING" && fishMongerStatus.isOnline ? "" : "hidden"}`}>冷却中</p>
                    <p
                      className={`text-sm ${typeof fishMongerStatus.mongerState !== "undefined" && fishMongerStatus.mongerState === "TRIGGERED" && fishMongerStatus.isOnline ? "" : "hidden"}`}>已触发</p>
                  </div>
                </div>
              </li>
            ))
          }
        </ul>
      </CardContent>
    </Card>
  )
}

export default FishMongerStatusCard;
