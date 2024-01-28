'use client'
import React, {createContext, ReactNode, useContext, useEffect, useState} from "react";
import {io, Socket} from "socket.io-client";
import {BackendUrlContext} from "@/context/BackendUrlContext";

interface SocketContextType {
  socket: Socket | null;
  isConnected: boolean;
  gameStatus: string;
  gameCountdown: number;
  currentStage: string;
  stageCountdown: number;
  score: number[];
  bonusState: boolean[];
  bonusCountdown: number[];
}

export const SocketContext = createContext<SocketContextType | undefined>(undefined)

interface SocketProviderProps {
  children: ReactNode;
}

export const SocketProvider: React.FC<SocketProviderProps> = ({children}) => {
  const [socket, setSocket] = useState<Socket | null>(null)
  const {backendUrl, setBackendUrl} = useContext(BackendUrlContext)

  const [isConnected, setIsConnected] = useState(false)
  const [gameStatus, setGameStatus] = useState("")
  const [gameCountdown, setGameCountdown] = useState(0)
  const [currentStage, setCurrentStage] = useState("")
  const [stageCountdown, setStageCountdown] = useState(0)
  const [score, setScore] = useState<number[]>([])
  const [bonusState, setBonusState] = useState<boolean[]>([])
  const [bonusCountdown, setBonusCountdown] = useState<number[]>([])

  useEffect(() => {
    const newSocket = io(backendUrl)

    setSocket(newSocket)

    newSocket.on('connect', () => {
      setIsConnected(true);
    })

    newSocket.on('disconnect', () => {
      setIsConnected(false)
    })

    const fetchInterval = 500

    const intervalId = setInterval(() => {
      newSocket.emit("fetch_game_data", () => {
        console.log("Request sent")
      }, fetchInterval)
    })

    newSocket.on('game_status', (newData) => {
      setGameStatus(JSON.parse(newData).gameStatus)
      console.log(JSON.stringify(newData))
    })

    newSocket.on('game_countdown', (newData) => {
      setGameCountdown(JSON.parse(newData).gameCountdown)
      console.log(JSON.stringify(newData))
    })

    newSocket.on('current_stage', (newData) => {
      setCurrentStage(JSON.parse(newData).currentStage)
      console.log(JSON.stringify(newData))
    })

    newSocket.on('stage_countdown', (newData) => {
      setStageCountdown(JSON.parse(newData).stageCountdown)
      console.log(JSON.stringify(newData))
    })

    newSocket.on('score', (newData) => {
      setScore(JSON.parse(newData).score)
      console.log(JSON.stringify(newData))
    })

    newSocket.on('bonus', (newData) => {
      setBonusState(JSON.parse(newData).bonusState)
      setBonusCountdown(JSON.parse(newData).bonusCountdown)
      console.log(JSON.stringify(newData))
    })

    return () => {
      clearInterval(intervalId)
      newSocket.disconnect()
    }
  }, [backendUrl])

  return (
    <SocketContext.Provider value={{
      isConnected,
      gameStatus,
      gameCountdown,
      currentStage,
      stageCountdown,
      score,
      bonusState,
      bonusCountdown,
      socket
    }}>
      {children}
    </SocketContext.Provider>
  )
}
