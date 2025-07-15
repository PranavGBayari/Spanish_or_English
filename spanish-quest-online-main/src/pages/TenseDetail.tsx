
import { useParams, Link, Navigate } from 'react-router-dom';
import { getTenseBySlug } from '@/data/tensesData';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ChevronLeft } from 'lucide-react';

const TenseDetail = () => {
  const { tenseSlug } = useParams<{ tenseSlug: string }>();
  
  if (!tenseSlug) {
    return <Navigate to="/tenses" replace />;
  }

  const tense = getTenseBySlug(tenseSlug);

  if (!tense) {
    return <Navigate to="/tenses" replace />;
  }

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
    <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Breadcrumb Navigation */}
        <div className="mb-6">
          <Button asChild variant="ghost" className="mb-4">
            <Link to="/tenses" className="flex items-center gap-2">
              <ChevronLeft className="w-4 h-4" />
              Back to Tenses
            </Link>
          </Button>
          <nav className="text-sm text-gray-600">
            <Link to="/tenses" className="hover:text-blue-600">Tenses</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900">{tense.name}</span>
          </nav>
        </div>

        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center items-center gap-4 mb-4">
            <h1 className="text-4xl font-bold text-gray-900">{tense.name}</h1>
            <Badge className={getDifficultyColor(tense.difficulty)}>{tense.difficulty}</Badge>
          </div>
          <p className="text-2xl font-medium text-orange-600 italic mb-4">{tense.spanishName}</p>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">{tense.description}</p>
        </div>

        {/* Formation Section - Full Width */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-blue-600">Formation</CardTitle>
          </CardHeader>
          <CardContent>
            <div dangerouslySetInnerHTML={{ __html: tense.detailedInfo.formation }} />
          </CardContent>
        </Card>

        {/* When to Use Section - Full Width */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-blue-600">When to Use</CardTitle>
          </CardHeader>
          <CardContent>
            {tense.detailedInfo.usageContent ? (
              <div dangerouslySetInnerHTML={{ __html: tense.detailedInfo.usageContent }} />
            ) : (
              <p className="text-gray-700">{tense.usage}</p>
            )}
          </CardContent>
        </Card>

        {/* Examples Section - Full Width */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-blue-600">Examples</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {tense.examples.map((example, index) => (
                <div key={index} className="p-4 bg-blue-50 rounded-lg">
                  <p className="text-gray-800 italic font-medium">{example}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-blue-600">Irregular information</CardTitle>
          </CardHeader>
          <CardContent>
            {tense.detailedInfo.usageContent ? (
              <div dangerouslySetInnerHTML={{ __html: tense.detailedInfo.irregular }} />
            ) : (
              <p className="text-gray-700">{tense.usage}</p>
            )}
          </CardContent>
        </Card>

          {/* Time Expressions */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-green-600">Time Expressions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {tense.detailedInfo.timeExpressions.map((expression, index) => (
                  <span key={index} className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                    {expression}
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>
        

        {/* Common Mistakes */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-red-600">Common Mistakes to Avoid</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {tense.detailedInfo.commonMistakes.map((mistake, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="text-red-500 font-bold">•</span>
                  <span className="text-gray-700">{mistake}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        {/* Cultural Notes */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-purple-600">Cultural Notes</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700">{tense.detailedInfo.culturalNotes}</p>
          </CardContent>
        </Card>

        {/* Practice Section - Placeholder */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="text-blue-600">Practice Exercises</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 mb-4">Interactive exercises coming soon!</p>
            <Button asChild className="bg-blue-600 hover:bg-blue-700">
              <Link to="/practice">Go to Practice Section</Link>
            </Button>
          </CardContent>
        </Card>

        {/* Navigation to other tenses */}
        <div className="text-center">
          <Button asChild size="lg" variant="outline">
            <Link to="/tenses">Explore All Tenses</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TenseDetail;
