
import { presentSimpleData } from './tenses/present-simple';
import { presentContinuousData } from './tenses/present-continuous';
import { preteriteData } from './tenses/preterite';
import { imperfectData } from './tenses/imperfect';
import { simpleFutureData } from './tenses/simple-future';
import { presentSubjunctiveData } from './tenses/present-subjunctive';

export interface TenseData {
  id: string;
  slug: string;
  name: string;
  spanishName: string;
  description: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  examples: string[];
  usage: string;
  category: 'present' | 'past' | 'future' | 'subjunctive';
  detailedInfo: {
    formation: string;
    usageContent?: string;
    timeExpressions: string[];
    commonMistakes: string[];
    culturalNotes: string;
    relatedTenses: string[];
    irregular: string;
  };
}

export const tensesData: TenseData[] = [
  presentSimpleData,
  presentContinuousData,
  preteriteData,
  imperfectData,
  simpleFutureData,
  presentSubjunctiveData
];

export const getTenseBySlug = (slug: string): TenseData | undefined => {
  return tensesData.find(tense => tense.slug === slug);
};

export const getTensesByCategory = (category: string): TenseData[] => {
  return tensesData.filter(tense => tense.category === category);
};
