
type Props = {
    text: string
}

export default function CategoriesCard({ text }: Props){
    return(
      <div className="jf-category-card">{text}</div>
    );
}