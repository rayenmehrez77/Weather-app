import Sidebar from "../components/Sidebar";

export default function Home() {
  return (
    <div className="h-screen flex">
      <Sidebar />
      <main className="flex-auto bg-blue-darkest">
        <h1>Main page</h1>
      </main>
    </div>
  );
}
