declare const _default: (defaultPackageName: string) => {
    type: string;
    name: string;
    message: string;
    default: string;
    validate(val: string): true | "Please enter package name";
};
export default _default;
