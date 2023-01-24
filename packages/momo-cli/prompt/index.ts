import inquirer from "inquirer"
import packageName from "./packageName.js"
import installTool from "./installTool.js"

type QuestionOutput = {
  packageName: string
  installTool: string
}

export default (): Promise<QuestionOutput> => {
  return inquirer.prompt([packageName(), installTool()])
}
