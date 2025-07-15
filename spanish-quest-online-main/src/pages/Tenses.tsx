
import TenseCard from '@/components/TenseCard';
import TenseCategory from '@/components/TenseCategory';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { getTensesByCategory } from '@/data/tensesData';

const Tenses = () => {
  const presentTenses = getTensesByCategory('present');
  const pastTenses = getTensesByCategory('past');
  const futureTenses = getTensesByCategory('future');
  const subjunctiveTenses = getTensesByCategory('subjunctive');

  return (
    <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Spanish <span className="text-blue-600">Verb Tenses</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Master Spanish grammar by understanding when and how to use different verb tenses. 
            Each tense tells a story about time and action.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
              <Link to="/practice">Practice Tenses</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/word-of-the-day">Daily Vocabulary</Link>
            </Button>
          </div>
        </div>

        {/* Present Tenses */}
        <TenseCategory
          title="Present Tenses"
          description="Express actions happening now, habitual actions, and general truths"
          icon="⏰"
        >
          {presentTenses.map((tense) => (
            <TenseCard key={tense.id} {...tense} />
          ))}
        </TenseCategory>

        {/* Past Tenses */}
        <TenseCategory
          title="Past Tenses"
          description="Describe completed actions, past habits, and background information"
          icon="📅"
        >
          {pastTenses.map((tense) => (
            <TenseCard key={tense.id} {...tense} />
          ))}
        </TenseCategory>

        {/* Future Tenses */}
        <TenseCategory
          title="Future Tenses"
          description="Express plans, predictions, and actions that will happen later"
          icon="🚀"
        >
          {futureTenses.map((tense) => (
            <TenseCard key={tense.id} {...tense} />
          ))}
        </TenseCategory>

        {/* Subjunctive Tenses */}
        <TenseCategory
          title="Subjunctive Mood"
          description="Express emotions, doubts, desires, and hypothetical situations"
          icon="💭"
        >
          {subjunctiveTenses.map((tense) => (
            <TenseCard key={tense.id} {...tense} />
          ))}
        </TenseCategory>

        {/* Call to Action */}
        <div className="text-center mt-16 p-8 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Practice?</h2>
          <p className="text-lg text-gray-600 mb-6">
            Test your understanding with interactive exercises and quizzes.
          </p>
          <Button asChild size="lg" className="bg-orange-500 hover:bg-orange-600">
            <Link to="/practice">Start Practicing</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Tenses;
