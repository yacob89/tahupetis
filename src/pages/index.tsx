import { Inter } from "next/font/google";
import Introduction from "@/components/Introduction";
import Gallery from "@/components/Gallery";
import Story from "@/components/Story";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <div className="flex flex-row">
        <div className="my-2 mx-2 mt-20">
          <Introduction />
        </div>
      </div>
      <div className="flex justify-center flex-nowrap">
        <Gallery />
      </div>
      <div className="flex justify-center mt-12">
        <Story />
      </div>
    </div>
  );
}
