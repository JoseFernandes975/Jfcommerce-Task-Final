/* eslint-disable @typescript-eslint/no-explicit-any */
export default function FormInput(props: any) {

    const { ...inputProps } = props;

    return(
       <input { ...inputProps }/>
    )
}