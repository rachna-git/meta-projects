import { HStack } from "@chakra-ui/react";
const Navbar = (props) => {
  const menulist = props.menulist || [];
  return (
    <>
      <nav>
        <HStack spacing={20}>
          {menulist.map((item) => (
            <a key={item.name} href={`#${item.name.toLowerCase()}`}>
              {item.name}
            </a>
          ))}
        </HStack>
      </nav>
    </>
  );
};

export default Navbar;
