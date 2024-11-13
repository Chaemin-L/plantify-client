import Navigation from "./navigation";

export default function Header() {
  return (
    <header className=" bg-darkBg sticky top-0">
      <div className="flex justify-between p-4">
        <div>LOGO</div>
        <span>종</span>
      </div>
      <Navigation />
    </header>
  );
}
