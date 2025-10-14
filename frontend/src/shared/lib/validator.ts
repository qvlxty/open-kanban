export const requiredStringValidator = {
    name: "requiredString",
    validator: (text: string) => text.length > 0,
}

export const requiredNumberValidator = {
    name: "requiredNumber",
    validator: (v: number | null) => v !== null,
}