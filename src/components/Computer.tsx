import Base from "./Base";
import Monitor from "./Monitor";

export default function Computer() {
  return (
    <div className="flex flex-col w-full h-full items-center justify-center gap-3">
        <Monitor/>
        <Base/>
    </div>
  )
}