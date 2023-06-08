import { Submission } from '@/lib/model/submission';
import { Card } from '@/components/(ui)/card';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/(ui)/table';

type SubmissionListProps = {
  submissions: Submission[];
};

export function SubmissionList({ submissions }: SubmissionListProps) {
  console.log(submissions);
  return (
    <Card>
      <Table>
        <TableHeader>
          <TableRow className="bg-secondary">
            <TableHead className="py-4 font-semibold text-foreground">
              Name des Kindes
            </TableHead>
            <TableHead className="font-semibold text-foreground">
              Wir bringen mit
            </TableHead>
            <TableHead className="font-semibold text-foreground">
              Anzahl Personen
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {submissions.map((s) => (
            <TableRow key={s.id}>
              <TableCell>{s.name}</TableCell>
              <TableCell>{s.what}</TableCell>
              <TableCell>{s.persons}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  );
}
