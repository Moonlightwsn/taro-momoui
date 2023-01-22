declare const _default: () => {
    type: string;
    name: string;
    message: string;
    validate(val: string): true | "Please enter package name";
};
export default _default;
