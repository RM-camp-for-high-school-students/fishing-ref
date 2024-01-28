'use client'
import {createContext, ReactNode, useContext, useEffect, useState} from "react";
import {io, Socket} from "socket.io-client";
import {BackendUrlContext} from "@/context/BackendUrlContext";

interface SocketContextType {
  socket: Socket | null;
  isConnected: boolean;
}

export const SocketContext = createContext<SocketContextType | undefined>(undefined)

interface SocketProviderProps {
  children: ReactNode;
}

export const SocketProvider: React.FC<SocketProviderProps> = ({ children }) => {
  const [isConnected, setIsConnected] = useState(false)
  const [socket, setSocket] = useState<Socket | null>(null)
  const {backendUrl, setBackendUrl} = useContext(BackendUrlContext)

  useEffect(() => {
    const newSocket = io(backendUrl)

    setSocket(newSocket)

    newSocket.on('connect', () => {
      setIsConnected(true);
    })

    newSocket.on('disconnect', () => {
      setIsConnected(false)
    })

    newSocket.on('game_status', (newData) => {
      console.log(JSON.stringify(newData))
    })

    newSocket.on('countdown', (newData) => {
      console.log(JSON.stringify(newData))
    })

    newSocket.on('current_stage', (newData) => {
      console.log(JSON.stringify(newData))
    })

    newSocket.on('stage_countdown', (newData) => {
      console.log(JSON.stringify(newData))
    })

    newSocket.on('score', (newData) => {
      console.log(JSON.stringify(newData))
    })

    newSocket.on('bonus', (newData) => {
      console.log(JSON.stringify(newData))
    })

    return () => {
      newSocket.disconnect()
    }
  }, [backendUrl])

  return (
    <SocketContext.Provider value={{isConnected, socket}}>
      {children}
    </SocketContext.Provider>
  )
}
