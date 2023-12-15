'use client'
import React, {ChangeEvent, useState} from "react";
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {Input} from "@/components/ui/input"
import {BackendStatus} from "@/types/backend";
import {Button} from "@/components/ui/button";


const BackendStatusCard: React.FC<BackendStatus> = ({isOnline}) => {

  const statusColor = isOnline ? 'text-green-500' : 'text-red-500';
  const statusDot = "•";

  const [backendURL, setBackendURL] = useState("")

  const handleBackendURLChange = (event: ChangeEvent<HTMLInputElement>) => {
    setBackendURL(event.target.value);
  };


  return (
    <Card className={"w-96"}>
      <CardHeader>
        <div className={"flex justify-between"}>
          <CardTitle className={"text-lg"}>后端</CardTitle>
          <span className={` ${statusColor}`}>{statusDot}</span>
        </div>
        <CardDescription>裁判系统后端连接状态</CardDescription>
      </CardHeader>
      <CardContent>
        <div className={"flex justify-between space-x-2"}>
          <Input id={"backend-url"} type={"url"} placeholder={"http://127.0.0.1:4000"} value={backendURL}
                 onChange={handleBackendURLChange} disabled={isOnline}/>
          <Button className={"w-24"} disabled={isOnline}>连接</Button>
        </div>
      </CardContent>
    </Card>
  )
}
export default BackendStatusCard;
