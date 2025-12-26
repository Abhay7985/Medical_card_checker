type Submission = {
  name: string;
  email: string;
  age: number;
  condition?: string;
  state: string;
  date: string;
};

const submissions: Submission[] = [];

export function saveSubmission(data: Submission) {
  submissions.push(data);
}

export function getSubmissions() {
  return submissions;
}
