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

export function validate(inputs: any, name: string){
    if(!inputs[name].validation){
        return inputs;
    }

    const isInvalid = !inputs[name].validation(inputs[name].value);
    return {...inputs, [name]: {...inputs[name], invalid: isInvalid.toString()}}
}

export function updateAndValidate(inputs: any, name: string, newValue: string){
   const dataUpdate = update(inputs, name, newValue);
   const dataValidate = validate(dataUpdate, name);
   return dataValidate;
}