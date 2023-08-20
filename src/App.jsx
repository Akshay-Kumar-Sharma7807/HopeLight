import { useState, useEffect } from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import Layout from "./Layout"
import { MantineProvider, ColorSchemeProvider } from '@mantine/core';
import { useHotkeys, useLocalStorage } from '@mantine/hooks';
import ReloadPrompt from "./components/ReloadPrompt"
import { Notifications } from '@mantine/notifications';
// import { updateDoc, doc } from 'firebase/firestore';
// import { db, auth } from "./firebase";
// import { useAuthState } from "react-firebase-hooks/auth";

function App() {
  
  // const [user] = useAuthState(auth);
  // const documentState = useDocumentVisibility();

  const [colorScheme, setColorScheme] = useLocalStorage({
    key: 'mantine-color-scheme',
    defaultValue: 'light',
  });

  const toggleColorScheme = (value) =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));

  useHotkeys([['mod+J', () => toggleColorScheme()]]);

  return (
    <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
      <MantineProvider theme={{ colorScheme }} withGlobalStyles withNormalizeCSS>
        <Notifications>

          {/* <SpotlightProvider shortcut={['mod + P', 'mod + K', '/']} actions={["hi"].map(todo => {
            return {
              title: todo,
              onTrigger: () => console.log("trigger")
            }
          })}> */}
            <Router>
              <div className={"App"}>
                <ReloadPrompt />
                <Layout />
              </div>
            </Router>

          {/* </SpotlightProvider> */}
        </Notifications>
      </MantineProvider>
    </ColorSchemeProvider>
  )
}

export default App
