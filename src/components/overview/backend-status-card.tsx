'use client'
import React, {useContext} from "react";
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import * as z from "zod";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {toast} from "@/components/ui/use-toast";
import {Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import {BackendUrlContext} from "@/context/BackendUrlContext";
import {SocketContext} from "@/context/SocketContext";

const BackendConnectionFormSchema = z.object({
  ip: z.string({required_error: "请输入IP地址！", invalid_type_error: "请输入有效的IP地址！"}).ip({
    version: "v4",
    message: "请输入有效的IP地址"
  }),
  port: z.number({
    required_error: "请输入端口号！",
    invalid_type_error: "请输入有效的端口号！"
  }).gte(1024, "端口号应介于1024-65535之间").lte(65535, "端口号应介于1024-65535之间")
})

export default function BackendStatusCard() {

  const {backendUrl, setBackendUrl} = useContext(BackendUrlContext)
  const socket = useContext(SocketContext)

  if (socket === undefined) {
    throw new Error("useContext must be used within a SocketProvider")
  }

  const { isConnected } = socket

  const statusColor = isConnected ? "text-green-500" : "text-red-500";
  const statusDot = "•";

  const form = useForm<z.infer<typeof BackendConnectionFormSchema>>({
    resolver: zodResolver(BackendConnectionFormSchema)
  })

  function onSubmit(data: z.infer<typeof BackendConnectionFormSchema>) {

    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    })

    setBackendUrl(`${data.ip}:${data.port}`);

  }

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
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className={"space-y-4"}>
            <div className={"flex justify-between space-x-4"}>
              <FormField
                control={form.control}
                name={"ip"}
                render={({field}) => (
                  <FormItem>
                    <FormLabel>IP地址</FormLabel>
                    <FormControl>
                      <Input placeholder={"127.0.0.1"} {...field}/>
                    </FormControl>
                    <FormDescription/>
                    <FormMessage/>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name={"port"}
                render={({field}) => (
                  <FormItem>
                    <FormLabel>端口号</FormLabel>
                    <FormControl>
                      <Input
                        placeholder={"4000"} {...field}
                        type={"number"}
                        onChange={(e) => {
                          const numericValue = parseInt(e.target.value, 10);
                          form.setValue("port", numericValue);
                        }}/>
                    </FormControl>
                    <FormDescription/>
                    <FormMessage/>
                  </FormItem>
                )}
              />
            </div>
            <Button type={"submit"} disabled={isConnected} className={"flex w-full"}>连接</Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  )
}
