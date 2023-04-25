import { Inter } from "next/font/google";
import NavigationBar from "@/components/NavigationBar";
import Introduction from "@/components/Introduction";
import Gallery from "@/components/Gallery";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <NavigationBar />
      <div className="flex flex-row">
        <div className="my-2 mx-2 mt-8">
          <Introduction />
        </div>
        {/* <div className="py-2">
          <Gallery />
        </div> */}
      </div>
    </div>
  );
}
