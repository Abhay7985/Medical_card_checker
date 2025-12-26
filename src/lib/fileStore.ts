import fs from 'fs';
import path from 'path';

const filePath = path.join(process.cwd(), 'data', 'submissions.json');

export function readSubmissions() {
  if (!fs.existsSync(filePath)) return [];
  const data = fs.readFileSync(filePath, 'utf-8');
  return JSON.parse(data || '[]');
}

export function saveSubmission(submission: any) {
  const existing = readSubmissions();
  existing.push({
    ...submission,
    date: new Date().toISOString(),
  });

  fs.mkdirSync(path.dirname(filePath), { recursive: true });
  fs.writeFileSync(filePath, JSON.stringify(existing, null, 2));
}
