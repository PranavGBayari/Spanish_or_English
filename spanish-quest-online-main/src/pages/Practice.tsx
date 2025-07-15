
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';

interface QuizQuestion {
  id: number;
  sentence: string;
  options: string[];
  correctAnswer: string;
  explanation: string;
}

const Practice = () => {
  // Sample quiz data - this would eventually come from an API or database
  const quizQuestions: QuizQuestion[] = [
    {
      id: 1,
      sentence: "Yo ___ al parque todos los días.",
      options: ["voy", "vas", "va", "vamos"],
      correctAnswer: "voy",
      explanation: "'Voy' is the correct form of 'ir' (to go) for 'yo' (I)."
    },
    {
      id: 2,
      sentence: "Ella ___ una manzana roja.",
      options: ["como", "comes", "come", "comemos"],
      correctAnswer: "come",
      explanation: "'Come' is the correct form of 'comer' (to eat) for 'ella' (she)."
    },
    {
      id: 3,
      sentence: "Nosotros ___ en Madrid.",
      options: ["vivo", "vives", "vive", "vivimos"],
      correctAnswer: "vivimos",
      explanation: "'Vivimos' is the correct form of 'vivir' (to live) for 'nosotros' (we)."
    },
    {
      id: 4,
      sentence: "¿Tú ___ español?",
      options: ["hablo", "hablas", "habla", "hablamos"],
      correctAnswer: "hablas",
      explanation: "'Hablas' is the correct form of 'hablar' (to speak) for 'tú' (you)."
    },
    {
      id: 5,
      sentence: "Mis amigos ___ fútbol los sábados.",
      options: ["juego", "juegas", "juega", "juegan"],
      correctAnswer: "juegan",
      explanation: "'Juegan' is the correct form of 'jugar' (to play) for 'mis amigos' (my friends - they)."
    }
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [userAnswers, setUserAnswers] = useState<string[]>([]);

  const handleSubmit = () => {
    const newUserAnswers = [...userAnswers];
    newUserAnswers[currentQuestion] = selectedAnswer;
    setUserAnswers(newUserAnswers);

    if (selectedAnswer === quizQuestions[currentQuestion].correctAnswer) {
      if (!userAnswers[currentQuestion] || userAnswers[currentQuestion] !== selectedAnswer) {
        setScore(score + 1);
      }
    }

    setShowResult(true);
  };

  const handleNext = () => {
    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(userAnswers[currentQuestion + 1] || "");
      setShowResult(false);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      setSelectedAnswer(userAnswers[currentQuestion - 1] || "");
      setShowResult(false);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswer("");
    setShowResult(false);
    setScore(0);
    setUserAnswers([]);
  };

  const isQuizComplete = userAnswers.length === quizQuestions.length;

  return (
    <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Fill in the Blanks</h1>
          <p className="text-xl text-gray-600">
            Complete the Spanish sentences by choosing the correct word
          </p>
        </div>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between text-sm text-gray-600 mb-2">
            <span>Question {currentQuestion + 1} of {quizQuestions.length}</span>
            <span>Score: {score}/{quizQuestions.length}</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-blue-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${((currentQuestion + 1) / quizQuestions.length) * 100}%` }}
            ></div>
          </div>
        </div>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl text-center">
              {quizQuestions[currentQuestion].sentence}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <RadioGroup value={selectedAnswer} onValueChange={setSelectedAnswer}>
              <div className="grid grid-cols-2 gap-4">
                {quizQuestions[currentQuestion].options.map((option, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <RadioGroupItem value={option} id={`option-${index}`} />
                    <Label 
                      htmlFor={`option-${index}`} 
                      className="cursor-pointer text-lg p-2 rounded hover:bg-gray-50 flex-1"
                    >
                      {option}
                    </Label>
                  </div>
                ))}
              </div>
            </RadioGroup>

            <div className="mt-6 flex justify-center">
              {!showResult ? (
                <Button 
                  onClick={handleSubmit}
                  disabled={!selectedAnswer}
                  className="bg-blue-600 hover:bg-blue-700"
                >
                  Submit Answer
                </Button>
              ) : (
                <div className="text-center w-full">
                  {selectedAnswer === quizQuestions[currentQuestion].correctAnswer ? (
                    <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-4">
                      <h3 className="text-green-800 font-semibold text-lg mb-2">¡Correcto! ✅</h3>
                      <p className="text-green-700">{quizQuestions[currentQuestion].explanation}</p>
                    </div>
                  ) : (
                    <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-4">
                      <h3 className="text-red-800 font-semibold text-lg mb-2">Incorrect ❌</h3>
                      <p className="text-red-700 mb-2">
                        The correct answer is: <strong>{quizQuestions[currentQuestion].correctAnswer}</strong>
                      </p>
                      <p className="text-red-700">{quizQuestions[currentQuestion].explanation}</p>
                    </div>
                  )}
                </div>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Navigation Buttons */}
        <div className="flex justify-between items-center">
          <Button 
            onClick={handlePrevious}
            disabled={currentQuestion === 0}
            variant="outline"
          >
            Previous
          </Button>

          <div className="flex gap-2">
            {currentQuestion < quizQuestions.length - 1 && showResult && (
              <Button onClick={handleNext} className="bg-blue-600 hover:bg-blue-700">
                Next Question
              </Button>
            )}
            
            {isQuizComplete && (
              <Button onClick={resetQuiz} variant="outline">
                Restart Quiz
              </Button>
            )}
          </div>
        </div>

        {/* Final Score */}
        {isQuizComplete && (
          <Card className="mt-8 bg-gradient-to-r from-blue-50 to-purple-50">
            <CardContent className="text-center p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Quiz Complete! 🎉</h2>
              <p className="text-xl text-gray-700 mb-4">
                Your final score: <span className="font-bold text-blue-600">{score}/{quizQuestions.length}</span>
              </p>
              <p className="text-gray-600">
                {score === quizQuestions.length 
                  ? "¡Perfecto! You got all questions right!"
                  : score >= quizQuestions.length * 0.8
                  ? "¡Excelente! Great job on the quiz!"
                  : score >= quizQuestions.length * 0.6
                  ? "¡Bien! Good work, keep practicing!"
                  : "Keep practicing! You'll improve with time."}
              </p>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default Practice;
