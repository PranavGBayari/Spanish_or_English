
import { TenseData } from '../tensesData';

export const simpleFutureData: TenseData = {
  id: 'simple-future',
  slug: 'simple-future',
  name: "Simple Future",
  spanishName: "Futuro Simple",
  description: "Expresses actions that will happen in the future.",
  difficulty: "Intermediate",
  examples: ["Yo estudiaré mañana", "Ella viajará pronto", "Iremos al cine"],
  usage: "Future plans, predictions, promises",
  category: 'future',
  detailedInfo: {
    formation: `
      <div class="space-y-4">
        <h4 class="font-semibold text-lg">Formation: Infinitive + Endings</h4>
        <div class="overflow-x-auto">
          <table class="w-full border-collapse border border-gray-300">
            <thead>
              <tr class="bg-gray-50">
                <th class="border border-gray-300 p-2">Person</th>
                <th class="border border-gray-300 p-2">-AR/ER/IR Verbs</th>
                <th class="border border-gray-300 p-2">Example</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="border border-gray-300 p-2 font-medium">Yo</td>
                <td class="border border-gray-300 p-2">-é</td>
                <td class="border border-gray-300 p-2">Estudiaré</td>
              </tr>
              <tr>
                <td class="border border-gray-300 p-2 font-medium">Tú</td>
                <td class="border border-gray-300 p-2">-ás </td>
                <td class="border border-gray-300 p-2">Estudiarás</td>
              </tr>
              <tr>
                <td class="border border-gray-300 p-2 font-medium">Él/Ella/Usted</td>
                <td class="border border-gray-300 p-2">-á </td>
                <td class="border border-gray-300 p-2">Estudiará</td>
              </tr>
              <tr>
                <td class="border border-gray-300 p-2 font-medium">Nosotros</td>
                <td class="border border-gray-300 p-2">-emos </td>
                <td class="border border-gray-300 p-2">Estudiaremos</td>
              </tr>
              <tr>
                <td class="border border-gray-300 p-2 font-medium">Vosotros</td>
                <td class="border border-gray-300 p-2">-éis </td>
                <td class="border border-gray-300 p-2">Estudiaréis</td>
              </tr>
              <tr>
                <td class="border border-gray-300 p-2 font-medium">Ellos/Ellas/Ustedes</td>
                <td class="border border-gray-300 p-2">-án </td>
                <td class="border border-gray-300 p-2">Estudiarán</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    
    `,
    usageContent: `
      <div class="space-y-4">
        <div class="grid gap-4">
          <div class="p-4 bg-yellow-50 rounded-lg">
            <h5 class="font-semibold">Future Plans</h5>
            <p class="text-yellow-700">To express plans or intentions for the future</p>
            <p class="text-sm italic">Example: "Mañana estudiaré para el examen"</p>
          </div>
          <div class="p-4 bg-green-50 rounded-lg">
            <h5 class="font-semibold">Predictions</h5>
            <p class="text-green-700">To make predictions about future events</p>
            <p class="text-sm italic">Example: "Creo que lloverá mañana"</p>
          </div>
          <div class="p-4 bg-blue-50 rounded-lg">
            <h5 class="font-semibold">Promises</h5>
            <p class="text-blue-700">To make promises or commitments</p>
            <p class="text-sm italic">Example: "Te ayudaré con tu tarea"</p>
          </div>
        </div>
      </div>`,
    irregular: `
        <p>In the futuro tense, some verbs have irregular stems. Instead of using the infinitive form, these verbs change their stem before adding the future endings. The endings themselves remain the same as for regular verbs.</p><br />
  
        <h4 class = "font-semibold text-lg mb-3">Common Irregular Verbs and Their Stems</h4>
    
        <table class="w-full border-collapse border border-gray-300">
          <thead>
            <tr class="bg-gray-50">
              <th class="border border-gray-300 p-2">Infinitive</th>
              <th class="border border-gray-300 p-2">Irregular Stem</th>
              <th class="border border-gray-300 p-2">Conjugation Example (Yo)</th>
              <th class="border border-gray-300 p-2">Translation</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="border border-gray-300 p-2 font-medium">decir</td>
              <td class="border border-gray-300 p-2">dir-</td>
              <td class="border border-gray-300 p-2">diré</td>
              <td class="border border-gray-300 p-2">I will say</td>
            </tr>
            <tr>
              <td class="border border-gray-300 p-2 font-medium">hacer</td>
              <td class="border border-gray-300 p-2">har-</td>
              <td class="border border-gray-300 p-2">haré</td>
              <td class="border border-gray-300 p-2">I will do/make</td>
            </tr>
            <tr>
              <td class="border border-gray-300 p-2 font-medium">poder</td>
              <td class="border border-gray-300 p-2">podr-</td>
              <td class="border border-gray-300 p-2">podré</td>
              <td class="border border-gray-300 p-2">I will be able to</td>
            </tr>
            <tr>
              <td class="border border-gray-300 p-2 font-medium">poner</td>
              <td class="border border-gray-300 p-2">pondr-</td>
              <td class="border border-gray-300 p-2">pondré</td>
              <td class="border border-gray-300 p-2">I will put/place</td>
            </tr>
            <tr>
              <td class="border border-gray-300 p-2 font-medium">querer</td>
              <td class="border border-gray-300 p-2">querr-</td>
              <td class="border border-gray-300 p-2">querré</td>
              <td class="border border-gray-300 p-2">I will want</td>
            </tr>
            <tr>
              <td class="border border-gray-300 p-2 font-medium">saber</td>
              <td class="border border-gray-300 p-2">sabr-</td>
              <td class="border border-gray-300 p-2">sabré</td>
              <td class="border border-gray-300 p-2">I will know</td>
            </tr>
            <tr>
              <td class="border border-gray-300 p-2 font-medium">salir</td>
              <td class="border border-gray-300 p-2">saldr-</td>
              <td class="border border-gray-300 p-2">saldré</td>
              <td class="border border-gray-300 p-2">I will leave/go out</td>
            </tr>
            <tr>
              <td class="border border-gray-300 p-2 font-medium">tener</td>
              <td class="border border-gray-300 p-2">tendr-</td>
              <td class="border border-gray-300 p-2">tendré</td>
              <td class="border border-gray-300 p-2">I will have</td>
            </tr>
            <tr>
              <td class="border border-gray-300 p-2 font-medium">valer</td>
              <td class="border border-gray-300 p-2">valdr-</td>
              <td class="border border-gray-300 p-2">valdré</td>
              <td class="border border-gray-300 p-2">I will be worth</td>
            </tr>
            <tr>
              <td class="border border-gray-300 p-2 font-medium">venir</td>
              <td class="border border-gray-300 p-2">vendr-</td>
              <td class="border border-gray-300 p-2">vendré</td>
              <td class="border border-gray-300 p-2">I will come</td>
            </tr>
          </tbody>
        </table>

    `,
    timeExpressions: ["mañana", "la próxima semana", "en el futuro"],
    commonMistakes: ["Irregular stems", "Confusing with conditional"],
    culturalNotes: "Can often replaced by 'ir a + infinitive' in speech",
    relatedTenses: ["conditional"]
  }
};
