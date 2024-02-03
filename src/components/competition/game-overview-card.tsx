'use client'
import {useContext} from "react";
import {SocketContext} from "@/context/SocketContext";
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import {currentStageLocalization, gameStatusLocalization, secondsToTimerFormat} from "@/lib/utils";

export default function GameOverviewCard() {
  const socketContent = useContext(SocketContext)
  if (socketContent === undefined) {
    throw new Error("useContext must be used within a SocketProvider")
  }

  const {isConnected, gameCountdown, currentStage, stageCountdown} = socketContent

  const statusColor = isConnected ? "text-green-500" : "text-red-500"
  const statusDot = "•"

  return (
    <Card className={"w-full"}>
      <CardHeader>
        <div className={"flex justify-between"}>
          <CardTitle className={"text-lg"}>概览</CardTitle>
          <span className={` ${statusColor}`}>{statusDot}</span>
        </div>
      </CardHeader>
      <CardContent>
        <div className={"flex justify-between"}>
          <div className={"flex-col space-y-1"}>
            <div className={"text-sm font-medium"}>比赛状态</div>
            <div
              className={`${gameStatus === "running" || gameStatus === "pause" ? "text-5xl font-bold" : "text-5xl font-bold text-gray-500"}`}>
              {gameStatus === "running" || gameStatus === "pause" ? gameStatusLocalization(gameStatus) : "未开始"}
            </div>
          </div>
          <div className={"flex-col space-y-1"}>
            <div className={"text-sm font-medium"}>比赛剩余时间</div>
            <div
              className={`${gameStatus === "running" || gameStatus === "pause" ? "text-5xl font-bold" : "text-5xl font-bold text-gray-500"}`}>
              {gameStatus === "running" || gameStatus === "pause" ? secondsToTimerFormat(gameCountdown) : "未开始"}
            </div>
          </div>
          <div className={"flex-col space-y-1"}>
            <div className={"text-sm font-medium"}>当前阶段</div>
            <div
              className={`${gameStatus === "running" || gameStatus === "pause" ? "text-5xl font-bold" : "text-5xl font-bold text-gray-500"}`}>
              {gameStatus === "running" || gameStatus === "pause" ? currentStageLocalization(currentStage) : "未开始"}
            </div>
          </div>
          <div className={"flex-col space-y-1"}>
            <div className={"text-sm font-medium"}>阶段剩余时间</div>
            <div
              className={`${gameStatus === "running" || gameStatus === "pause" ? "text-5xl font-bold" : "text-5xl font-bold text-gray-500"}`}>
              {gameStatus === "running" || gameStatus === "pause" ? secondsToTimerFormat(stageCountdown) : "未开始"}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
