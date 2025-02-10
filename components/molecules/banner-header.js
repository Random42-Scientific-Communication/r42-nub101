import Link from "next/link";

export const BannerHeader = ({ menuItems }) => {
  return (
    <div className="@container/top-header px-10 bg-tertiary text-tertiary-foreground w-full font-bold relative flex flex-row items-center gap-2 backdrop-blur-sm h-header_prelim">
      <div className="flex items-center justify-between w-full h-full">
        <div>
          <span>Help</span>
          <span>Call</span>
          <span>Days</span>
        </div>
        <ul className="flex gap-8">
          {menuItems.map((item) => (
            <li key={item.id}>
              <Link href={item.uri}>{item.label}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};