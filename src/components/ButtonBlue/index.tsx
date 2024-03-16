export type Props = {
    text: string
}

export default function ButtonBlue({text}: Props){
    return(
       <div className='jf-buttom-blue'>{text}</div>
    );
}