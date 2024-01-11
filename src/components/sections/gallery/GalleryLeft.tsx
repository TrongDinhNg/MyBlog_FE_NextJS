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
            <h2 className="text-xl text-gray-900">{categories}</h2>
          </div>
          <div className="flex-grow">
            <p className="border-pink-500 text-sm text-amber-400">
              {title},{date.toLocaleDateString()}
            </p>
          </div>
        </div>
        <p className="text-base text-gray-800">{description}</p>
      </div>
    </div>
  );
};
