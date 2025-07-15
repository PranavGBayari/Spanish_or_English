
import { TenseData } from '../tensesData';

export const preteriteData: TenseData = {
  id: 'preterite',
  slug: 'preterite',
  name: "Preterite",
  spanishName: "Pretérito Indefinido",
  description: "Used for completed actions in the past with specific time references.",
  difficulty: "Intermediate",
  examples: ["Yo comí ayer", "Ella viajó el mes pasado", "Estudiamos anoche"],
  usage: "Completed past actions with defined time",
  category: 'past',
  detailedInfo: {
    formation: `
      <div class="space-y-4">
        <h4 class="font-semibold text-lg">Regular Preterite Conjugation</h4>
        <div class="overflow-x-auto">
          <table class="w-full border-collapse border border-gray-300">
            <thead>
              <tr class="bg-gray-50">
                <th class="border border-gray-300 p-2">Person</th>
                <th class="border border-gray-300 p-2">-AR Verbs</th>
                <th class="border border-gray-300 p-2">-ER/-IR Verbs</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="border border-gray-300 p-2 font-medium">Yo</td>
                <td class="border border-gray-300 p-2">-é</td>
                <td class="border border-gray-300 p-2">-í</td>
              </tr>
              <tr>
                <td class="border border-gray-300 p-2 font-medium">Tú</td>
                <td class="border border-gray-300 p-2">-aste</td>
                <td class="border border-gray-300 p-2">-iste</td>
              </tr>
              <tr>
                <td class="border border-gray-300 p-2 font-medium">Él/Ella</td>
                <td class="border border-gray-300 p-2">-ó</td>
                <td class="border border-gray-300 p-2">-ió</td>
              </tr>
              <tr>
                <td class="border border-gray-300 p-2 font-medium">Nosotros</td>
                <td class="border border-gray-300 p-2">-amos</td>
                <td class="border border-gray-300 p-2">-imos</td>
              </tr>
              <tr>
                <td class="border border-gray-300 p-2 font-medium">Vosotros</td>
                <td class="border border-gray-300 p-2">-asteis</td>
                <td class="border border-gray-300 p-2">-isteis</td>
              </tr>
              <tr>
                <td class="border border-gray-300 p-2 font-medium">Ellos/Ellas</td>
                <td class="border border-gray-300 p-2">-aron</td>
                <td class="border border-gray-300 p-2">-ieron</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    `,
    usageContent: `
      <div class="space-y-4">
        <h4 class="font-semibold text-lg">When to Use Preterite</h4>
        <div class="grid gap-4">
          <div class="p-4 bg-blue-50 rounded-lg">
            <h5 class="font-medium text-blue-800 mb-2">1. Completed Actions</h5>
            <p class="text-blue-700">Actions that happened and finished at a specific time</p>
            <p class="text-sm italic mt-1">Example: "Comí pizza ayer" (I ate pizza yesterday)</p>
          </div>
          <div class="p-4 bg-green-50 rounded-lg">
            <h5 class="font-medium text-green-800 mb-2">2. Sequence of Events</h5>
            <p class="text-green-700">Series of actions that happened one after another</p>
            <p class="text-sm italic mt-1">Example: "Me levanté, desayuné y salí de casa"</p>
          </div>
          <div class="p-4 bg-yellow-50 rounded-lg">
            <h5 class="font-medium text-yellow-800 mb-2">3. Specific Time References</h5>
            <p class="text-yellow-700">Actions that occured at a specific time in the past</p>
            <p class="text-sm italic mt-1">Example: "El año pasado fuimos a España"</p>
        </div>
      </div>
    `,
    irregular: `
        <p>Many verbs in the <b>pretérito indefinido</b> have irregular stems and endings. Here are some of the most common irregular verbs and their conjugations:</p><br />
    
        <h4 class="font-semibold text-lg mb-3">Irregular Stems and Endings</h4>
        <p>For these irregular verbs, use the following endings (note there are no accent marks):</p><br />
        <table class="w-full border-collapse border border-gray-300">
        <thead>
          <tr class="bg-gray-50">
            <th class="border border-gray-300 p-2">Person</th>
            <th class="border border-gray-300 p-2">-AR Verbs</th>
            <th class="border border-gray-300 p-2">-ER/-IR Verbs</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="border border-gray-300 p-2 font-medium">Yo</td>
            <td class="border border-gray-300 p-2">-é</td>
            <td class="border border-gray-300 p-2">-í</td>
          </tr>
          <tr>
            <td class="border border-gray-300 p-2 font-medium">Tú</td>
            <td class="border border-gray-300 p-2">-aste</td>
            <td class="border border-gray-300 p-2">-iste</td>
          </tr>
          <tr>
            <td class="border border-gray-300 p-2 font-medium">Él/Ella</td>
            <td class="border border-gray-300 p-2">-ó</td>
            <td class="border border-gray-300 p-2">-ió</td>
          </tr>
          <tr>
            <td class="border border-gray-300 p-2 font-medium">Nosotros</td>
            <td class="border border-gray-300 p-2">-amos</td>
            <td class="border border-gray-300 p-2">-imos</td>
          </tr>
          <tr>
            <td class="border border-gray-300 p-2 font-medium">Vosotros</td>
            <td class="border border-gray-300 p-2">-asteis</td>
            <td class="border border-gray-300 p-2">-isteis</td>
          </tr>
          <tr>
            <td class="border border-gray-300 p-2 font-medium">Ellos/Ellas</td>
            <td class="border border-gray-300 p-2">-aron</td>
            <td class="border border-gray-300 p-2">-ieron</td>
          </tr>
        </tbody>
        </table><br />

            
        <h4 class="font-semibold text-lg mb-3">Common Irregular Verbs and Their Stems</h4>
        <table class="w-full border-collapse border border-gray-300">
          <thead>
            <tr class="bg-gray-50">
              <th class="border border-gray-300 p-2">Verb</th>
              <th class="border border-gray-300 p-2">Stem Change</th>
              <th class="border border-gray-300 p-2">Exceptions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="border border-gray-300 p-2">tener</td>
              <td class="border border-gray-300 p-2">tuv-</td>
              <td class="border border-gray-300 p-2">-</td>
            </tr>
            <tr>
              <td class="border border-gray-300 p-2">estar</td>
              <td class="border border-gray-300 p-2">estuv-</td>
              <td class="border border-gray-300 p-2">-</td>
            </tr>
            <tr>
              <td class="border border-gray-300 p-2">poder</td>
              <td class="border border-gray-300 p-2">pud-</td>
              <td class="border border-gray-300 p-2">-</td>
            </tr>
            <tr>
              <td class="border border-gray-300 p-2">poner</td>
              <td class="border border-gray-300 p-2">pus-</td>
              <td class="border border-gray-300 p-2">-</td>
            </tr>
            <tr>
              <td class="border border-gray-300 p-2">saber</td>
              <td class="border border-gray-300 p-2">sup-</td>
              <td class="border border-gray-300 p-2">-</td>
            </tr>
            <tr>
              <td class="border border-gray-300 p-2">venir</td>
              <td class="border border-gray-300 p-2">vin-</td>
              <td class="border border-gray-300 p-2">-</td>
            </tr>
            <tr>
              <td class="border border-gray-300 p-2">traer</td>
              <td class="border border-gray-300 p-2">traj-</td>
              <td class="border border-gray-300 p-2">ellos/ellas/ustedes form ends in -eron instead of -ieron</td>
            </tr>
            <tr>
              <td class="border border-gray-300 p-2">decir</td>
              <td class="border border-gray-300 p-2">dij-</td>
              <td class="border border-gray-300 p-2">-</td>
            </tr>
            <tr>
              <td class="border border-gray-300 p-2">hacer</td>
              <td class="border border-gray-300 p-2">hic-</td>
              <td class="border border-gray-300 p-2">él/ella/usted form is hizo</td>
            </tr>
          </tbody>
          </table><br />
    
          <h4 class="font-semibold text-lg mb-3">Irregular Verbs: Ser and Ir</h4>
          <p>Both <b>ser</b> (to be) and <b>ir</b> (to go) share the exact same conjugations in the pretérito indefinido:</p><br />
          <table class="w-full border-collapse border border-gray-300">
            <thead>
              <tr class="bg-gray-50">
                <th class="border border-gray-300 p-2">Subject</th>
                <th class="border border-gray-300 p-2">Conjugation</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="border border-gray-300 p-2 font-medium">Yo</td>
                <td class="border border-gray-300 p-2">fui</td>
              </tr>
              <tr>
                <td class="border border-gray-300 p-2 font-medium">Tú</td>
                <td class="border border-gray-300 p-2">fuiste</td>
              </tr>
              <tr>
                <td class="border border-gray-300 p-2 font-medium">Él/Ella/Ud.</td>
                <td class="border border-gray-300 p-2">fue</td>
              </tr>
              <tr>
                <td class="border border-gray-300 p-2 font-medium">Nosotros</td>
                <td class="border border-gray-300 p-2">fuimos</td>
              </tr>
              <tr>
                <td class="border border-gray-300 p-2 font-medium">Vosotros</td>
                <td class="border border-gray-300 p-2">fuisteis</td>
              </tr>
              <tr>
                <td class="border border-gray-300 p-2 font-medium">Ellos/Uds.</td>
                <td class="border border-gray-300 p-2">fueron</td>
              </tr>
            </tbody>
          </table>

        `,
    timeExpressions: ["ayer", "la semana pasada", "en 2020"],
    commonMistakes: ["Confusing with imperfect - while the pretérito indefinido emphasizes that an action is completed, the pretérito imperfecto is used to describe ongoing or habitual actions.", "Irregular verb forms"],
    culturalNotes: "Essential for storytelling in Spanish",
    relatedTenses: ["imperfect"]
  }
};
