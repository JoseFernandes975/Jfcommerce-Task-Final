/* eslint-disable @typescript-eslint/no-explicit-any */
export function update(inputs: any, name: string, newValue: any){
    return {...inputs, [name]: {...inputs[name], value: newValue}}
}

export function updateAll(inputs: any, newValue: any){
    const newInput : any  = {};

    for(const name in inputs) {
        newInput[name] = {...inputs[name], value: newValue[name]}
    }

    return newInput;
}