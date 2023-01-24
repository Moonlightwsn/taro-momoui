export default () => ({
  type: "list",
  name: "installTool",
  message: "select installation tool",
  default: "pnpm",
  choices: [{ name: "pnpm" }, { name: "yarn" }, { name: "npm" }],
})
