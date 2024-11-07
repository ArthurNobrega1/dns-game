import Base from "./Base";
import Monitor from "./Monitor";

interface Props {
  setDisplayFirstHash: React.Dispatch<React.SetStateAction<number>>;
  setDisplaySecondHash: React.Dispatch<React.SetStateAction<number>>;
}
export default function Computer({ setDisplayFirstHash, setDisplaySecondHash }: Props) {
  return (
    <div className="flex flex-col w-full h-full items-center justify-center gap-3">
      <Monitor setDisplayFirstHash={setDisplayFirstHash}  setDisplaySecondHash={setDisplaySecondHash} />
      <Base />
    </div>
  )
}