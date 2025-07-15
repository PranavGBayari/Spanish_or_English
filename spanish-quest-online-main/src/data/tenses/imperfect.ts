
import { TenseData } from '../tensesData';

export const imperfectData: TenseData = {
  id: 'imperfect',
  slug: 'imperfect',
  name: "Imperfect",
  spanishName: "Pretérito Imperfecto",
  description: "Describes ongoing past actions, habits, or background information.",
  difficulty: "Intermediate",
  examples: ["Yo jugaba fútbol", "Ella leía mucho", "Vivíamos en Madrid"],
  usage: "Past habits, ongoing past actions, descriptions",
  category: 'past',
  detailedInfo: {
    formation: `
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
                <td class="border border-gray-300 p-2">-aba</td>
                <td class="border border-gray-300 p-2">-ía</td>
              </tr>
              <tr>
                <td class="border border-gray-300 p-2 font-medium">Tú</td>
                <td class="border border-gray-300 p-2">-abas</td>
                <td class="border border-gray-300 p-2">-ías</td>
              </tr>
              <tr>
                <td class="border border-gray-300 p-2 font-medium">Él/Ella</td>
                <td class="border border-gray-300 p-2">-aba</td>
                <td class="border border-gray-300 p-2">-ía</td>
              </tr>
              <tr>
                <td class="border border-gray-300 p-2 font-medium">Nosotros</td>
                <td class="border border-gray-300 p-2">-ábamos</td>
                <td class="border border-gray-300 p-2">-íamos</td>
              </tr>
              <tr>
                <td class="border border-gray-300 p-2 font-medium">Vosotros</td>
                <td class="border border-gray-300 p-2">-abais</td>
                <td class="border border-gray-300 p-2">-íais</td>
              </tr>
              <tr>
                <td class="border border-gray-300 p-2 font-medium">Ellos/Ellas</td>
                <td class="border border-gray-300 p-2">-aban</td>
                <td class="border border-gray-300 p-2">-ían</td>
              </tr>
            </tbody>
          </table>`,
    usageContent: `
        <div class="space-y-4">
        <h4 class="font-semibold text-lg">When to Use Imperfecto</h4>
        <div class="grid gap-4">
          <div class="p-4 bg-blue-50 rounded-lg">
            <h5 class="font-medium text-blue-800 mb-2">1. Describing Ongoing or Background Actions</h5>
            <p class="text-blue-700"> Los niños jugaban en el parque mientras yo leía</p>
            <p class="text-sm italic mt-1">The children were playing in the park while I was reading(I ate pizza yesterday)</p>
          </div>
          <div class="p-4 bg-green-50 rounded-lg">
            <h5 class="font-medium text-green-800 mb-2">2. Habitual or Repeated Actions in the Past</h5>
            <p class="text-green-700">Siempre íbamos a la casa de mis abuelos los domingos</p>
            <p class="text-sm italic mt-1">We used to go to my grandparents' house every Sunday</p>
          </div>
          <div class="p-4 bg-yellow-50 rounded-lg">
            <h5 class="font-medium text-yellow-800 mb-2">3. Describing Background Information or Setting a Scene</h5>
            <p class="text-yellow-700">Era una noche fría y llovía muchoIt was a cold night, and it was raining heavily</p>
            <p class="text-sm italic mt-1">It was a cold night, and it was raining heavily</p>
          </div>
          <div class="p-4 bg-purple-50 rounded-lg">
            <h5 class="font-medium text-purple-800 mb-2">4. Giving Descriptions of People, Places, or Things in the Past</h5>
            <p class="text-purple-700">La casa era grande y tenía un jardín hermoso</p>
            <p class="text-sm italic mt-1">The house was big and had a beautiful garden</p>
          </div>
          <div class="p-4 bg-red-50 rounded-lg">
            <h5 class="font-medium text-red-800 mb-2">5. Expressing Simultaneous Actions in the Past</h5>
            <p class="text-red-700">Mi madre cocinaba mientras yo hacía la tarea</p>
            <p class="text-sm italic mt-1">My mother was cooking while I was doing my homework</p>
          </div>
        </div>
        </div>
       `,
    irregular: `
          <p>In the pretérito imperfecto, only three verbs are irregular: ir (to go), ser (to be), and ver (to see).</p><br />
          <table class="w-full border-collapse border border-gray-300">
            <thead>
              <tr class="bg-gray-50">
                <th class="border border-gray-300 p-2">Verb</th>
                <th class="border border-gray-300 p-2">Yo</th>
                <th class="border border-gray-300 p-2">Tú</th>
                <th class="border border-gray-300 p-2">Él/Ella</th>
                <th class="border border-gray-300 p-2">Nosotros</th>
                <th class="border border-gray-300 p-2">Vosotros</th>
                <th class="border border-gray-300 p-2">Ellos/Ellas</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="border border-gray-300 p-2">Ir</td>
                <td class="border border-gray-300 p-2">iba</td>
                <td class="border border-gray-300 p-2">ibas</td>
                <td class="border border-gray-300 p-2">iba</td>
                <td class="border border-gray-300 p-2">íbamos</td>
                <td class="border border-gray-300 p-2">ibais</td>
                <td class="border border-gray-300 p-2">iban</td>
              </tr>
              <tr>
                <td class="border border-gray-300 p-2">Ser</td>
                <td class="border border-gray-300 p-2">era</td>
                <td class="border border-gray-300 p-2">eras</td>
                <td class="border border-gray-300 p-2">era</td>   
                <td class="border border-gray-300 p-2">éramos</td>
                <td class="border border-gray-300 p-2">erais</td>
                <td class="border border-gray-300 p-2">eran</td>
              </tr>
              <tr>
                <td class="border border-gray-300 p-2">Ver</td>
                <td class="border border-gray-300 p-2">veía</td>
                <td class="border border-gray-300 p-2">veías</td>
                <td class="border border-gray-300 p-2">veía</td>
                <td class="border border-gray-300 p-2">veíamos</td>
                <td class="border border-gray-300 p-2">veíais</td>
                <td class="border border-gray-300 p-2">veían</td>
              </tr>
            </tbody>      
          </table>
    `,
    timeExpressions: ["cuando era niño", "todos los días", "siempre"],
    commonMistakes: ["Overusing instead of preterite", "Wrong context usage"],
    culturalNotes: "Used for setting scenes in stories",
    relatedTenses: ["preterite"]
  }
};
