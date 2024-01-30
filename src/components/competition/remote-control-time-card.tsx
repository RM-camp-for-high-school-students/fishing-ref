'use client'
import {useContext} from "react";
import {SocketContext} from "@/context/SocketContext";
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {gameStatusLocalization, secondsToTimerFormat} from "@/lib/utils";

export default function RemoteControlTimeCard() {
  const socketContent = useContext(SocketContext)
  if (socketContent === undefined) {
    throw new Error("useContext must be used within a SocketProvider")
  }

  const {gameStatus, remoteControlTime} = socketContent

  const statusColor = gameStatus === "running" ? "text-green-500" : "text-red-500"
  const statusDot = "•"

  return (
    <Card className={'w-96'}>
      <CardHeader>
        <div className={"flex justify-between"}>
          <CardTitle className={"text-lg"}>遥控器</CardTitle>
          <span className={` ${statusColor}`}>{statusDot}</span>
        </div>
        <CardDescription>比赛双方遥控器操作时间</CardDescription>
      </CardHeader>
      <CardContent>
        <div className={"flex justify-between"}>
          <div className={"flex-col space-y-1"}>
            <div className={"text-sm font-medium"}>A队遥控器操作时间</div>
            <div
              className={`${gameStatus === "running" || gameStatus === "pause" ? "text-xl font-bold" : "text-xl font-bold text-gray-500"}`}>
              {gameStatus === "running" || gameStatus === "pause" ? secondsToTimerFormat(remoteControlTime[0]) : "比赛未开始"}
            </div>
          </div>
          <div className={"flex-col space-y-1"}>
            <div className={"text-sm font-medium"}>B队遥控器操作时间</div>
            <div
              className={`${gameStatus === "running" || gameStatus === "pause" ? "text-xl font-bold" : "text-xl font-bold text-gray-500"}`}>
              {gameStatus === "running" || gameStatus === "pause" ? secondsToTimerFormat(remoteControlTime[1]) : "比赛未开始"}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )

}
