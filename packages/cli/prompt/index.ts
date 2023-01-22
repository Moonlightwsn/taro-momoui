import inquirer from "inquirer"
import packageName from "./packageName.js"
import port from "./port.js"
import devtool from "./devtool.js"
import installTool from "./installTool.js"

type QuestionOutput = {
  packageName: string
  port: number
  devtool: string
  installTool: string
}

export default (): Promise<QuestionOutput> =>
  inquirer.prompt([packageName(), port(), devtool(), installTool()])
