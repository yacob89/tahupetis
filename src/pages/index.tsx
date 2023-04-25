import { Inter } from "next/font/google";
import NavigationBar from "@/components/NavigationBar";
import Introduction from "@/components/Introduction";
import Gallery from "@/components/Gallery";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <NavigationBar />
      <div className="max-w-7xl mx-auto px-2 sm:px-2 lg:px-4">
        <div className="py-2">
          <Introduction />
        </div>
        <div className="py-2">
          <Gallery />
        </div>
      </div>
    </div>
  );
}
