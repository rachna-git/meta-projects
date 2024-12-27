import React, { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faMedium,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";
import { Box, HStack } from "@chakra-ui/react";

const socials = [
  {
    icon: faEnvelope,
    url: "mailto: hello@example.com",
  },
  {
    icon: faGithub,
    url: "https://github.com",
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com",
  },
  {
    icon: faMedium,
    url: "https://medium.com",
  },
  {
    icon: faStackOverflow,
    url: "https://stackoverflow.com",
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

  // Function to handle anchor click behavior
  const handleClick = (anchor) => () => {
    const id = `${anchor}-section`; // Generate element ID
    const element = document.getElementById(id); // Find the target element
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start", // Scroll to the top of the section
      });
    }
  };

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
      backgroundColor="#18181b"
    >
      <Box color="white" maxWidth="1280px" margin="0 auto">
        <HStack
          px={16}
          py={4}
          justifyContent="space-between"
          alignItems="center"
        >
          <nav>
            <HStack spacing={8}>
              {socials.map((item) => {
                return (
                  <a
                    key={item.url}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon icon={item.icon} size="2x" />
                  </a>
                );
              })}
            </HStack>
          </nav>
          <nav>
            <HStack spacing={8}>
              <a
                href="/#projects-section"
                onClick={() => handleClick("projects")}
              >
                Projects
              </a>
              <a
                href="/#contactme-section"
                onClick={() => handleClick("contactme")}
              >
                Contact Me
              </a>
            </HStack>
          </nav>
        </HStack>
      </Box>
    </Box>
  );
};
export default Header;
