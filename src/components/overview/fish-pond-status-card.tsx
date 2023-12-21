'use client'

import {FishPondStatus} from "@/types/devices";
import React from "react";
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {Separator} from "@/components/ui/separator";

const FishPondStatusCard: React.FC<FishPondStatus> = ({isOnline, pondState}) => {

  const statusColor = isOnline ? 'text-green-500' : 'text-red-500';
  const statusDot = "•";

  return (
    <Card className={"w-64"}>
      <CardHeader>
        <div className={"flex justify-between"}>
          <CardTitle className={"text-lg"}>鱼池</CardTitle>
          <span className={` ${statusColor}`}>{statusDot}</span>
        </div>
        <CardDescription>场地道具鱼池状态</CardDescription>
      </CardHeader>

      <CardContent>
        <Separator className={"mb-4"}/>
        <div className={"grid gap-6"}>
          <div className={"flex items-center justify-between space-x-4"}>
            <p className={'text-sm font-bold leading-none'}>鱼池</p>
            <p className={`text-sm ${isOnline ? "hidden" : ""}`}>未连接</p>
            <p
              className={`text-sm ${typeof pondState !== "undefined" && pondState === "STOP" && isOnline ? "" : "hidden"}`}>停止运行</p>
            <p
              className={`text-sm ${typeof pondState !== "undefined" && pondState === "NORMAL" && isOnline ? "" : "hidden"}`}>运行正常</p>
            <p
              className={`text-sm ${typeof pondState !== "undefined" && pondState === "RELEASE" && isOnline ? "" : "hidden"}`}>即将释放</p>
            <p
              className={`text-sm ${typeof pondState !== "undefined" && pondState === "CLEAN" && isOnline ? "" : "hidden"}`}>即将清空</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
};

export default FishPondStatusCard;
