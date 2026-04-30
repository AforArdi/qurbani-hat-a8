import { getTips } from "@/lib/services";
import { Card } from "@heroui/react";
import { FaCheck } from "react-icons/fa6";

const ExtraSections = async () => {
    const tips = await getTips();
    console.log(tips);

    return (
        <div className="max-w-6xl mx-auto">
            <div>
                <h2 className="text-4xl text-[#154734] text-center my-5">Qurbani Tips</h2>
                <Card>
                    <Card.Header>
                        <Card.Title>
                            <span>Dos</span>
                        </Card.Title>
                        <Card.Description>
                            {
                                tips.map(tip=>
                                    <span key={tip.dos.id}>
                                        <FaCheck></FaCheck> {tip.dos.text}
                                    </span>
                                )
                            }
                        </Card.Description>
                    </Card.Header>
                    <Card.Footer>
                        h2
                    </Card.Footer>
                </Card>
            </div>
        </div>
    );
}

export default ExtraSections;