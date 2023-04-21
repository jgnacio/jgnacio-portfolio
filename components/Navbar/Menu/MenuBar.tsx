import Menu_link from "./Menu_link";

export default function MenuBar() {
  return (
    <div className=" flex items-center px-10 hidden sm:block">
      <ul className="gap-8">
        <div className="flex gap-8">
          <Menu_link title="Home" href="/" />
          <Menu_link title="About me" href="#about" />
          <Menu_link title="Proyects" href="#proyects" />
        </div>
      </ul>
    </div>
  );
}
