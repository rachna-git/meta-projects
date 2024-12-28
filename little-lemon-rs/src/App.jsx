import { Box, Flex } from "@chakra-ui/react";
import Header from "./components/react-components/Header";
import Main from "./components/react-components/Main";
import Footer from "./components/react-components/Footer";

import "./App.css";
function App() {
  return (
    <Flex direction="column" minHeight="100vh">
      {/* Header */}
      <Box as="header" height="80px">
        <Header />
      </Box>

      {/* Main Content */}
      <Box as="main" flex="1" py={8}>
        <Main />
      </Box>

      {/* Footer */}
      <Footer />
    </Flex>
  );
}

export default App;
