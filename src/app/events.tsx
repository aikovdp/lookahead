async function getEvents() {
  return [
    {
      name: "House of the Dragon - Finale",
      date: new Date("2024-08-05T01:00:00Z"),
    },
    {
      name: "Agatha All Along - Premiere",
      date: new Date("2024-09-18"),
    },
  ];
}

export async function EventsList() {
  const events = await getEvents();
  return (
    <ol className="space-y-4">
      {events.map((e) => (
        <li key={e.name} className="ring-gray-200 ring-1 p-4 rounded-lg">
          <h2 className="font-bold text-lg mb-1">{e.name}</h2>
          <p>{e.date.toLocaleDateString()}</p>
        </li>
      ))}
    </ol>
  );
}
