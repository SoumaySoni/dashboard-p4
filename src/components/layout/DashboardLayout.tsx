import { ReactNode } from 'react';
import { DashboardSidebar } from './DashboardSidebar';
import { DashboardNavbar } from './DashboardNavbar';

interface DashboardLayoutProps {
  children: ReactNode;
}

export const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  return (
    <div className="flex min-h-screen w-full">
      <DashboardSidebar />
      <div className="flex-1 flex flex-col">
        <DashboardNavbar />
        <main className="flex-1 p-6">
          {children}
        </main>
      </div>
    </div>
  );
};
