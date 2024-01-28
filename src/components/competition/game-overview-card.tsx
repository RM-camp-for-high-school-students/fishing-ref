'use client'
import {useContext} from "react";
import {SocketContext} from "@/context/SocketContext";

export default function GameOverviewCard() {
  const socketContent = useContext(SocketContext)
  if (socketContent === undefined) {
    throw new Error("useContext must be used within a SocketProvider")
  }

  const { isConnected } = socketContent

  return (
    <div></div>
  )
}
