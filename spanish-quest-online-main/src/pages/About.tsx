
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const About = () => {
  return (
    <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">About ¿Español o inglés?</h1>
          <p className="text-xl text-gray-600">
            Your journey to Spanish fluency (an A* or a 7 in Spanish) starts here!
          </p>
        </div>

        <div className="mb-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-blue-600">About Us</CardTitle>
            </CardHeader>
            <CardContent>
              <p>If you're here, you're probably either trying to figure out what subjunctive even means or panicking over how to write 150 words in Spanish without sounding like Google Translate’s distant cousin. Trust us, we’ve been there.</p><br />
              <p>This website was created by two students who totally get the struggle:</p><br />
              <p><b>Me (95th percentile in IGCSE Spanish)</b>: Yep, I started learning Spanish at the beginning of IGCSE, and it felt like diving headfirst into the deep end of la piscina. If I could go from Hola, ¿cómo estás? to acing my exams, so can you.</p>
              <p><b>My Partner-in-Crime (IB Spanish Ab Initio)</b>: He’s tackling Spanish from scratch in the IB world, which means he knows exactly how to survive (and thrive) when your vocab starts and ends with "enchilada."</p><br />
              <p>Between us, we’ve got the perspectives of both IGCSE and IB (B and Ab Initio), so we know what you’re going through. And we’re here to make it easier, more fun, and (hopefully) less stressful.</p><br />
              <p>Here, you’ll find:</p><br />
              <ul>
                  <li>Grammar explained without the boring textbook vibe</li>
                  <li>Writing tips that’ll have your teacher wondering who you hired</li>
                  <li>Speaking tricks to sound like you actually know what you’re saying</li>
                  <li>Resources for mastering those papers, whether you’re aiming for a 7 in IB or just trying to pass IGCSE without crying.</li>
              </ul><br />
              <p>So buckle up, grab your hucha (Word of the Day, see what we did there?), and let’s make Spanish less of a mystery and more of a win! ¡Vamos!</p>
            </CardContent>
          </Card>

          
        </div>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl text-center text-gray-900">Why Learn Spanish?</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-4xl mb-4">🌍</div>
                <h3 className="font-semibold text-lg mb-2">Global Language</h3>
                <p className="text-gray-600 text-sm">
                  When you visit one of the 21 spanish speaking countries you can walk around like a boss.
                </p>
              </div>
              <div>
                <div className="text-4xl mb-4">💼</div>
                <h3 className="font-semibold text-lg mb-2">Music</h3>
                <p className="text-gray-600 text-sm">
                  You can finally understand that Bad Bunny song you keep hearing on TikTok
                </p>
              </div>
              <div>
                <div className="text-4xl mb-4">🧠</div>
                <h3 className="font-semibold text-lg mb-2">Brain Health</h3>
                <p className="text-gray-600 text-sm">
                  Learning a second language improves cognitive function and memory (easy A*)
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-2xl text-center text-gray-900">Our Features</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mt-1">
                  <span className="text-blue-600 text-sm">✓</span>
                </div>
                <div>
                  <h3 className="font-semibold">Daily Vocabulary</h3>
                  <p className="text-gray-600 text-sm">Learn a new word every day with pronunciation guides and cultural context</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mt-1">
                  <span className="text-blue-600 text-sm">✓</span>
                </div>
                <div>
                  <h3 className="font-semibold">Interactive Exercises</h3>
                  <p className="text-gray-600 text-sm">Practice with fill-in-the-blank quizzes and get instant feedback</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mt-1">
                  <span className="text-blue-600 text-sm">✓</span>
                </div>
                <div>
                  <h3 className="font-semibold">Progressive Learning</h3>
                  <p className="text-gray-600 text-sm">Structured lessons that cover eveything from tenses to pronouns</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mt-1">
                  <span className="text-blue-600 text-sm">✓</span>
                </div>
                <div>
                  <h3 className="font-semibold">Tips and gramatical tricks for each paper</h3>
                  <p className="text-gray-600 text-sm">We have got all four paper types covered, with tricks and tips approved by the best teachers in IGCSE and IB</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default About;
