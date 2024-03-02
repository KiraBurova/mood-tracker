const Moods = [
  {
    id: 1,
    name: 'Happy',
    color: 'bg-green-500',
  },
  {
    id: 2,
    name: 'Sad',
    color: 'bg-blue-500',
  },
  {
    id: 3,
    name: 'Angry',
    color: 'bg-red-500',
  },
  {
    id: 4,
    name: 'Anxious',
    color: 'bg-yellow-500',
  },
  {
    id: 5,
    name: 'Excited',
    color: 'bg-pink-500',
  },
  {
    id: 6,
    name: 'Calm',
    color: 'bg-purple-500',
  },
  {
    id: 7,
    name: 'Tired',
    color: 'bg-gray-500',
  },
  {
    id: 8,
    name: 'Bored',
    color: 'bg-indigo-500',
  },
  {
    id: 9,
    name: 'Surprised',
    color: 'bg-orange-500',
  },
  {
    id: 10,
    name: 'Stressed',
    color: 'bg-black-500',
  },
];

const ChooseMood = () => {
  const handleMoodClick = (mood: number) => {
    // api call to save mood
    console.log(mood);
    // on success navigate to mood map
  };

  return (
    <div className="flex justify-center flex-col h-screen">
      <div className="grid grid-cols-4 p-4">
        {Moods.map((mood) => (
          <div
            key={mood.id}
            onClick={() => handleMoodClick(mood.id)}
            className={`flex justify-center items-center p-4 m-2 flex-1 h-12 text-white rounded-lg cursor-pointer ${mood.color}`}
          >
            {mood.name}
          </div>
        ))}
      </div>
    </div>
  );
};
export default ChooseMood;
