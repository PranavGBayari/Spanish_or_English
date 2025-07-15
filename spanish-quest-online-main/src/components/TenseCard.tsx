
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

interface TenseCardProps {
  name: string;
  spanishName: string;
  description: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  examples: string[];
  usage: string;
  slug: string;
}

const TenseCard = ({ name, spanishName, description, difficulty, examples, usage, slug }: TenseCardProps) => {
  const getDifficultyColor = (level: string) => {
    switch (level) {
      case 'Beginner':
        return 'bg-green-100 text-green-800';
      case 'Intermediate':
        return 'bg-yellow-100 text-yellow-800';
      case 'Advanced':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <Card className="hover:shadow-lg transition-shadow duration-300 h-full flex flex-col">
      <CardHeader>
        <div className="flex justify-between items-start mb-2">
          <CardTitle className="text-xl text-blue-600">{name}</CardTitle>
          <Badge className={getDifficultyColor(difficulty)}>{difficulty}</Badge>
        </div>
        <p className="text-lg font-medium text-orange-600 italic">{spanishName}</p>
      </CardHeader>
      <CardContent className="space-y-4 flex-grow flex flex-col">
        <p className="text-gray-700">{description}</p>
        
        <div>
          <h4 className="font-semibold text-gray-800 mb-2">Usage:</h4>
          <p className="text-gray-600 text-sm">{usage}</p>
        </div>

        <div className="flex-grow">
          <h4 className="font-semibold text-gray-800 mb-2">Examples:</h4>
          <ul className="space-y-1">
            {examples.map((example, index) => (
              <li key={index} className="text-sm text-gray-600 italic">
                • {example}
              </li>
            ))}
          </ul>
        </div>

        <div className="pt-4 mt-auto">
          <Button asChild className="w-full bg-blue-600 hover:bg-blue-700">
            <Link to={`/tense/${slug}`}>
              Learn More
            </Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default TenseCard;
