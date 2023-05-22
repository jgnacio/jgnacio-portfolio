import MenuBar from "./Menu/MenuBar";
import Hamburger from "./Menu/Hamburger";
import Logo from "./Logo";

export default function Navbar() {
  return (
    // <nav className="bg-electric_purple">
    //   <div className="flex max-w-xl align-middle lg:h-16 items-center justify-center bg-white">
    //     <div className="relative flex justify-between bg-black w-max">
    <nav className="h-[64px] sticky top-0 z-50 w-full antialiased backdrop-blur-sm backdrop-saturate-200 bg-white/80 dark:bg-black/50">
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
