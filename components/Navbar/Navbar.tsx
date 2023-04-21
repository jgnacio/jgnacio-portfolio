import MenuBar from "./Menu/MenuBar";
import Hamburger from "./Menu/Hamburger";
import Logo from "./Logo";

export default function Navbar() {
  return (
    // <nav className="bg-electric_purple">
    //   <div className="flex max-w-xl align-middle lg:h-16 items-center justify-center bg-white">
    //     <div className="relative flex justify-between bg-black w-max">
    <nav className="bg-black">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <Logo />
          <Hamburger />
          <MenuBar />
        </div>
      </div>
    </nav>
  );
}
