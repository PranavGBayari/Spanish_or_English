
import { TenseData } from '../tensesData';

export const presentContinuousData: TenseData = {
  id: 'present-continuous',
  slug: 'present-continuous',
  name: "Present Continuous",
  spanishName: "Presente Continuo",
  description: "Describes actions happening right now or temporary situations.",
  difficulty: "Beginner",
  examples: ["Estoy estudiando", "Ella está cocinando", "Estamos trabajando"],
  usage: "Actions in progress at the moment of speaking",
  category: 'present',
  detailedInfo: {
    formation: `
      <div class="space-y-4">
        <h4 class="font-semibold text-lg">Formation: ESTAR + Gerund</h4>
        <div class="overflow-x-auto">
          <table class="w-full border-collapse border border-gray-300">
            <thead>
              <tr class="bg-gray-50">
                <th class="border border-gray-300 p-2">Person</th>
                <th class="border border-gray-300 p-2">ESTAR</th>
                <th class="border border-gray-300 p-2">+ Gerund</th>
                <th class="border border-gray-300 p-2">Example</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="border border-gray-300 p-2 font-medium">Yo</td>
                <td class="border border-gray-300 p-2">estoy</td>
                <td class="border border-gray-300 p-2">hablando</td>
                <td class="border border-gray-300 p-2">Estoy hablando</td>
              </tr>
              <tr>
                <td class="border border-gray-300 p-2 font-medium">Tú</td>
                <td class="border border-gray-300 p-2">estás</td>
                <td class="border border-gray-300 p-2">comiendo</td>
                <td class="border border-gray-300 p-2">Estás comiendo</td>
              </tr>
              <tr>
                <td class="border border-gray-300 p-2 font-medium">Él/Ella</td>
                <td class="border border-gray-300 p-2">está</td>
                <td class="border border-gray-300 p-2">viviendo</td>
                <td class="border border-gray-300 p-2">Está viviendo</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="mt-4">
          <h4 class="font-semibold text-lg mb-2">Gerund Formation</h4>
          <ul class="list-disc list-inside space-y-1">
            <li><strong>-AR verbs:</strong> Remove -ar, add -ando (hablar → hablando)</li>
            <li><strong>-ER verbs:</strong> Remove -er, add -iendo (comer → comiendo)</li>
            <li><strong>-IR verbs:</strong> Remove -ir, add -iendo (vivir → viviendo)</li>
          </ul>
        </div>
      </div>
    `,
    usageContent: `
      <div class="space-y-4">
        <h4 class="font-semibold text-lg">When to Use Present Continuous</h4>
        <div class="grid gap-4">
          <div class="p-4 bg-yellow-50 rounded-lg">
            <h5 class="font-medium text-yellow-800 mb-2">1. Actions Happening Right Now</h5>
            <p class="text-yellow-700">Something occurring at this exact moment</p>
            <p class="text-sm italic mt-1">Example: "Estoy escribiendo un email ahora mismo"</p>
          </div>
          <div class="p-4 bg-orange-50 rounded-lg">
            <h5 class="font-medium text-orange-800 mb-2">2. Temporary Situations</h5>
            <p class="text-orange-700">Situations that are temporary, not permanent</p>
            <p class="text-sm italic mt-1">Example: "Estoy viviendo con mis padres este mes"</p>
          </div>
        </div>
        <div class="mt-6">
          <h4 class="font-semibold text-lg mb-2">Important Note</h4>
          <div class="p-4 bg-red-50 rounded-lg">
            <p class="text-red-700">
              Spanish uses present continuous much LESS than English. Many actions that use 
              "to be + -ing" in English use the simple present in Spanish.
            </p>
            <div class="mt-2 text-sm">
              <p><strong>English:</strong> "I'm studying Spanish" (general statement)</p>
              <p><strong>Spanish:</strong> "Estudio español" (NOT "Estoy estudiando español")</p>
            </div>
          </div>
        </div>
      </div>
    `,
    irregular: `<p> Some verbs have irregular gerund forms due to spelling changes for easier pronunciation:</p><br />
                <ul class="list-disc list-inside space-y-1">
                  <li>decir → diciendo (saying)</li>
                  <li>pedir → pidiendo (asking for)</li>
                  <li>dormir → durmiendo (sleeping)</li>
                  <li>leer → leyendo (reading)</li>
                  <li>oír → oyendo (hearing)</li>
                </ul>`,
    timeExpressions: ["ahora", "en este momento", "actualmente"],
    commonMistakes: ["Using ser instead of estar", "Incorrect gerund formation"],
    culturalNotes: "Less commonly used than in English - Spanish speakers prefer simple present for many ongoing actions",
    relatedTenses: ["present-simple"]
  }
};
