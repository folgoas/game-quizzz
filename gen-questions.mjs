#!/usr/bin/env node
// Main generator: combines all question parts into questions-bank.ts

import { writeFileSync } from 'fs';
import { cgMCQ, cgCash } from './gen-part1.mjs';
import { csMCQ, csCash } from './gen-part2.mjs';
import { spMCQ, spCash } from './gen-part3.mjs';
import { muMCQ, muCash } from './gen-part4.mjs';

function esc(s) { return s.replace(/\\/g, '\\\\').replace(/'/g, "\\'"); }

function formatMCQ(id, text, answers, correct, category) {
  return `  { id: '${id}', text: '${esc(text)}', answers: [${answers.map(a => `'${esc(a)}'`).join(', ')}], correct: ${correct}, category: '${category}', type: "multiple-choice" as const }`;
}

function formatCash(id, text, acceptedAnswers, category) {
  return `  { id: '${id}', text: '${esc(text)}', acceptedAnswers: [${acceptedAnswers.map(a => `'${esc(a)}'`).join(', ')}], category: '${category}', type: "cash-answer" as const }`;
}

const allMCQ = [];
const allCash = [];

const MCQ_PER_CAT = 150;
const CASH_PER_CAT = 50;

// Culture Générale
cgMCQ.slice(0, MCQ_PER_CAT).forEach((q, i) => allMCQ.push(formatMCQ(`cg${i+1}`, q[0], q[1], q[2], 'Culture Générale')));
cgCash.slice(0, CASH_PER_CAT).forEach((q, i) => allCash.push(formatCash(`cg_ca${i+1}`, q[0], q[1], 'Culture Générale')));

// Cinéma & Séries
csMCQ.slice(0, MCQ_PER_CAT).forEach((q, i) => allMCQ.push(formatMCQ(`cs${i+1}`, q[0], q[1], q[2], 'Cinéma & Séries')));
csCash.slice(0, CASH_PER_CAT).forEach((q, i) => allCash.push(formatCash(`cs_ca${i+1}`, q[0], q[1], 'Cinéma & Séries')));

// Sport
spMCQ.slice(0, MCQ_PER_CAT).forEach((q, i) => allMCQ.push(formatMCQ(`sp${i+1}`, q[0], q[1], q[2], 'Sport')));
spCash.slice(0, CASH_PER_CAT).forEach((q, i) => allCash.push(formatCash(`sp_ca${i+1}`, q[0], q[1], 'Sport')));

// Musique
muMCQ.slice(0, MCQ_PER_CAT).forEach((q, i) => allMCQ.push(formatMCQ(`mu${i+1}`, q[0], q[1], q[2], 'Musique')));
muCash.slice(0, CASH_PER_CAT).forEach((q, i) => allCash.push(formatCash(`mu_ca${i+1}`, q[0], q[1], 'Musique')));

// Verify counts
const cgMCQCount = cgMCQ.length;
const csMCQCount = csMCQ.length;
const spMCQCount = spMCQ.length;
const muMCQCount = muMCQ.length;
const cgCashCount = cgCash.length;
const csCashCount = csCash.length;
const spCashCount = spCash.length;
const muCashCount = muCash.length;

console.log(`Culture Générale: ${cgMCQCount} MCQ + ${cgCashCount} Cash = ${cgMCQCount + cgCashCount}`);
console.log(`Cinéma & Séries: ${csMCQCount} MCQ + ${csCashCount} Cash = ${csMCQCount + csCashCount}`);
console.log(`Sport: ${spMCQCount} MCQ + ${spCashCount} Cash = ${spMCQCount + spCashCount}`);
console.log(`Musique: ${muMCQCount} MCQ + ${muCashCount} Cash = ${muMCQCount + muCashCount}`);
console.log(`TOTAL: ${allMCQ.length} MCQ + ${allCash.length} Cash = ${allMCQ.length + allCash.length}`);

// Generate the file
const output = `// ==================== QUESTIONS BANK ====================
// Auto-generated: 800 questions across 4 categories
// Categories: Culture Générale, Cinéma & Séries, Sport, Musique
// Each category: 150 MCQ + 50 Cash = 200 questions
//
// MCQ format: { id, text, answers: string[], correct: number, category, type }
// Cash format: { id, text, acceptedAnswers: string[], category, type }
// ID prefixes: cg=culture, cs=cinéma, sp=sport, mu=musique
// Cash IDs: {prefix}_ca{number}

import type { MCQQuestion, CashAnswerQuestion } from './game-types';

export const ALL_MCQ_QUESTIONS: MCQQuestion[] = [
${allMCQ.join(',\n')}
];

export const ALL_CASH_QUESTIONS: CashAnswerQuestion[] = [
${allCash.join(',\n')}
];
`;

writeFileSync('/home/z/my-project/src/lib/questions-bank.ts', output, 'utf-8');
console.log('\nFile written successfully to /home/z/my-project/src/lib/questions-bank.ts');
