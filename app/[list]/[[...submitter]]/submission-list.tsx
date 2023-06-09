import { Submission } from '@/lib/model/submission';
import { Card } from '@/components/(ui)/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/(ui)/table';

type SubmissionListProps = {
  submissions: Submission[];
};

export function SubmissionList({ submissions }: SubmissionListProps) {
  return (
    <Card>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="py-4 font-semibold text-foreground">
              Name
            </TableHead>
            <TableHead className="font-semibold text-foreground">
              Wir bringen mit
            </TableHead>
            <TableHead className="font-semibold text-foreground">
              Personen
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
