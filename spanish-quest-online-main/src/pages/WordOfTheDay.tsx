
import WordOfTheDayCard from '@/components/WordOfTheDayCard';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const WordOfTheDay = () => {
  // This would eventually come from an API or database
  const previousWords = [
    { date: "2024-07-03", spanish: "biblioteca", english: "library" },
    { date: "2024-07-02", spanish: "aventura", english: "adventure" },
    { date: "2024-07-01", spanish: "sonrisa", english: "smile" },
    { date: "2024-06-30", spanish: "corazón", english: "heart" },
  ];

  return (
    <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Word of the Day</h1>
          <p className="text-xl text-gray-600">
            Expand your Spanish vocabulary with our daily featured word
          </p>
        </div>

        <div className="mb-12">
          <WordOfTheDayCard />
        </div>

        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Previous Words</h2>
          <div className="grid gap-4">
            {previousWords.map((word, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow duration-200">
                <CardContent className="flex justify-between items-center p-4">
                  <div>
                    <CardTitle className="text-lg text-blue-600">{word.spanish}</CardTitle>
                    <p className="text-gray-600">{word.english}</p>
                  </div>
                  <div className="text-sm text-gray-500">
                    {word.date}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WordOfTheDay;
