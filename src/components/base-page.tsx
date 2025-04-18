import NavBar from "./navbar";

export default function BasePage({ children }: BasePageProps) {
  return (
    <div className="flex h-screen">
      <NavBar />
      <div className="p-6 overflow-y-auto flex-1">
        {children}
      </div>
    </div>
  );
}
