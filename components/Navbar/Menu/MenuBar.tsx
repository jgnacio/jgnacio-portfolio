import Menu_link from "./Menu_link";

export default function MenuBar() {
  return (
    <div className=" flex items-center px-10 hidden sm:block">
      <ul className="gap-8">
        <div className="flex gap-8">
          <Menu_link title="Home"/>
          <Menu_link title="About me"/>
          <Menu_link title="Proyects"/>
        </div>
      </ul>
    </div>
  );
}
