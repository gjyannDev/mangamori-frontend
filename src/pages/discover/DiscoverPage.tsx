import { Outlet } from "react-router-dom";

export default function DiscoverPage() {
  return (
    <div className="flex flex-col">
      <Outlet />
    </div>
  );
}
