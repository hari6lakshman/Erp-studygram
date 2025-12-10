'use client';

import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

type NoteFiltersProps = {
  colleges: string[];
  subjects: string[];
  selectedCollege: string;
  onCollegeChange: (value: string) => void;
  selectedSubject: string;
  onSubjectChange: (value: string) => void;
  searchQuery: string;
  onSearchChange: (value: string) => void;
};

export function NoteFilters({
  colleges,
  subjects,
  selectedCollege,
  onCollegeChange,
  selectedSubject,
  onSubjectChange,
  searchQuery,
  onSearchChange,
}: NoteFiltersProps) {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
      <Select value={selectedCollege} onValueChange={onCollegeChange}>
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Filter by College" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All Colleges</SelectItem>
          {colleges.map((college) => (
            <SelectItem key={college} value={college}>
              {college}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <Select value={selectedSubject} onValueChange={onSubjectChange}>
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Filter by Subject" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All Subjects</SelectItem>
          {subjects.map((subject) => (
            <SelectItem key={subject} value={subject}>
              {subject}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <Input
        type="search"
        placeholder="Search by professor or subject..."
        value={searchQuery}
        onChange={(e) => onSearchChange(e.target.value)}
        className="md:col-span-1"
      />
    </div>
  );
}
