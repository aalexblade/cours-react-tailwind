import React, { FC, useEffect, useState } from "react";
import Card from "./Card";

type User = {
  id: number;
  name: string;
  email: string;
};

export const UserCardList: FC = () => {
  const [users, setUsers] = useState<User[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let mounted = true;

    const fetchUsers = async () => {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/users");
        if (!res.ok)
          throw new Error(`Network response was not ok: ${res.status}`);
        const data: User[] = await res.json();
        if (mounted)
          setUsers(
            data.map((u) => ({ id: u.id, name: u.name, email: u.email })),
          );
      } catch (err: any) {
        if (mounted) setError(err?.message ?? "Failed to load users");
      } finally {
        if (mounted) setLoading(false);
      }
    };

    fetchUsers();

    return () => {
      mounted = false;
    };
  }, []);

  if (loading) {
    return (
      <div role="status" aria-live="polite" className="p-4">
        <p className="text-sm text-slate-600">Loading users…</p>
      </div>
    );
  }

  if (error) {
    return (
      <div role="alert" className="p-4">
        <p className="text-sm text-red-600">Error: {error}</p>
      </div>
    );
  }

  if (!users || users.length === 0) {
    return (
      <div className="p-4">
        <p className="text-sm text-slate-600">No users found.</p>
      </div>
    );
  }

  return (
    <section aria-labelledby="user-list-title">
      <h2 id="user-list-title" className="sr-only">
        Users
      </h2>
      <ul
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4"
        role="list"
      >
        {users.map((user) => (
          <li key={user.id}>
            <Card
              title={user.name}
              className="hover:scale-[1.01] transition-transform"
            >
              <p className="text-sm text-slate-700">{user.email}</p>
            </Card>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default UserCardList;
