export default (defaultPackageName) => ({
    type: "input",
    name: "packageName",
    message: "set package name",
    default: defaultPackageName,
    validate(val) {
        if (val)
            return true;
        return "Please enter package name";
    },
});
