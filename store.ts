interface App {
  id: string;
  firstName: string;
  lastName: string;
  status: 'pending' | 'approved' | 'rejected';
  createdAt: Date;
  approvedAt?: Date;
  approvedBy?: string;
}

let apps: App[] = [];

export const add = (a: Omit<App, 'status' | 'createdAt'>) => {
  const app: App = {
    ...a,
    status: 'pending',
    createdAt: new Date(),
  };
  apps.push(app);
  return app;
};

export const all = () => apps;

export const find = (id: string) => apps.find((x) => x.id === id);

export const getByStatus = (status: App['status']) => 
  apps.filter((x) => x.status === status);

export const update = (id: string, updates: Partial<App>) => {
  const app = find(id);
  if (!app) return null;
  Object.assign(app, updates);
  return app;
};