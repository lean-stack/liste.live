import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { Submission } from '@/lib/model/submission';
import { Button } from '@/components/(ui)/button';
import { Input } from '@/components/(ui)/input';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/form';

import { saveSubmission } from './actions';

type SubmissionFormProps = {
  listId: string;
  submitterId: string;
  submission: Submission;
  onAction: () => void;
};

export function SubmissionForm({
  listId,
  submitterId,
  submission,
  onAction,
}: SubmissionFormProps) {
  const router = useRouter();
  const [isSaving, setSaving] = useState(false);

  const form = useForm<z.infer<typeof Submission>>({
    resolver: zodResolver(Submission),
    defaultValues: submission,
  });

  async function onSubmit(values: z.infer<typeof Submission>) {
    setSaving(true);
    submitterId = await saveSubmission(listId, submitterId, values);
    router.replace(` ${listId}/${submitterId}`);
    setSaving(false);
    onAction();
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name des Kindes</FormLabel>
              <FormControl>
                <Input placeholder="Lola" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="what"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Was wir mitbringen</FormLabel>
              <FormControl>
                <Input
                  placeholder="Zum Beispiel Nudelsalat oder 3 Flaschen Rote Brause"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="persons"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Wieviele wir sind</FormLabel>
              <FormControl>
                <Input placeholder="3 oder 4" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="space-x-4">
          <Button variant="default" type="submit">
            {isSaving ? 'Absenden ...' : 'Beitragen'}
          </Button>
          {!!submitterId && (
            <Button onClick={onAction} variant="secondary">
              Abbrechen
            </Button>
          )}
        </div>
      </form>
    </Form>
  );
}
