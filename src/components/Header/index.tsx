const Header = (props: {
  sidebarOpen: string | boolean | undefined;
  setSidebarOpen: (arg0: boolean) => void;
}) => {
  return (
    <header className="sticky h-20 top-0 z-10 flex w-full bg-white drop-shadow-1">
      <div className="flex flex-grow items-center justify-end px-9 py-4 shadow-2">
        <div className="flex flex-col gap-1">
          <div className="flex gap-3 items-center">
            <span className="bg-primary2 text-white text-xs py-0.5 px-2 leading-5 rounded-full">
              Super Admin
            </span>
            <span className="text-sm">ben@writersroomberlin.de</span>
          </div>
          <div className="text-right text-gray text-xs">Logout</div>
        </div>
      </div>
    </header>
  );
};

export default Header;
