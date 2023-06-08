import { notFound } from 'next/navigation';

import { get } from '@/lib/firebase/collection';
import { Submission } from '@/lib/model/submission';
import { Submitter } from '@/lib/model/submitter';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/(ui)/card';

import { SubmissionForm } from './submission-form';

type ListPageProps = {
  params: {
    list: string;
    submitter: string[];
  };
};

async function getSubmissionData(listId: string, submitterId: string) {
  const submitter = await get<Submitter>(
    `lists/${listId}/submitters`,
    submitterId
  );

  if (!submitter) return undefined;

  const submission = await get<Submission>(
    `lists/${listId}/submissions`,
    submitter.submissionId
  );

  return submission;
}

export default async function ListPage({
  params: { list: listId, submitter: submitterCatchAll },
}: ListPageProps) {
  let submission: Submission | undefined;
  let submitterId = '';

  if (submitterCatchAll) {
    submitterId = submitterCatchAll[0];
    submission = await getSubmissionData(listId, submitterId);

    if (!submission) {
      notFound();
    }
  } else {
    submission = {
      id: '',
      name: '',
      what: '',
      persons: '',
    };
  }

  return (
    <Card className="md:grid md:grid-cols-3">
      <CardHeader className="md:col-span-1">
        <CardTitle>Unser Beitrag</CardTitle>
        <CardDescription>
          Eure Angaben können auch wieder geändert werden.
        </CardDescription>
      </CardHeader>
      <CardContent className="md:col-span-2 md:pt-6">
        <SubmissionForm
          listId={listId}
          submitterId={submitterId}
          submission={submission}
        />
      </CardContent>
    </Card>
  );
}
