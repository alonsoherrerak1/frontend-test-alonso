import { MlFilter } from "../ml-filter/ml-filter"

interface MlHeadingProps {
  genres: string[];
  value: string;
  onChange: (genre: string) => void;
}

export const MlHeading = ({ genres, value, onChange }: MlHeadingProps) => {
    return (
        <div className="flex flex-col items-start gap-8 px-6 py-8 lg:gap-12 lg:py-12 lg:px-32">
            <div className="text-4xl">Top Sellers</div>
            <MlFilter genres={genres} value={value} onChange={onChange}/>
        </div>
    )
}