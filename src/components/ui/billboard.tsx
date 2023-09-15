import { Billboard } from "@/types";

interface BillboardProps {
  data: Billboard;
}

const Billboard: React.FC<BillboardProps> = ({ data }) => {
  return (
    <div className="p-4 sm:p-6 lg:p-8 rounded-xl overflow-hidden">
      <div
        style={{ backgroundImage: `url(${data?.imageUrl})` }}
        className="rounded-xl relative aspect-square md:aspect-[2.4/1] overflow-hidden bg-cover after:bg-black/40 after:content-[''] after:absolute after:inset-0 after:z-[0]"
      >
        <div className="absolute h-full w-full flex flex-col justify-center items-center text-center gap-y-8 z-[1]">
          <p className="font-bold text-white text-3xl sm:text-5xl lg:text-6xl sm:max-w-xl max-w-xs">
            {data.label}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Billboard;
