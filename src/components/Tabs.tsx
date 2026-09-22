import { createContext, useContext, useState, type ReactNode } from "react";

type TabsContextValue = {
  activeTab: string;
  setActiveTab: (value: string) => void;
};

const TabsContext = createContext<TabsContextValue | null>(null);

function useTabs() {
  const context = useContext(TabsContext);

  if (!context) {
    throw new Error("Tabs components must be used inside <Tabs>.");
  }

  return context;
}

type TabsRootProps = {
  defaultValue: string;
  children: ReactNode;
};

function TabsRoot({ defaultValue, children }: TabsRootProps) {
  const [activeTab, setActiveTab] = useState(defaultValue);

  return (
    <TabsContext.Provider
      value={{
        activeTab,
        setActiveTab,
      }}
    >
      <div>{children}</div>
    </TabsContext.Provider>
  );
}

type TabsListProps = {
  children: ReactNode;
};

function TabsList({ children }: TabsListProps) {
  return <div className="flex gap-2 border-b pb-3">{children}</div>;
}

type TabsTriggerProps = {
  value: string;
  children: ReactNode;
};

function TabsTrigger({ value, children }: TabsTriggerProps) {
  const { activeTab, setActiveTab } = useTabs();

  const isActive = activeTab === value;

  return (
    <button
      type="button"
      onClick={() => setActiveTab(value)}
      className={
        isActive
          ? "rounded bg-black px-4 py-2 text-white"
          : "rounded border px-4 py-2"
      }
    >
      {children}
    </button>
  );
}

type TabsContentProps = {
  value: string;
  children: ReactNode;
};

function TabsContent({ value, children }: TabsContentProps) {
  const { activeTab } = useTabs();

  if (activeTab !== value) {
    return null;
  }

  return <div className="pt-5">{children}</div>;
}

const Tabs = Object.assign(TabsRoot, {
  List: TabsList,
  Trigger: TabsTrigger,
  Content: TabsContent,
});

export default Tabs;
