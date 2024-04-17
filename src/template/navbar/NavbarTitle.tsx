import NavbarTitleIcon from "./NavbarTitleIcon";

const NavbarTitle = () => {
  return (
    <div className="flex gap-2 items-center">
      <span className="text-3xl text-gray-500">Weather</span>
      <NavbarTitleIcon />
    </div>
  );
};

export default NavbarTitle;
