'use client';
import type { NextPage } from 'next';
import Login from '../components/Login';
import Register from '../components/Register';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '../components/ui/tabs';

const Home: NextPage = () => {
  return (
    <div className="flex h-screen">
      {/* Tabs */}
      <Tabs defaultValue="login" className="m-auto max-h-full w-[700px]">
        <TabsList>
          <TabsTrigger value="login">Login</TabsTrigger>
          <TabsTrigger value="create">Create</TabsTrigger>
        </TabsList>
        <TabsContent className="shadow-lg drop-shadow-md" value="login">
          <div className="max-h-full">
            <Login />
          </div>
        </TabsContent>
        <TabsContent className="shadow-lg drop-shadow-md" value="create">
          <div className="max-h-full">
            <Register />
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};
export default Home;
