import { ElectronjsIcon } from "@/components/icon/electronjs-icon"
import { JavascriptIcon } from "@/components/icon/javascript-icon"
import { NextjsIcon } from "@/components/icon/nextjs-icon"
import { NodejsIcon } from "@/components/icon/nodejs-icon"
import { ReactjsIcon } from "@/components/icon/react-icon"
import { TypescriptIcon } from "@/components/icon/typescript-icon"
import {
  Card,
  CardContent,
  CardFooter,
  CardTitle,
} from "@/components/ui/card"
import Link from "next/link"

export default function Stacks() {
  return (
    <div className="flex flex-wrap justify-center items-center gap-8">
  <Link href="https://nextjs.org/" target="_blank">
    <Card className="flex flex-col w-[150px] sm:w-[180px] items-center justify-center border-2 border-[#0070F3]">
      <CardContent className="p-[20px] sm:p-[30px]">
        <NextjsIcon />
      </CardContent>
      <CardFooter>
        <CardTitle className="text-[#0070F3] text-lg">Next</CardTitle>
      </CardFooter>
    </Card>
  </Link>

  <Link href="https://react.dev/" target="_blank">
    <Card className="flex flex-col w-[150px] sm:w-[180px] items-center justify-center border-2 border-[#2AC7E3]">
      <CardContent className="p-[20px] sm:p-[30px]">
        <ReactjsIcon />
      </CardContent>
      <CardFooter>
        <CardTitle className="text-[#2AC7E3] text-lg">React</CardTitle>
      </CardFooter>
    </Card>
  </Link>

  <Link href="https://nodejs.org/en" target="_blank">
    <Card className="flex flex-col w-[150px] sm:w-[180px] items-center justify-center border-2 border-[#8CC84B]">
      <CardContent className="p-[20px] sm:p-[30px]">
        <NodejsIcon />
      </CardContent>
      <CardFooter>
        <CardTitle className="text-[#8CC84B] text-lg">Node</CardTitle>
      </CardFooter>
    </Card>
  </Link>

  <Link href="https://www.electronjs.org/" target="_blank">
    <Card className="flex flex-col w-[150px] sm:w-[180px] items-center justify-center border-2 border-[#A2ECFB]">
      <CardContent className="p-[20px] sm:p-[30px]">
        <ElectronjsIcon />
      </CardContent>
      <CardFooter>
        <CardTitle className="text-[#A2ECFB] text-lg">Electron</CardTitle>
      </CardFooter>
    </Card>
  </Link>

  <Link href="https://www.javascript.com/" target="_blank">
    <Card className="flex flex-col w-[150px] sm:w-[180px] items-center justify-center border-2 border-[#F7DF1E]">
      <CardContent className="p-[20px] sm:p-[30px]">
        <JavascriptIcon />
      </CardContent>
      <CardFooter>
        <CardTitle className="text-[#F7DF1E] text-lg">Javascript</CardTitle>
      </CardFooter>
    </Card>
  </Link>

  <Link href="https://www.typescriptlang.org/" target="_blank">
    <Card className="flex flex-col w-[150px] sm:w-[180px] items-center justify-center border-2 border-[#3178C6]">
      <CardContent className="p-[20px] sm:p-[30px]">
        <TypescriptIcon />
      </CardContent>
      <CardFooter>
        <CardTitle className="text-[#3178C6] text-lg">Typescript</CardTitle>
      </CardFooter>
    </Card>
  </Link>
</div>
  )
}