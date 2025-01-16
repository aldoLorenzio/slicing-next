import Image from "next/image";
import { Source_Sans_3 } from "next/font/google";

const source_sans_font = Source_Sans_3({
  subsets: ["latin"],
  weight: ['400','600','700']
})

export default function Home() {
  return (
    <>
      <nav className="flex justify-between px-4 py-2">
        <div className="flex items-center">
            Dodo
        </div>

        <div>
          <a href="">Top</a>
          <a href="">Profile</a>
          <a href="">Skills</a>
          <a href="">Project</a>
        </div>

        <div>
          <button>Contact</button>
        </div>
      </nav>
    </>
  );
}
