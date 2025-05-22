import { MlDropDown } from "../ml-dropdown/ml-dropdown"

interface MlFilterProps {
  genres: string[];
  value: string;
  onChange: (genre: string) => void;
}

export const MlFilter = ({ genres, value, onChange }: MlFilterProps) => {
    return (
        <div className="flex justify-end items-center self-stretch gap-6">
            <div className="text-xl">Genre</div>
            <MlDropDown genres={genres} value={value} onChange={onChange}/>
        </div>
    )
}