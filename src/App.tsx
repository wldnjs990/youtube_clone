import YtContents from "./components/YtContents/YtContents";
import YtHeader from "./components/YtHeader/YtHeader";
import YtSideBar from "./components/YtSideBar/YtSideBar";

export default function App() {
  return (
    <main className="h-[3000px]">
      <YtHeader />
      <YtSideBar />
      <YtContents />
    </main>
  );
}
