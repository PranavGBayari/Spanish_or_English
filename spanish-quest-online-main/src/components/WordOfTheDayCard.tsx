
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const WordOfTheDayCard = () => {
  // This would eventually come from an API or database
  const wordData = {
    spanish: "mariposa",
    english: "butterfly",
    pronunciation: "mah-ree-POH-sah",
    partOfSpeech: "noun (feminine)",
    exampleSpanish: "La mariposa vuela de flor en flor.",
    exampleEnglish: "The butterfly flies from flower to flower.",
    culturalNote: "In many Spanish-speaking countries, butterflies are symbols of transformation and beauty. The word comes from María and posar (to rest), literally meaning 'María rests'."
  };

  const playPronunciation = () => {
    // This would use text-to-speech API in a real implementation
    console.log(`Playing pronunciation for: ${wordData.spanish}`);
  };

  return (
    <Card className="max-w-2xl mx-auto bg-gradient-to-r from-blue-50 to-purple-50 border-none shadow-lg">
      <CardHeader className="text-center">
        <CardTitle className="text-3xl font-bold text-blue-600 mb-2">
          {wordData.spanish}
        </CardTitle>
        <div className="text-gray-600">
          <p className="text-lg">{wordData.english}</p>
          <p className="text-sm italic">{wordData.partOfSpeech}</p>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="text-center">
          <Button 
            onClick={playPronunciation}
            variant="outline" 
            size="sm"
            className="mb-4"
          >
            🔊 {wordData.pronunciation}
          </Button>
        </div>
        
        <div className="bg-white/70 p-4 rounded-lg">
          <h4 className="font-semibold text-gray-800 mb-2">Example:</h4>
          <p className="text-blue-700 font-medium">{wordData.exampleSpanish}</p>
          <p className="text-gray-600 text-sm mt-1">{wordData.exampleEnglish}</p>
        </div>

        <div className="bg-orange-50 p-4 rounded-lg">
          <h4 className="font-semibold text-orange-800 mb-2">Cultural Note:</h4>
          <p className="text-orange-700 text-sm">{wordData.culturalNote}</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default WordOfTheDayCard;
