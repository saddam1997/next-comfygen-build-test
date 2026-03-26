
import Card from './Card'
import { parseHTMLString } from "../../lib/parseHTML";
import HeadingTwo from '../ui/HeadingTwo';
import ParagraphText from '../ui/ParagraphText';

const Index = ({ FData }) => {
    return (
        <div>

            <header className="text-center max-w-7xl mx-auto space-y-3  mb-4">
                <HeadingTwo color="black" text={FData.heading} />
                <ParagraphText color="black" text={FData.description} />
            </header>


            <Card Data={FData} />
        </div>
    )
}

export default Index
