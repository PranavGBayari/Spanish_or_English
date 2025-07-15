
import { TenseData } from '../tensesData';

export const presentSimpleData: TenseData = {
  id: 'present-simple',
  slug: 'present-simple',
  name: "Present Simple",
  spanishName: "Presente Simple",
  description: "Used to describe habitual actions, general truths, and current states.",
  difficulty: "Beginner",
  examples: ["Yo hablo español", "Ella come frutas", "Nosotros vivimos aquí"],
  usage: "Daily routines, facts, and current situations",
  category: 'present',
  detailedInfo: {
    formation: `
      <div class="space-y-4">
        <h4 class="font-semibold text-lg">Regular Verb Conjugation</h4>
        <div class="overflow-x-auto">
          <table class="w-full border-collapse border border-gray-300">
            <thead>
              <tr class="bg-gray-50">
                <th class="border border-gray-300 p-2">Person</th>
                <th class="border border-gray-300 p-2">-AR Verbs (hablar)</th>
                <th class="border border-gray-300 p-2">-ER Verbs (comer)</th>
                <th class="border border-gray-300 p-2">-IR Verbs (vivir)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="border border-gray-300 p-2 font-medium">Yo</td>
                <td class="border border-gray-300 p-2">o</td>
                <td class="border border-gray-300 p-2">o</td>
                <td class="border border-gray-300 p-2">o</td>
              </tr>
              <tr>
                <td class="border border-gray-300 p-2 font-medium">Tú</td>
                <td class="border border-gray-300 p-2">as</td>
                <td class="border border-gray-300 p-2">es</td>
                <td class="border border-gray-300 p-2">es</td>
              </tr>
              <tr>
                <td class="border border-gray-300 p-2 font-medium">Él/Ella/Usted</td>
                <td class="border border-gray-300 p-2">a</td>
                <td class="border border-gray-300 p-2">e</td>
                <td class="border border-gray-300 p-2">e</td>
              </tr>
              <tr>
                <td class="border border-gray-300 p-2 font-medium">Nosotros</td>
                <td class="border border-gray-300 p-2">amos</td>
                <td class="border border-gray-300 p-2">emos</td>
                <td class="border border-gray-300 p-2">imos</td>
              </tr>
              <tr>
                <td class="border border-gray-300 p-2 font-medium">Vosotros</td>
                <td class="border border-gray-300 p-2">áis</td>
                <td class="border border-gray-300 p-2">éis</td>
                <td class="border border-gray-300 p-2">ís</td>
              </tr>
              <tr>
                <td class="border border-gray-300 p-2 font-medium">Ellos/Ellas/Ustedes</td>
                <td class="border border-gray-300 p-2">an</td>
                <td class="border border-gray-300 p-2">en</td>
                <td class="border border-gray-300 p-2">en</td>
              </tr>

            </tbody>
          </table>
        </div>
        <div class="mt-4">
          <h4 class="font-semibold text-lg mb-2">Formation</h4>
          <p> To form the present simple, remove the infinitive endings (-ar, -er, -ir) and add the appropriate endings based on the verb ending.</p>
        </div>
      </div>
    `,
    usageContent: `
      <div class="space-y-4">
        <h4 class="font-semibold text-lg">Main Uses</h4>
        <div class="grid gap-4">
          <div class="p-4 bg-blue-50 rounded-lg">
            <h5 class="font-medium text-blue-800 mb-2">1. Habitual Actions</h5>
            <p class="text-blue-700">Actions that happen regularly or repeatedly</p>
            <p class="text-sm italic mt-1">Example: "Yo desayuno a las 7:00 todos los días"</p>
          </div>
          <div class="p-4 bg-green-50 rounded-lg">
            <h5 class="font-medium text-green-800 mb-2">2. General Truths</h5>
            <p class="text-green-700">Facts that are always true</p>
            <p class="text-sm italic mt-1">Example: "El sol sale por el este"</p>
          </div>
          <div class="p-4 bg-purple-50 rounded-lg">
            <h5 class="font-medium text-purple-800 mb-2">3. Current States</h5>
            <p class="text-purple-700">Describing how things are right now</p>
            <p class="text-sm italic mt-1">Example: "Ella vive en Madrid"</p>
          </div>
        </div>
        
        
      </div>
    `,
    irregular: `
          
            <h4 class="font-semibold text-lg mb-5">a. Irregular Yo Form Conjugations</h4>
            <p><strong>-go verbs:</strong> Verbs that add "-go" in the yo form.</p><br />
            <p>hacer → <strong>hago</strong> (to do/make)</p>
            <p>tener → <strong>tengo</strong> (to have)</p>
            <p>salir → <strong>salgo</strong> (to leave)</p>
            <p>poner → <strong>pongo</strong> (to put)</p>
            <p>decir → <strong>digo</strong> (to say/tell)</p><br />

            <p><strong>-zco verbs:</strong> Verbs ending in -cer or -cir where the root often ends in a vowel and change to "-zco" in the yo form.</p><br />
            <p>conocer → <strong>conozco</strong> (to know/meet)</p>
            <p>traducir → <strong>traduzco</strong> (to translate)</p>
            <p>conducir → <strong>conduzco</strong> (to drive)</p><br />

            <p><strong>Other irregular yo forms:</strong></p><br />
            <p>saber → <strong>sé</strong> (to know)</p>
            <p>ver → <strong>veo</strong> (to see)</p>
            <p>caber → <strong>quepo</strong> (to fit)</p>
            <p>dar → <strong>doy</strong> (to give)</p><br />

            <h4 class="font-semibold text-lg mb-5">b. Stem-Changing Verbs</h4>
            <h5 class = "font-semibold text-purple-800 mb-4">1. e → ie:</h5
            <p>pensar → pienso, piensas, piensa, pensamos, pensáis, piensan (to think)</p>
            <p>querer → quiero, quieres, quiere, queremos, queréis, quieren (to want)</p>
            <p>entender → entiendo, entiendes, entiende, entendemos, entendéis, entienden (to understand)</p><br />

            <h5 class = "font-semibold text-purple-800 mb-4">2. o → ue:</h5
            <p>poder → puedo, puedes, puede, podemos, podéis, pueden (to be able to/can)</p>
            <p>dormir → duermo, duermes, duerme, dormimos, dormís, duermen (to sleep)</p>
            <p>volver → vuelvo, vuelves, vuelve, volvemos, volvéis, vuelven (to return)</p><br />

            <h5 class = "font-semibold text-purple-800 mb-4">3. e → i: (common in -ir verbs)</h5>
            <p>pedir → pido, pides, pide, pedimos, pedís, piden (to ask for)</p>
            <p>servir → sirvo, sirves, sirve, servimos, servís, sirven (to serve)</p>
            <p>repetir → repito, repites, repite, repetimos, repetís, repiten (to repeat)</p><br />

            <h4 class="font-semibold text-lg mb-5">c. Completely Irregular Verbs</h4>
            <p>ser (to be): soy, eres, es, somos, sois, son</p>
            <p>ir (to go): voy, vas, va, vamos, vais, van</p>
            <p>estar (to be - temporary states or locations): estoy, estás, está, estamos, estáis, están</p>
            <p>haber (used as an auxiliary verb): he, has, ha, hemos, habéis, han</p><br />

            <h4 class="font-semibold text-lg mb-5">d. Accent Changes in Some Irregular Verbs</h4>
            <p>continuar → continúo, continúas, continúa, continuamos, continuáis, continúan (to continue)</p>
            <p>enviar → envío, envías, envía, enviamos, enviáis, envían (to send)</p><br />

            <p><em>With consistent practice, these irregular patterns will become second nature!</em></p>
`,
    timeExpressions: ["siempre", "nunca", "todos los días", "a menudo"],
    commonMistakes: ["Remember that the nosotros and vosotros forms do not have stem changes in stem-changing verbs.", "Usted and Usteded are the replacemnts for tú and vosotros in formal contexts."],
    culturalNotes: "The present simple is used much more frequently in Spanish than the present continuous, which is less common in everyday speech.",
    relatedTenses: ["present-continuous"]
  }
};
