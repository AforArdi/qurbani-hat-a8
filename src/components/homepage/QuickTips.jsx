import Marquee from "react-fast-marquee";

const QuickTips = ({tips}) => {
    return (
        <div className="my-20">
            <h2 className="text-4xl font-bold text-[#154734] text-center my-5">Qurbani Tips</h2>
            <div className="flex items-center">
                <Marquee pauseOnHover={true} speed={100} gradient={false}>
                    <div className="flex items-center justify-center gap-4">
                        {tips.map(tip =>
                            <div key={tip.id} className="card bg-base-100 shadow-sm">
                                <div className="card-body flex items-center gap-2">
                                    <h2 className="card-title font-bengali text-[#154734]">{tip.text}</h2>
                                </div>
                            </div>)}
                    </div>
                </Marquee>
            </div>
        </div>
    );
}

export default QuickTips;