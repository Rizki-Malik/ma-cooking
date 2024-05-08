import { Table, TableBody, TableCell, TableHead, TableHeaderCell, TableRow } from '@tremor/react';

const data = [
  {
    course: 'Baking and Pastry',
    instructor: 'John Doe',
    duration: '6 weeks',
    schedule: 'Mon/Wed/Fri 10am-12pm',
    location: 'Kitchen Studio A',
    enrolledStudents: 25,
  },
  {
    course: 'Culinary Arts',
    instructor: 'Jane Smith',
    duration: '8 weeks',
    schedule: 'Tue/Thu 2pm-4pm',
    location: 'Kitchen Studio B',
    enrolledStudents: 30,
  },
  {
    course: 'International Cuisine',
    instructor: 'Mike Johnson',
    duration: '10 weeks',
    schedule: 'Sat/Sun 9am-11am',
    location: 'Kitchen Studio C',
    enrolledStudents: 20,
  },
];

export default function CookingCoursesTable() {
  return (
    <>
    <div className="sm:flex sm:items-center sm:justify-between sm:space-x-10">
          <div>
            <h3 className="font-semibold text-tremor-content-strong dark:text-dark-tremor-content-strong">
                Cooking Courses
            </h3>
            <p className="mt-1 text-tremor-default leading-6 text-tremor-content dark:text-dark-tremor-content">
                Overview of available cooking courses.
            </p>
          </div>
        <button
            type="button"
            className="mt-4 w-full whitespace-nowrap rounded-sm bg-green-500 px-4 py-2.5 text-white font-medium text-green-500-inverted shadow-tremor-input hover:bg-green-700 dark:bg-dark-green-500 dark:text-dark-green-500-inverted dark:shadow-dark-tremor-input dark:hover:bg-dark-green-500 sm:mt-0 sm:w-fit"
        >
            Export Data
        </button>
    </div>
    <Table className="mt-8">
        <TableHead>
          <TableRow className="border-b border-tremor-border dark:border-dark-tremor-border">
            <TableHeaderCell className="text-tremor-content-strong dark:text-dark-tremor-content-strong">Course</TableHeaderCell>
            <TableHeaderCell className="text-tremor-content-strong dark:text-dark-tremor-content-strong">Instructor</TableHeaderCell>
            <TableHeaderCell className="text-tremor-content-strong dark:text-dark-tremor-content-strong">Duration</TableHeaderCell>
            <TableHeaderCell className="text-tremor-content-strong dark:text-dark-tremor-content-strong">Schedule</TableHeaderCell>
            <TableHeaderCell className="text-tremor-content-strong dark:text-dark-tremor-content-strong">Location</TableHeaderCell>
            <TableHeaderCell className="text-tremor-content-strong dark:text-dark-tremor-content-strong">Enrolled Students</TableHeaderCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((item) => (
            <TableRow key={item.course}>
              <TableCell>{item.course}</TableCell>
              <TableCell>{item.instructor}</TableCell>
              <TableCell>{item.duration}</TableCell>
              <TableCell>{item.schedule}</TableCell>
              <TableCell>{item.location}</TableCell>
              <TableCell>{item.enrolledStudents}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
}
