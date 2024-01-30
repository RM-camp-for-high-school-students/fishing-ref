'use client'
import {useEffect, useState} from "react";
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";

export default function DatetimeCard() {
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

  const [formattedDate, setFormattedDate] = useState('');

  const updateDate = () => {
    const now = new Date();
    const dateString = now.toLocaleDateString("zh-CN");
    setFormattedDate(dateString);
  };

  useEffect(() => {
    updateDate();
    const intervalId = setInterval(updateDate, 5000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <Card className={"w-96"}>
      <CardHeader>
        <CardTitle className={"text-lg"}>日期与时间</CardTitle>
        <CardDescription>当前日期与时间显示</CardDescription>
      </CardHeader>
      <CardContent>
        <div className={"flex justify-between"}>
          <div className={"flex-col space-y-1"}>
            <div className={"text-sm font-medium"}>日期</div>
            <div className={"text-xl font-bold"}>{formattedDate}</div>
          </div>
          <div className={"flex-col space-y-1"}>
            <div className={"text-sm font-medium"}>时间</div>
            <div className={"text-xl font-bold"}>{formattedTime}</div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
