import { Input } from "@/components/ui/input";

export default function Home() {
  return (
    <div className="w-full h-full overflow-auto">
      <div className="absolute top-1/2 left-1/2">
        <form action="#">
          <Input type="text" />
        </form>
      </div>
    </div>
  );
}
