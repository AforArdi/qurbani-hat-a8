import { getTips } from "@/lib/services";
import Marquee from "react-fast-marquee";

const ExtraSections = async () => {
  const tips = await getTips();
  console.log(tips);

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
        <Marquee pauseOnHover={true} speed={50} gradient={false}>
          <div className="flex items-center justify-center gap-4">
            {tips.map(tip =>
              <div key={tip.id} className="card bg-base-100 shadow-sm">
                <div className="card-body flex items-center gap-2">
                  <h2 className="card-title text-[#154734]">{tip.text}</h2>
                </div>
              </div>)}
          </div>
        </Marquee>
      </div>
    </div>
  );
}

export default ExtraSections;