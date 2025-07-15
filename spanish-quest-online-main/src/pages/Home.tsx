
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import WordOfTheDayCard from '@/components/WordOfTheDayCard';

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Learn <span className="text-blue-600">Spanish</span> with{' '}
            <span className="text-orange-500">Confidence</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Master Spanish through interactive lessons, daily vocabulary, and engaging practice exercises. 
            Start your journey to fluency today!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
              <Link to="/practice">Start Learning</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/word-of-the-day">Today's Word</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Why Choose Our Spanish Learning Platform?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📚</span>
                </div>
                <CardTitle>Daily Vocabulary</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Learn a new Spanish word every day with pronunciation, usage examples, and cultural context.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🎯</span>
                </div>
                <CardTitle>Interactive Practice</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Test your knowledge with fill-in-the-blank exercises and get instant feedback on your progress.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🚀</span>
                </div>
                <CardTitle>Progressive Learning</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Build your skills step by step with carefully designed lessons that adapt to your pace.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Word of the Day Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
            Featured: Word of the Day
          </h2>
          <WordOfTheDayCard />
          <div className="text-center mt-8">
            <Button asChild variant="outline">
              <Link to="/word-of-the-day">View All Daily Words</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
