// "use client";
import Hero from "@/components/Hero";
// import Script from "next/script";
export default function Home() {
  return (
    <div className="container p-5 ">
      <Hero />
      {/* <script>
        {window.document.addEventListener("contextmenu", function (e) {
          e.preventDefault();
        })}
      </script> */}
    </div>
  );
}


export const metadata = {
  title: "OTT",
  description: "Find all OTT movies and series in one place.",
};