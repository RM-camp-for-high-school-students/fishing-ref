'use client'
import {useContext} from "react";
import {SocketContext} from "@/context/SocketContext";
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {bonusStateLocalization, secondsToTimerFormat} from "@/lib/utils";

export default function BonusCard() {
  const socketContent = useContext(SocketContext)
  if (socketContent === undefined) {
    throw new Error("useContext must be used within a SocketProvider")
  }

  const {gameStatus, bonusState, bonusCountdown} = socketContent

  const statusColor = gameStatus === "running" ? "text-green-500" : "text-red-500"
  const statusDot = "•"

  return (
    <Card className={"w-96"}>
      <CardHeader>
        <div className={"flex justify-between"}>
          <CardTitle className={"text-lg"}>打窝</CardTitle>
          <span className={` ${statusColor}`}>{statusDot}</span>
        </div>
        <CardDescription>比赛双方增益状态</CardDescription>
      </CardHeader>
      <CardContent>
        <div className={"flex justify-between"}>
          <div className={"flex-col space-y-1"}>
            <div className={"flex-col space-y-1"}>
              <div className={"text-sm"}>A队增益状态</div>
              <div
                className={`${gameStatus === "running" || gameStatus === "pause" ? "text-xl font-bold" : "text-xl font-bold text-gray-500"}`}>
                {gameStatus === "running" || gameStatus === "pause" ? bonusStateLocalization(bonusState[0]) : "比赛未开始"}
              </div>
            </div>
            <div className={"flex-col space-y-1"}>
              <div className={"text-sm"}>B队增益状态</div>
              <div
                className={`${gameStatus === "running" || gameStatus === "pause" ? "text-xl font-bold" : "text-xl font-bold text-gray-500"}`}>
                {gameStatus === "running" || gameStatus === "pause" ? bonusStateLocalization(bonusState[1]) : "比赛未开始"}
              </div>
            </div>
          </div>
          <div className={"flex-col space-y-1"}>
            <div className={"flex-col space-y-1"}>
              <div className={"text-sm"}>A队增益剩余时间</div>
              <div
                className={`${gameStatus === "running" || gameStatus === "pause" ? "text-xl font-bold" : "text-xl font-bold text-gray-500"}`}>
                {gameStatus === "running" || gameStatus === "pause" ? secondsToTimerFormat(bonusCountdown[0]) : "比赛未开始"}
              </div>
            </div>
            <div className={"flex-col space-y-1"}>
              <div className={"text-sm"}>B队增益剩余时间</div>
              <div
                className={`${gameStatus === "running" || gameStatus === "pause" ? "text-xl font-bold" : "text-xl font-bold text-gray-500"}`}>
                {gameStatus === "running" || gameStatus === "pause" ? secondsToTimerFormat(bonusCountdown[1]) : "比赛未开始"}
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
