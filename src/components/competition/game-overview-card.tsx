'use client'
import {useContext, useEffect, useState} from "react";
import {SocketContext} from "@/context/SocketContext";
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {gameStatusLocalization, secondsToTimerFormat} from "@/lib/utils";

export default function GameOverviewCard() {
  const socketContent = useContext(SocketContext)
  if (socketContent === undefined) {
    throw new Error("useContext must be used within a SocketProvider")
  }

  const {gameStatus, gameCountdown} = socketContent
  const [formattedTime, setFormattedTime] = useState('');

  const updateTime = () => {
    const now = new Date();
    const timeString = now.toLocaleTimeString("zh-CN", {hour12: false});
    setFormattedTime(timeString);
  };

  useEffect(() => {
    updateTime();
    const intervalId = setInterval(updateTime, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const statusColor = gameStatus === "running" ? "text-green-500" : "text-red-500"
  const statusDot = "•"

  return (
    <Card className={"w-96"}>
      <CardHeader>
        <div className={"flex justify-between"}>
          <CardTitle className={"text-lg"}>比赛</CardTitle>
          <span className={` ${statusColor}`}>{statusDot}</span>
        </div>
        <CardDescription>比赛状态概览</CardDescription>
      </CardHeader>
      <CardContent>
        <div className={"flex-col space-y-2"}>
          <div className={"flex-col space-y-1"}>
            <div className={"text-sm font-medium"}>比赛状态</div>
            <div className={"text-xl font-bold text-gray-500"}>{gameStatusLocalization(gameStatus)}</div>
          </div>
          <div className={"flex justify-between space-x-4"}>
            <div className={"flex-col space-y-1"}>
              <div className={"text-sm font-medium"}>当前时间</div>
              <div className={"text-2xl font-bold"}>{formattedTime}</div>
            </div>
            <div className={"flex-col space-y-1"}>
              <div className={"text-sm font-medium"}>比赛剩余时间</div>
              <div
                className={`${gameStatus === "running" || gameStatus === "pause" ? "text-2xl font-bold" : "text-xl font-bold text-gray-500"}`}>
                {gameStatus === "running" || gameStatus === "pause" ? secondsToTimerFormat(gameCountdown) : "比赛未开始"}
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
