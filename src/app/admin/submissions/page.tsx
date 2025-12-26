import { readSubmissions } from '@/lib/fileStore';
import dayjs from 'dayjs';

type Props = {
  searchParams: {
    user?: string;
    pass?: string;
  };
};

export default async function AdminPage() {
  const submissions = readSubmissions();
  console.log(submissions, "submissions");

  return (
    <div className="card p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-2xl font-semibold mb-4">Submitted Applications</h1>

      {submissions.length === 0 ? (
        <p className="text-gray-500">No submissions yet.</p>
      ) : (
        <div className="overflow-x-auto rounded-lg shadow-md border border-gray-200">
          <table className="min-w-full table-auto bg-white">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">Name</th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">Email</th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">State</th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">Date</th>
              </tr>
            </thead>
            <tbody>
              {submissions.map((s: any, i: number) => (
                <tr key={i} className="hover:bg-gray-50 transition-colors duration-200">
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">{s.name}</td>
                  <td className="px-6 py-4 text-sm text-gray-600">{s.email}</td>
                  <td className="px-6 py-4 text-sm text-gray-600">{s.state}</td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    {dayjs(s.date).format('h:mm A D MMM YYYY')}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
