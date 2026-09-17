import { useEffect, useState } from "react";

const createConnection = (roomId: string) => {
  return {
    connect() {
      console.log(`Connected to ${roomId}`);
    },
    disconnect() {
      console.log(`Disconnected from ${roomId}`);
    },
  };
};

const ChatConnection = () => {
  const [roomId, setRoomId] = useState<string>("general");

  useEffect(() => {
    const connection = createConnection(roomId);
    connection.connect();

    return () => {
      connection.disconnect();
    };
  }, [roomId]);

  return (
    <section className="rounded-xl bg-slate-900 p-6 text-white">
      <h2 className="text-2xl font-bold">Chat Connection</h2>

      <select
        value={roomId}
        onChange={(event) => {
          setRoomId(event.currentTarget.value);
        }}
        className="mt-5 w-full rounded bg-slate-800 p-3"
      >
        <option value="general">General</option>
        <option value="react">React</option>
        <option value="nextjs">Next.js</option>
      </select>

      <p className="mt-4 text-slate-300">Connected room: {roomId}</p>
    </section>
  );
};

export default ChatConnection;
