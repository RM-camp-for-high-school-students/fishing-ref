import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";

export default function CompetitionPage() {
  return (
    <section className={"container grid items-center gap-6 pb-8 pt-6 md:py-10"}>
      <h2 className={"text-3xl font-bold tracking-tight"}>正式比赛</h2>
      <div className={"flex-1 items-center justify-between space-x-2"}>
        <Card className={"w-48"}>
          <CardHeader className={"flex flex-row items-center justify-between space-y-0 pb-2"}>
            <CardTitle className={"text-sm font-medium"}>
              比赛剩余时间
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className={"text-3xl font-bold"}>7:00</div>
          </CardContent>
        </Card>
        <Card className={"w-48"}>
          <CardHeader className={"flex flex-row items-center justify-between space-y-0 pb-2"}>
            <CardTitle className={"text-sm font-medium"}>
              当前阶段剩余时间
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className={"text-3xl font-bold"}>00:17</div>
          </CardContent>
        </Card>
      </div>

    </section>
  )
}
