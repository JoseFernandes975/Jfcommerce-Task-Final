export type Props = {
    text: string
}

export default function ButtonWhite({ text }: Props){
    return(
       <div className='jf-button-white'>{text}</div>
    );
}