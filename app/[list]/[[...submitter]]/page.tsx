import { notFound } from 'next/navigation';

import { get, getAll } from '@/lib/firebase/collection';
import { Submission } from '@/lib/model/submission';
import { Submitter } from '@/lib/model/submitter';

import { SubmissionList } from './submission-list';
import { SubmissionView } from './submission-view';

type ListPageProps = {
  params: {
    list: string;
    submitter?: string[];
  };
};

export const revalidate = 0;

async function getSubmissions(listId: string) {
  const submissions = await getAll<Submission>(`lists/${listId}/submissions`);
  return submissions;
}

async function getSubmission(listId: string, submitterId: string | undefined) {
  if (!submitterId) return undefined;

  const submitter = await get<Submitter>(
    `lists/${listId}/submitters`,
    submitterId
  );

  if (!submitter) notFound();

  const submission = await get<Submission>(
    `lists/${listId}/submissions`,
    submitter.submissionId
  );

  return submission;
}

export default async function ListPage({
  params: { list: listId, submitter: submitterCatchAll },
}: ListPageProps) {
  const submitterId = submitterCatchAll?.at(0) || '';

  const submission = (await getSubmission(listId, submitterId)) || {
    id: '',
    name: '',
    what: '',
    persons: '',
  };

  const submissions = await getSubmissions(listId);

  return (
    <div className="space-y-6">
      <SubmissionView
        listId={listId}
        submitterId={submitterId}
        submission={submission}
      />
      {submissions.length > 0 && <SubmissionList submissions={submissions} />}
    </div>
  );
}
