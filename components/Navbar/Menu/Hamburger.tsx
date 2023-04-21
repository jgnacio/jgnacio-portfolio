export default function Hamburger() {
  return (
    <div>
      <div className="m-2">
        <div className=" w-max h-max  flex flex-col p-2 sm:hidden">
          <div className="w-8 h-0.5 bg-white my-1" />
          <div className="w-8 h-0.5 bg-white my-1" />
          <div className="w-8 h-0.5 bg-white my-1" />
        </div>
      </div>
    </div>
  );
}
