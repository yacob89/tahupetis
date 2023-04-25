import Image from "next/image";
import { Inter } from "next/font/google";
import NavigationBar from "@/components/NavigationBar";
import { Typography } from "@material-tailwind/react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <NavigationBar />
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="py-8">
          <div className="mx-auto max-w-screen-md py-12">
            <Typography variant="h1" color="black" className="mb-2">
              What is Material Tailwind
            </Typography>
            <Typography color="black" className="font-normal">
              Can you help me out? you will get a lot of free exposure doing
              this can my website be in english?. There is too much white space
              do less with more, so that will be a conversation piece can you
              rework to make the pizza look more delicious other agencies charge
              much lesser can you make the blue bluer?. I think we need to start
              from scratch can my website be in english?, yet make it sexy
              i&apos;ll pay you in a week we don&apos;t need to pay upfront i
              hope you understand can you make it stand out more?. Make the font
              bigger can you help me out? you will get a lot of free exposure
              doing this that&apos;s going to be a chunk of change other
              agencies charge much lesser. Are you busy this weekend? I have a
              new project with a tight deadline that&apos;s going to be a chunk
              of change. There are more projects lined up charge extra the next
              time.
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
}
