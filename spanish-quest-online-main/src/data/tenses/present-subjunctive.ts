
import { TenseData } from '../tensesData';

export const presentSubjunctiveData: TenseData = {
  id: 'present-subjunctive',
  slug: 'present-subjunctive',
  name: "Present Subjunctive",
  spanishName: "Presente de Subjuntivo",
  description: "Expresses doubt, emotion, desire, or hypothetical situations.",
  difficulty: "Advanced",
  examples: ["Espero que vengas", "Dudo que llueva", "Es importante que estudies"],
  usage: "Emotions, doubts, wishes, recommendations",
  category: 'subjunctive',
  detailedInfo: {
    formation: `
            <h4 class="font-semibold text-lg mb-3">To conjugate regular verbs in the present subjunctive, follow these steps:</h4><br />
            <ol class="list-disc list-inside space-y-1">
                  <li>Start with the present tense yo form of the verb.<br />
                  Example: hablar - hablo, comer - como, vivir - vivo</li><br />
                  <li>Drop the -o ending.<br />
                  Example: hablo - habl, como - com, vivo - viv</li><br />
                  <li>Add the appropriate subjunctive endings:</li>
                </ol><br />
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
                    <td class="border border-gray-300 p-2">-e</td>
                    <td class="border border-gray-300 p-2">-a</td>
                    
                  </tr>
                  <tr>
                    <td class="border border-gray-300 p-2 font-medium">Tú</td>
                    <td class="border border-gray-300 p-2">-es</td>
                    <td class="border border-gray-300 p-2">-as</td>
                  </tr>
                  <tr>
                    <td class="border border-gray-300 p-2 font-medium">Él/Ella/Usted</td>
                    <td class="border border-gray-300 p-2"> -e</td>
                    <td class="border border-gray-300 p-2">-a</td>
                  </tr>
                  <tr>
                    <td class="border border-gray-300 p-2 font-medium">Nosotros</td>
                    <td class="border border-gray-300 p-2">-emos</td>
                    <td class="border border-gray-300 p-2">-amos</td>
                  </tr>
                  <tr>
                    <td class="border border-gray-300 p-2 font-medium">Vosotros</td>
                    <td class="border border-gray-300 p-2">-éis</td>
                    <td class="border border-gray-300 p-2">-áis</td>
                  </tr>
                  <tr>
                    <td class="border border-gray-300 p-2 font-medium">Ellos/Ellas/Ustedes</td>
                    <td class="border border-gray-300 p-2">-en</td>
                    <td class="border border-gray-300 p-2">-an</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <h4 class="font-semibold text-lg mt-4">Examples</h4><br />
            <table class="w-full border-collapse border border-gray-300">
              <thead>
                <tr class="bg-gray-50">
                  <th class="border border-gray-300 p-2">Subject</th>
                  <th class="border border-gray-300 p-2">Hablar</th>
                  <th class="border border-gray-300 p-2">Comer</th>
                  <th class="border border-gray-300 p-2">Vivir</th>
                </tr>
              </thead>  
              <tbody>
                <tr>
                  <td class="border border-gray-300 p-2 font-medium">Yo</td>
                  <td class="border border-gray-300 p-2">hable</td>
                  <td class="border border-gray-300 p-2">coma</td>
                  <td class="border border-gray-300 p-2">viva</td>
                </tr>
                <tr>
                  <td class="border border-gray-300 p-2 font-medium">Tú</td>
                  <td class="border border-gray-300 p-2">hables</td>
                  <td class="border border-gray-300 p-2">comas</td>
                  <td class="border border-gray-300 p-2">vivas</td>
                </tr>
                <tr>
                  <td class="border border-gray-300 p-2 font-medium">Él/Ella/Usted</td>
                  <td class="border border-gray-300 p-2">hable</td>
                  <td class="border border-gray-300 p-2">coma</td>
                  <td class="border border-gray-300 p-2">viva</td>
                </tr>
                <tr>
                  <td class="border border-gray-300 p-2 font-medium">Nosotros</td>
                  <td class="border border-gray-300 p-2">hablemos</td>
                  <td class="border border-gray-300 p-2">comamos</td>
                  <td class="border border-gray-300 p-2">vivamos</td>
                </tr>
                <tr>
                  <td class="border border-gray-300 p-2 font-medium">Vosotros</td>
                  <td class="border border-gray-300 p-2">habléis</td>
                  <td class="border border-gray-300 p-2">comáis</td
                  <td class="border border-gray-300 p-2">viváis</td>
                </tr>
                <tr>
                  <td class="border border-gray-300 p-2 font-medium">Ellos/Ellas/Ustedes</td>
                  <td class="border border-gray-300 p-2">hablen</td>
                  <td class="border border-gray-300 p-2">coman</td>
                  <td class="border border-gray-300 p-2">vivan</td>
                </tr>
              </tbody>
            </table>

    `,
    usageContent: `

    `,
    irregular: ``,
    timeExpressions: ["que", "ojalá", "es posible que"],
    commonMistakes: ["Forgetting to use it", "Wrong trigger phrases"],
    culturalNotes: "Essential for polite and formal communication",
    relatedTenses: ["conditional"]
  }
};
