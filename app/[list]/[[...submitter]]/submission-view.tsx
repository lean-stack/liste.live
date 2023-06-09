'use client';

import { useState } from 'react';
import { usePathname } from 'next/navigation';

import { Submission } from '@/lib/model/submission';
import { Button } from '@/components/(ui)/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/(ui)/card';
import { Separator } from '@/components/(ui)/separator';

import { SubmissionForm } from './submission-form';

type SubmissionViewProps = {
  listId: string;
  submitterId: string;
  submission: Submission;
};

export function SubmissionView({
  listId,
  submitterId,
  submission,
}: SubmissionViewProps) {
  const [isEditMode, setEditMode] = useState(!submitterId);
  const pathname = usePathname();

  return (
    <Card className="md:grid md:grid-cols-3">
      <CardHeader className="md:col-span-1">
        <CardTitle>Unser Beitrag</CardTitle>
        {isEditMode && (
          <CardDescription>
            Eure Angaben können auch wieder geändert werden.
          </CardDescription>
        )}
      </CardHeader>
      <CardContent className="md:col-span-2 md:pt-6">
        {isEditMode ? (
          <SubmissionForm
            listId={listId}
            submitterId={submitterId}
            submission={submission}
            onAction={() => setEditMode(false)}
          />
        ) : (
          <div className="space-y-4">
            <div className="space-y-2">
              <div className="text-sm font-medium">Name des Kindes</div>
              <div className="pl-4 text-muted-foreground">
                {submission.name}
              </div>
            </div>
            <div className="space-y-2">
              <div className="text-sm font-medium">Was wir mitbringen</div>
              <div className="pl-4 text-muted-foreground">
                {submission.what}
              </div>
            </div>
            <div className="space-y-2">
              <div className="text-sm font-medium">Wieviele wir sind</div>
              <div className="pl-4 text-muted-foreground">
                {submission.persons}
              </div>
            </div>
            <div>
              <Button onClick={() => setEditMode(true)} variant="default">
                Ändern
              </Button>
            </div>
          </div>
        )}
      </CardContent>
      {!isEditMode && (
        <CardFooter className="flex flex-col gap-y-4 md:col-span-3">
          <Separator />
          <p className="text-sm">
            Ihr könnt Eure Angaben jederzeit ändern. Fügt dazu jetzt diese Seite
            zu Euren Lesezeichen hinzu oder speichert/teilt folgenden Link:
          </p>
          <a
            className="text-sm underline"
            href={`${window.location.origin}${pathname}`}
          >
            {`${window.location.origin}${pathname}`}
          </a>
        </CardFooter>
      )}
    </Card>
  );
}
