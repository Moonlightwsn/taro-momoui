export default (defaultPackageName: string) => ({
  type: "input",
  name: "packageName",
  message: "set package name",
  default: defaultPackageName,
  validate(val: string) {
    if (val) return true
    return "Please enter package name"
  },
})
