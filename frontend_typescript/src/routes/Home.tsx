import { useParams } from "react-router-dom";

export default function Home(): JSX.Element {
    const { topic } = useParams();
    return (
        <div>{topic}</div>
    )
}