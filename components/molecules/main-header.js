import Link from "next/link";
import Image from "next/image";

export const MainHeader = ({ menuItems }) => {
  return (
    <div className="flex flex-row items-center gap-2 px-10 bg-background opacity-90 backdrop-blur-sm h-header_main">
      <Link href="/" className="h-full max-w-[16rem]">
        <Image src={"/static/svgs/nuvation-connect.svg"} alt="Nuvation Connect Logo" width={0} height={0} className="h-full w-full max-w-[18rem]" />      </Link>
      <Navigation menuItems={menuItems} />
    </div>
  );
};

export const Navigation = ({ menuItems }) => {
  return (
    <div className="w-full @container/navigation flex items-center justify-end gap-4 xl:gap-4 flex-row h-full text-sm text-muted-foreground">
      <ul className="flex gap-8">
        {menuItems.map((item) => (
          <li key={item.id}>
            <Link href={item.uri}>{item.label}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
