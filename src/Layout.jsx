import React, { useState } from 'react';
import {
  AppShell,
  Navbar,
  Header,
  Footer,
  Aside,
  Text,
  MediaQuery,
  Burger,
  useMantineTheme,
  Title,
  Group,
  ActionIcon,
} from '@mantine/core';
import Navigation from './components/Navigation/Navigation';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './components/Home';

import Settings from "./components/Settings";
// import Login from "./components/Login";
import Head from "./components/Head/";


export default function Layout() {
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);

  return (
    <AppShell
      styles={{
        main: {
          background: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
        },
      }}
      navbarOffsetBreakpoint="sm"
      asideOffsetBreakpoint="sm"
      fixed
      navbar={
        <Navigation opened={opened}>
          <Text>Application navbar</Text>
        </Navigation>
      }
      // aside={
      //   <MediaQuery smallerThan="sm" styles={{ display: 'none' }}>
      //     <Aside p="md" hiddenBreakpoint="sm" width={{ sm: 200, lg: 300 }}>
      //       <Text>Application sidebar</Text>
      //     </Aside>
      //   </MediaQuery>
      // }
      // footer={
      //   <Footer height={60} p="md">
      //     Application footer
      //   </Footer>
      // }
      header={
        <Head setOpened={setOpened} opened={opened} />
      }
    >
      <Routes>
        <Route path="/" element={
          <Home />
        } />
      

        <Route path="/settings" element={<Settings />} />
        {/* <Route path="/login" element={<Login />} /> */}
      </Routes>
    </AppShell>
  );
}