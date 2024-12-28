import React, { useState, useEffect, useRef } from "react";
import { Box, HStack, Image } from "@chakra-ui/react";
import Navbar from "/src/components/react-components/Navbar";
import LogoLL from "/src/assets/img/logo 16@4x.png";
const menulist = [
  {
    name: "Home",
  },
  {
    name: "About",
  },
  {
    name: "Menu",
  },
  {
    name: "Reservations",
  },
  {
    name: "Order Online",
  },
  {
    name: "Login",
  },
];

const Header = () => {
  const [isVisible, setIsVisible] = useState(true);
  const prevScrollPos = useRef(0);

  // Effect to handle scroll-based visibility
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      if (currentScrollPos > prevScrollPos.current) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      prevScrollPos.current = currentScrollPos;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      right={0}
      transition="transform 0.3s ease"
      transform={isVisible ? "translateY(0)" : "translateY(-200px)"}
      zIndex="1000"
      transitionTimingFunction="ease-in-out"
    >
      <Box maxWidth="1280px" margin="0 auto">
        <HStack
          px={16}
          py={4}
          justifyContent="space-between"
          alignItems="center"
        >
          <Image height="50px" src={LogoLL} />

          <Navbar menulist={menulist} />
        </HStack>
      </Box>
    </Box>
  );
};
export default Header;
