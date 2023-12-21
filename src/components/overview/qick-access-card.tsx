import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {Button} from "@/components/ui/button";
import Link from "next/link";


export function QuickAccessCard() {
  return (
    <Card className={"w-64"}>
      <CardHeader>
        <CardTitle className={"text-lg"}>快速访问</CardTitle>
        <CardDescription>快速访问裁判系统常用功能</CardDescription>
      </CardHeader>
      <CardContent>
        <div className={"flex items-center justify-between space-x-1"}>
          <Button asChild>
          <Link href={"/competition"}>正式比赛</Link>
        </Button>
          <Button asChild variant={"outline"}>
            <Link href={"/testing"}>测试模式</Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
