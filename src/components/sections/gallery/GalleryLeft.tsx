interface Props {
    bgImg: string;
    categories: string;
    date: Date;
    title: string;
    description: string;
}
export const GalleryLeft: React.FC<Props> = ({
    bgImg,
    categories,
    date,
    title,
    description,
}) => {
    return (
        <div>
            <div
                className=" mb-5"
                style={{
                    backgroundImage: `url(${bgImg})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "auto",
                    height: "512px",
                }}
            >
                <div className="flex justify-between">
                    <div className="flex-shrink-0">
                        <h2 className="text-gray-900 text-xl">{categories}</h2>
                    </div>
                    <div className="flex-grow">
                        <p className="text-amber-400 border-pink-500 text-sm">
                            {title},{date.toLocaleDateString()}
                        </p>
                    </div>
                </div>
                <p className="text-gray-800 text-base">{description}</p>
            </div>
            <div className="">
                <img src={bgImg} alt="" />
            </div>
            <div className="h-14 bg-gradient-to-r from-purple-500 to-pink-500">
                Hello
            </div>
            <p className="text-blue-600/100">The quick brown fox...</p>
            <p className="text-blue-600/75">The quick brown fox...</p>
            <p className="text-blue-600/50">The quick brown fox...</p>
            <p className="text-blue-600/25">The quick brown fox...</p>
            <p className="text-blue-600/0">The quick brown fox...</p>
        </div>
    );
};
