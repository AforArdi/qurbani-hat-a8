import { getTips } from "@/lib/services";
import { Card } from "@heroui/react";
import { FaCheck } from "react-icons/fa6";



const ExtraSections = async () => {
  // const tips = await getTips();
  // console.log(tips);

  return (
    <div className="max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold text-[#154734] text-center my-5">Qurbani Tips</h2>
      <div className="flex items-center">
        {/* <Card>
                    <Card.Header>
                        <Card.Title>
                            <span className="text-4xl text-bold text-center text-[#154734] block w-full mb-4">Dos</span>
                        </Card.Title>
                        <Card.Description className="space-y-4">
                            {
                                tips.dos.map(tip =>
                                    <span key={tip.id}
                                        className="flex items-center gap-2 text-xl font-medium"
                                    >
                                        <FaCheck></FaCheck> {tip.text}
                                    </span>
                                )
                            }
                        </Card.Description>
                    </Card.Header>
                    <Card.Footer>
                        footer
                    </Card.Footer>
                </Card> */}
        <div className="card w-96 bg-base-100 card-xs shadow-sm">
          <div className="card-body">
            <h2 className="card-title">Xsmall Card</h2>
            <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
            <div className="justify-end card-actions">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExtraSections;