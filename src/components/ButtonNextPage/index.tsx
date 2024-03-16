type Props = {
    text: string;
}

export default function ButtonNewPage({text}: Props){
    return(
        <button className="jf-btn-next-page">{text}</button>
    )
}