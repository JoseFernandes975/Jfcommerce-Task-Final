/* eslint-disable @typescript-eslint/no-explicit-any */
export default function FormInput(props: any) {

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { validation, dirty, invalid, onTurnDirty, ...inputProps } = props;

    function handleBlur(){
     onTurnDirty(props.name);
    }

    return(
       <input { ...inputProps } onBlur={handleBlur} data-invalid={invalid} data-dirty={dirty} />
    )
}