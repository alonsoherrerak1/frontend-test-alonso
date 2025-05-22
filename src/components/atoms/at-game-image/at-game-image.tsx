import Image from "next/image";

type AtGameImageProps = {
  imgPath: string;
  imgAlt: string;
};

export const AtGameImage = ({ imgPath, imgAlt }: AtGameImageProps) => {
  return (
    <Image src={imgPath} alt={imgAlt} className="rounded-t-lg" width={400} height={240} />
  );
};
