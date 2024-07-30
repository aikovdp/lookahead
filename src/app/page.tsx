import { EventsList } from "./events";

export default function Home() {
  return (
    <main className="max-w-prose mx-auto mt-8">
      <h1 className="font-bold text-3xl my-4">Events</h1>
      <EventsList />
    </main>
  );
}
