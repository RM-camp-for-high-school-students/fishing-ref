'use client'
import {FishMongerStatus} from "@/types/devices";
import React from "react";
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {z} from "zod";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {toast} from "@/components/ui/use-toast";

const FishMongerTestingFormSchema = z.object({
  identifier: z.string({required_error: "请选择目标鱼贩！"}),
  state: z.string({required_error: "请选择目标状态！"})
})

const FishMongerTestingCard: React.FC<{ fishMongerStatusList: FishMongerStatus[] }> = ({fishMongerStatusList}) => {

  const areAllOnline = fishMongerStatusList.every((monger) => monger.isOnline);
  const statusColor = areAllOnline ? 'text-green-500' : 'text-red-500';
  const statusDot = "•";

  const form = useForm<z.infer<typeof FishMongerTestingFormSchema>>({
    resolver: zodResolver(FishMongerTestingFormSchema)
    }
  )

  function onSubmit(data: z.infer<typeof FishMongerTestingFormSchema>) {
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      )
    })
  }

  return (
    <Card className={"w-80"}>
      <CardHeader>
        <div className={"flex justify-between"}>
          <CardTitle className={"text-lg"}>鱼贩</CardTitle>
          <span className={` ${statusColor}`}>{statusDot}</span>
        </div>
        <CardDescription>场地道具鱼贩测试</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={form.handleSubmit(onSubmit)} className={"space-y-4"}>
          <div className={"flex justify-between space-x-4"}></div>
        </form>
      </CardContent>
    </Card>
  )
}

export default FishMongerTestingCard;
