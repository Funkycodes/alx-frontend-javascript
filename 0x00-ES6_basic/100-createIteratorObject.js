export default function createIteratorObject(report) {
  const employeePerDepartment = Object.values(report.allEmployees);

  const employeeIterator = employeePerDepartment.reduce((start, end) => [
    ...start,
    ...end,
  ]);
  return employeeIterator;
}
