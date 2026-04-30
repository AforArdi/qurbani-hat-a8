import { getTips } from "@/lib/services";
import { Card } from "@heroui/react";
import { FaCheck } from "react-icons/fa6";

const tips = {
  "dos": [
    {
      "id": 1,
      "text": "Choose healthy and active animals"
    },
    {
      "id": 2,
      "text": "Book your animal early"
    },
    {
      "id": 3,
      "text": "Verify seller authenticity"
    },
    {
      "id": 4,
      "text": "Check weight and age properly"
    },
    {
      "id": 5,
      "text": "Inspect the animal physically if possible"
    },
    {
      "id": 6,
      "text": "Ensure proper vaccination and care"
    },
    {
      "id": 7,
      "text": "Confirm delivery details in advance"
    },
    {
      "id": 8,
      "text": "Use secure and trusted payment methods"
    },
    {
      "id": 9,
      "text": "Keep all booking and payment records"
    },
    {
      "id": 10,
      "text": "Follow proper Qurbani guidelines and intention"
    }
  ],
  "donts": [
    {
      "id": 11,
      "text": "Do not buy sick or weak animals"
    },
    {
      "id": 12,
      "text": "Avoid last-minute booking rush"
    },
    {
      "id": 13,
      "text": "Do not trust unverified sellers"
    },
    {
      "id": 14,
      "text": "Avoid unsafe or unknown payment methods"
    },
    {
      "id": 15,
      "text": "Do not ignore animal health conditions"
    },
    {
      "id": 16,
      "text": "Avoid overpaying without price comparison"
    },
    {
      "id": 17,
      "text": "Do not skip checking delivery confirmation"
    },
    {
      "id": 18,
      "text": "Avoid incomplete or unclear booking details"
    },
    {
      "id": 19,
      "text": "Do not rely on fake images or misleading ads"
    },
    {
      "id": 20,
      "text": "Avoid rushing the Qurbani process without preparation"
    }
  ]
}

const ExtraSections = async () => {
    // const tips = await getTips();
    // console.log(tips);

    return (
        <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-[#154734] text-center my-5">Qurbani Tips</h2>
            <div className="flex items-center">
                <Card>
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
                </Card>
            </div>
        </div>
    );
}

export default ExtraSections;