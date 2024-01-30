import {useContext} from "react";
import {SocketContext} from "@/context/SocketContext";
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";

export default function Scorecard() {
  const socketContent = useContext(SocketContext)
  if (socketContent === undefined) {
    throw new Error("useContext must be used within a SocketProvider")
  }

  const {gameStatus, score} = socketContent

  return (
    <Card className={"w-96"}>
      <CardHeader>
        <CardTitle className={"text-lg"}>比分</CardTitle>
        <CardDescription>比赛双方比分</CardDescription>
      </CardHeader>
      <CardContent>
        <div className={"flex justify-between"}>
          <div className={"flex-col space-y-1"}>
            <div className={"text-sm font-medium"}>A队得分</div>
            <div
              className={`${gameStatus === "running" || gameStatus === "pause" ? "text-xl font-bold" : "text-xl font-bold text-gray-500"}`}>
              {gameStatus === "running" || gameStatus === "pause" ? score[0].toString() : "比赛未开始"}
            </div>
          </div>
          <div className={"flex-col space-y-1"}>
            <div className={"text-sm font-medium"}>B队得分</div>
            <div
              className={`${gameStatus === "running" || gameStatus === "pause" ? "text-xl font-bold" : "text-xl font-bold text-gray-500"}`}>
              {gameStatus === "running" || gameStatus === "pause" ? score[1].toString() : "比赛未开始"}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
