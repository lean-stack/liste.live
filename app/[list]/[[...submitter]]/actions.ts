'use server';

import { redirect } from 'next/navigation';

import { create, update } from '@/lib/firebase/collection';
import { Submission } from '@/lib/model/submission';
import { Submitter } from '@/lib/model/submitter';

export async function saveSubmission(
  listId: string,
  submitterId: string,
  submission: Submission
) {
  if (submission.id) {
    await update(`lists/${listId}/submissions`, submission);
  } else {
    const createdSubmission = await create<Submission>(
      `lists/${listId}/submissions`,
      submission
    );
    const createdSubmitter = await create<Submitter>(
      `lists/${listId}/submitters`,
      { submissionId: createdSubmission.id }
    );
    submitterId = createdSubmitter.id;
  }
  return submitterId;
}
