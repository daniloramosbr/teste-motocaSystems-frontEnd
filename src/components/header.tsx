import Image from "next/image";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "ion-icon": any;
    }
  }
}
export default function Header() {
  return (
    <main className="flex justify-end items-end gap-6 pb-7">
      <ion-icon size='large' name="home-sharp"></ion-icon>
      <div className="flex relative">
        <Image
          className="rounded-full"
          width={60}
          height={60}
          src="/figma-img.png"
          alt="profile-img"/>
        <div className="bg-green-500 w-5 h-5 absolute rounded-full bottom-0 right-3 border-2 border-custom-border"></div>
      </div>
    </main>
  );
}
