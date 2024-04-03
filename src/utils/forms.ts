/* eslint-disable no-var */
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

export function toValues(inputs: any){
    const newFormData : any = {};

    for(var name in inputs){
        newFormData[name] = inputs[name].value;
    }

    return newFormData;
}

export function toDirty(inputs: any, name: string){
    return {...inputs, [name]: {...inputs[name], dirty: "true"} };
}

export function toDirtyAll(inputs: any){
    const newFormData : any = {};

    for(var name in inputs){
        newFormData[name] = {...inputs[name], dirty: "true"};
    }

    return newFormData;
}

export function validateAll(inputs: any){
    const newFormData : any = {};

    for(var name in inputs){

        if(inputs[name].validation){
            const isInvalid = !inputs[name].validation(inputs[name].value);
            newFormData[name] = {...inputs[name], invalid: isInvalid.toString()}
        } 
        else {
            newFormData[name] = {...inputs[name]};
        }
    }

    return newFormData;
}

export function dirtyAndValidateAll(inputs: any){
  return validateAll(toDirtyAll(inputs));
}

export function hasAnyInvalid(inputs: any){
    for(var name in inputs){
      if(inputs[name].invalid === "true" && inputs[name].dirty === "true"){
        return true;
      }
    }
    return false;
}