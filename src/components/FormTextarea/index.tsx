/* eslint-disable @typescript-eslint/no-explicit-any */
export default function FormTextarea(props: any){

    const { dirty, invalid, onTurnDirty, validation, ...textareaProps } = props;

    function handleBlur(){
        onTurnDirty(props.name);
    }

    return(
      <textarea { ...textareaProps } data-dirty={dirty} data-invalid={invalid} onBlur={handleBlur}  />
    );
}