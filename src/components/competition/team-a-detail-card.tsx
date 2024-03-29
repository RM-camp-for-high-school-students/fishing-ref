'use client'
import {useContext} from "react";
import {SocketContext} from "@/context/SocketContext";
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import {secondsToTimerFormat} from "@/lib/utils";

export default function TeamADetailCard() {
  const socketContent = useContext(SocketContext)
  if (socketContent === undefined) {
    throw new Error("useContext must be used within a SocketProvider")
  }

  const {
    gameStatus,
    originalScore,
    finalScore,
    invasionTime,
    remoteControlTime,
    fishmongerCoolDown,
    gainMultiplier,
    penaltyMultiplier
  }
    = socketContent

  const statusColor = gameStatus === "running" ? "text-green-500" : "text-red-500"
  const statusDot = "•"

  return (
    <Card className={"w-1/2"}>
      <CardHeader>
        <div className={"flex justify-between"}>
          <CardTitle className={"text-lg"}>蓝方</CardTitle>
          <span className={` ${statusColor}`}>{statusDot}</span>
        </div>
      </CardHeader>
      <CardContent>
        <div className={"flex justify-between"}>
          <div className={'flex-col space-y-4'}>
            <div className={'flex-col space-y-1'}>
              <div className={'text-sm font-medium'}>原始得分</div>
              <div
                className={`${gameStatus === "running" || gameStatus === "pause" || gameStatus === "end" ? "text-3xl font-bold" : "text-3xl font-bold text-gray-500"}`}>
                {gameStatus === "running" || gameStatus === "pause" || gameStatus === "end" ? originalScore[0].toString() : "未开始"}
              </div>
            </div>
            <div className={'flex-col space-y-1'}>
              <div className={'text-sm font-medium'}>增益倍率</div>
              <div
                className={`${gameStatus === "running" || gameStatus === "pause" || gameStatus === "end" ? "text-3xl font-bold" : "text-3xl font-bold text-gray-500"}`}>
                {gameStatus === "running" || gameStatus === "pause" || gameStatus === "end" ? gainMultiplier[0].toFixed(1) : "未开始"}
              </div>
            </div>
            <div className={'flex-col space-y-1'}>
              <div className={'text-sm font-medium'}>惩罚倍率</div>
              <div
                className={`${gameStatus === "running" || gameStatus === "pause" || gameStatus === "end" ? "text-3xl font-bold" : "text-3xl font-bold text-gray-500"}`}>
                {gameStatus === "running" || gameStatus === "pause" || gameStatus === "end" ? penaltyMultiplier[0].toFixed(3) : "未开始"}
              </div>
            </div>
            <div className={'flex-col space-y-1'}>
              <div className={'text-sm font-medium'}>实际得分</div>
              <div
                className={`${gameStatus === "running" || gameStatus === "pause" || gameStatus === "end" ? "text-3xl font-bold" : "text-3xl font-bold text-gray-500"}`}>
                {gameStatus === "running" || gameStatus === "pause" || gameStatus === "end" ? finalScore[0].toString() : "未开始"}
              </div>
            </div>
          </div>
          <div className={'flex-col space-y-4'}>
            <div className={'flex-col space-y-1'}>
              <div className={'text-sm font-medium'}>鱼贩 X 冷却时间</div>
              <div
                className={`${gameStatus === "running" || gameStatus === "pause" || gameStatus === "end" ? "text-3xl font-bold" : "text-3xl font-bold text-gray-500"}`}>
                {gameStatus === "running" || gameStatus === "pause" || gameStatus === "end" ? secondsToTimerFormat(fishmongerCoolDown[0]) : "未开始"}
              </div>
            </div>
            <div className={'flex-col space-y-1'}>
              <div className={'text-sm font-medium'}>鱼贩 Y 冷却时间</div>
              <div
                className={`${gameStatus === "running" || gameStatus === "pause" || gameStatus === "end" ? "text-3xl font-bold" : "text-3xl font-bold text-gray-500"}`}>
                {gameStatus === "running" || gameStatus === "pause" || gameStatus === "end" ? secondsToTimerFormat(fishmongerCoolDown[1]) : "未开始"}
              </div>
            </div>
            <div className={'flex-col space-y-1'}>
              <div className={'text-sm font-medium'}>遥控器操作时间</div>
              <div
                className={`${gameStatus === "running" || gameStatus === "pause" || gameStatus === "end" ? "text-3xl font-bold" : "text-3xl font-bold text-gray-500"}`}>
                {gameStatus === "running" || gameStatus === "pause" || gameStatus === "end" ? secondsToTimerFormat(remoteControlTime[0]) : "未开始"}
              </div>
            </div>
            <div className={'flex-col space-y-1'}>
              <div className={'text-sm font-medium'}>进入对方基地时间</div>
              <div
                className={`${gameStatus === "running" || gameStatus === "pause" || gameStatus === "end" ? "text-3xl font-bold" : "text-3xl font-bold text-gray-500"}`}>
                {gameStatus === "running" || gameStatus === "pause" || gameStatus === "end" ? secondsToTimerFormat(invasionTime[0]) : "未开始"}
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
